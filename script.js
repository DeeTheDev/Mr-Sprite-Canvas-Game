import { loadSprites } from "./sprites.js";
import { loadLevel } from "/loaders.js"
import Keyboard from "./KeyboardState.js";
const cvs = document.querySelector("canvas#game");
const ctx = cvs.getContext("2d");

cvs.width = 500;
cvs.height = 350;

function drawBackground(background, context, sprites) {
    background.ranges.forEach(([x1, x2, y1, y2]) => {
        for (let x = x1; x < x2; ++x) {
            for (let y = y1; y < y2; ++y) {
                sprites.draw(background.tile, context, x, y)
            }
        }
    });
}

Promise.all([
    loadSprites(),
    loadLevel('1-1')
])
.then(([sprite, level]) => {
    const mister = {
        pos: { 
            x: 50, 
            y: 50 
        },
    };
    console.log("level loaded: ", level);

    const SPACE = 32;
    const input = new Keyboard();
    input.addMapping(SPACE, (keyState) => {
      console.log(keyState);
      mister.pos.x += 2;
      mister.pos.y += 0;
    });
    input.listenTo(window);
    
    function update() {
        // level.backgrounds.forEach(background => {
        //     drawBackground(level.backgrounds[0], ctx, sprite);
        // })
        // ctx.drawImage(backgroundBuffer, 0, 0);
        // const bg = new 
        sprite.draw("mr", ctx, mister.pos.x, mister.pos.y);
        requestAnimationFrame(update);
    }
    update();
});