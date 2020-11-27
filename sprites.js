import SpriteSheet from "./SpriteSheet.js";
import { loadImage } from "./loaders.js";

export async function loadMrSprite() {
  const image = await loadImage("mr.png");
  const mr = new SpriteSheet(image, 17, 36);
  mr.define("mr", 0, 0, 17, 36);
  return mr;
}
export async function loadBackgroundSprites() {
  const image = await loadImage("mr.png");
  const sprites = new SpriteSheet(image, 16, 16);
  sprites.defineTile("brick", 118, 49);
  sprites.defineTile("ground", 166, 33);
  return sprites;
}