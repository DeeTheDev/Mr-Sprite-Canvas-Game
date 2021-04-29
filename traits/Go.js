import {Trait} from '../Entity.js';

export default class Go extends Trait {
    constructor() {
        super('go');
        this.dir = 0;
        this.acceleration = 400;
        this.deceleration = 300;
        // Resistance when accelerating
        this.dragFactor = 1/5000;

        this.distance = 0;
        this.idle = true;
        this.heading = 1;
    }
    update(entity, deltaTime) {
        const absX = Math.abs(entity.vel.x);
        // Distance goes up by velocity
        // Distances resets to 0 when not moving
        if(this.dir !== 0) {
            entity.vel.x += this.acceleration * deltaTime * this.dir;

            if(entity.jump) {
                if(entity.jump.falling === false) {
                    this.heading =this.dir;
                }else {
                    this.heading = this.dir;
                }
            }
            this.heading = this.dir;
        } else if(entity.vel.x !== 0) {
            const decel = Math.min(absX, this.acceleration * deltaTime);
            entity.vel.x += entity.vel.x > 0 ? -decel : decel;
        }else{
            this.distance = 0;
        }
        const drag = this.dragFactor * entity.vel.x * absX;
        entity.vel.x -= drag;
        
        this.distance += absX * deltaTime;
        
        // entity.pos.x += entity.vel.x * deltaTime;
        // entity.pos.y += entity.vel.y * deltaTime;
        // if(this.engageTime > 0) {
        //     entity.vel.y = -this.velocity;
        //     this.engageTime -= deltaTime;
        // }
    }
}
