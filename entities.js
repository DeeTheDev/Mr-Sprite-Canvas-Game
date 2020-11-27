import Entity from './Entity.js';
import Velocity from './traits/Velocity.js'
import Jump from './traits/Jump.js'
import { loadMrSprite } from "./sprites.js";

export async function createMr() {
    const sprites = await loadMrSprite();
    const mr = new Entity();
    mr.draw = function drawMr(context) {
        sprites.draw('mr', context, this.pos.x, this.pos.y);
    };
    mr.addTrait(new Velocity());
    mr.addTrait(new Jump());
    // mr.update = function updateMr(deltaTime) {
    //     this.pos.x += this.vel.x * deltaTime;
    //     this.pos.y += this.vel.y * deltaTime;
    // };
    return mr;
}