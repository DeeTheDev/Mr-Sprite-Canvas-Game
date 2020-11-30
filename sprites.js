// import SpriteSheet from "./SpriteSheet.js";
// import { loadImage } from "./loaders.js";

// export async function loadCatSprite() {
//   const image = await loadImage("cat_sprite.png");
//   const cat = new SpriteSheet(image, 64, 64);
//   cat.define("cat", 
//     // Spritesheet character location (w, h)
//     87, 87,
//     // Spritesheet viewport (w, h) (what you see)
//     16, 32);
//   return cat;
// }
// export async function loadBackgroundSprites() {
//   const image = await loadImage("mr.png");
//   const sprites = new SpriteSheet(image, 16, 16);
//   sprites.defineTile("brick", 118, 49);
//   sprites.defineTile("ground", 166, 33);
//   return sprites;
// }