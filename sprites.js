import SpriteSheet from "./SpriteSheet.js";
import { loadImage } from "./loaders.js";

export function loadSprites() {
  return loadImage("mr.png")
      .then((image) => {
        const sprites = new SpriteSheet(image, 17, 36);
        sprites.define("mr", 0, 0, 17, 36);
        // sprites.define("sky", 0, 0, 17, 17);
        return sprites;
      });
}
