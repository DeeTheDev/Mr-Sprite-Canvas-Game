import { loadMrSprite } from "./sprites.js";
import Keyboard from "./KeyboardState.js";
const cvs = document.querySelector("canvas#game");
const ctx = cvs.getContext("2d");

cvs.width = 1000;
cvs.height = 500;

Promise.all([loadMrSprite()])
.then(([mrSprite]) => {
  const mister = {
    pos: { x: 50, y: 50 },
  };

  const SPACE = 32;
  const input = new Keyboard();
  input.addMapping(SPACE, (keyState) => {
    console.log(keyState);
    mister.pos.x += 2;
    mister.pos.y += 0;
  });
  input.listenTo(window);

  function update() {
    mrSprite.draw("idle", ctx, mister.pos.x, mister.pos.y);
    // pos.x += 2;
    // pos.y += 2;
    requestAnimationFrame(update);
  }
  update();
});

// loadImage("/mr.png").then((image) => {
//   ctx.drawImage(image, 0, 0, 17, 36, 40, 20, 17, 36);
// });
