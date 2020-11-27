import Compositor from "./Compositor.js";
import Timer from "./Timer.js";
import { loadLevel } from "/loaders.js"
import { createMr} from './entities.js';
import { loadBackgroundSprites } from "./sprites.js";
import { createBackgroundLayer, createSpriteLayer} from './layers.js';
import Keyboard from "./KeyboardState.js";

// Canvas config
const cvs = document.querySelector("canvas#game");
const ctx = cvs.getContext("2d");

Promise.all([
    createMr(),
    loadBackgroundSprites(),
    loadLevel('1-1')
])
.then(([mr, bgSprites, level]) => {
    const comp = new Compositor();
    
    const backgroundLayer = createBackgroundLayer(level.backgrounds, bgSprites);
    comp.layers.push(backgroundLayer);

    const gravity = 400;
    mr.pos.set(50, 268);

    const SPACE = 32;
    const input = new Keyboard();
    input.addMapping(SPACE, (keyState) => {
      console.log(keyState);
    //   mr.pos.x += 2;
    //   mr.pos.y += 2;
        if(keyState) {
            mr.jump.start();
        } else {
            mr.jump.cancel();
        }
    });
    input.listenTo(window);
    const spriteLayer = createSpriteLayer(mr);
    comp.layers.push(spriteLayer);

    const timer = new Timer(1/60);
    timer.update = function update(deltaTime) {
        mr.update(deltaTime);
        comp.draw(ctx);
            mr.vel.y += gravity * deltaTime;
    }
    timer.start();
});