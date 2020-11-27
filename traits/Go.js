import {Trait} from '../Entity.js';

export default class Go extends Trait {
    constructor() {
        super('go');
        this.dir = 0;
        this.speed = 6000;
    }
    update(entity, deltaTime) {
        entity.vel.x = this.speed * this.dir * deltaTime;
        // entity.pos.x += entity.vel.x * deltaTime;
        // entity.pos.y += entity.vel.y * deltaTime;
        if(this.engageTime > 0) {
            entity.vel.y = -this.velocity;
            this.engageTime -= deltaTime;
        }
    }
}
