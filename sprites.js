import SpriteSheet from "./SpriteSheet.js";
import { loadImage } from "./loaders.js";

export async function loadSprites() {
  const image = await loadImage("mr.png");
  const sprites = new SpriteSheet(image, 17, 36);
  sprites.define("mr", 0, 0, 17, 36);
  return sprites;
}
export async function loadBackgroundSprites() {
  const image = await loadImage("mr.png");
  const sprites = new SpriteSheet(image, 16, 16);
  sprites.define("brick", 118, 49, 16, 16);
  sprites.define("ground", 166, 33, 16, 16);
  return sprites;
}