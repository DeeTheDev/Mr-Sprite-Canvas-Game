import Entity from './Entity.js';
import Go from './traits/Go.js'
import Jump from './traits/Jump.js'
import Velocity from './traits/Velocity.js'
import { loadMrSprite } from "./sprites.js";

export async function createMr() {
    const sprites = await loadMrSprite();
    const mr = new Entity();
    mr.size.set(16,32);

    mr.addTrait(new Go());
    mr.addTrait(new Jump());
    // mr.addTrait(new Velocity());
    mr.draw = function drawMr(context) {
        sprites.draw('mr', context, this.pos.x, this.pos.y);
    };
    
    // mr.update = function updateMr(deltaTime) {
    //     this.pos.x += this.vel.x * deltaTime;
    //     this.pos.y += this.vel.y * deltaTime;
    // };
    return mr;
}