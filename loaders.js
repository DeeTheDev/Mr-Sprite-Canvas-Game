import Level from './Level.js'
import { createBackgroundLayer, createSpriteLayer} from './layers.js';
import { loadBackgroundSprites } from "./sprites.js";

export function loadImage(url) {
  return new Promise((resolve) => {
    const image = new Image();
    image.addEventListener("load", () => {
      // setTimeout(resolve, 1000, image);
      resolve(image);
    });
    image.src = url;
  });
}

function createTiles(level, bgs) {
  bgs.forEach(bg => {
    bg.ranges.forEach(([x1, x2, y1, y2]) => {
      for (let x = x1; x < x2; ++x) {
        for (let y = y1; y < y2; ++y) {
          level.tiles.set(x, y, {
            name: bg.tile,
          });
        }
      }
    });
  });
}


export async function loadLevel(name) {

  const [levelSpec, bgSprites] = await Promise.all([
    fetch(`/levels/${name}.json`)
      .then(r => r.json()),
    loadBackgroundSprites(),
  ]);
  const level = new Level();
  createTiles(level, levelSpec.backgrounds);
  const backgroundLayer = createBackgroundLayer(level, bgSprites);
  level.comp.layers.push(backgroundLayer);
  const spriteLayer = createSpriteLayer(level.entities);
  level.comp.layers.push(spriteLayer);

  return level;

}
