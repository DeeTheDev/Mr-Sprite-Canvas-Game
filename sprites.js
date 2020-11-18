import SpriteSheet from "./SpriteSheet.js";
import { loadImage } from "./loaders.js";

export function loadMrSprite() {
  return loadImage("mr.png")
      .then((image) => {
        const sprites = new SpriteSheet(image, 17, 36);
        sprites.define("idle", 0, 0, 17, 36);
        return sprites;
      });
}
