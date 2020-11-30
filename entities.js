import Entity from './Entity.js';
import Go from './traits/Go.js'
import Jump from './traits/Jump.js'
// import { loadCatSprite } from './sprites.js'
import { loadSpriteSheet } from '/loaders.js';
import { createAnimation } from '/anim.js';

export async function createCat() {
    // loadSpriteSheet(<json sprite file name>)
    const sprites = await loadSpriteSheet('cat');

    const cat = new Entity();
    cat.size.set(16,32);

    cat.addTrait(new Go());
    cat.addTrait(new Jump());

    const walkAnim = createAnimation(
        ['walk-1', 'walk-2', 'walk-3', 'walk-4', 
        'walk-5', 'walk-6', 'walk-7', 'walk-8'], 8);

    function routeFrame(cat) {
        if(cat.go.distance > 0) {
            if(cat.vel.x > 0 && cat.go.dir < 0 || cat.vel.x < 0 &&cat.go.dir > 0) {
                return 'break';
            }
            return walkAnim(cat.go.distance);
        }
        return 'idle';
    }

    cat.draw = function drawCat(context) {
        sprites.draw(routeFrame(this), context, 0, 0, cat.go.heading < 0);
    };
    
    // cat.update = function updatecat(deltaTime) {
    //     this.pos.x += this.vel.x * deltaTime;
    //     this.pos.y += this.vel.y * deltaTime;
    // };
    return cat;
}