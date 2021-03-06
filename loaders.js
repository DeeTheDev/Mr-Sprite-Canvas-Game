export function loadImage(url) {
  return new Promise((resolve) => {
    const image = new Image();
    image.addEventListener("load", () => {
      setTimeout(resolve, 1000, image);
      // resolve(image);
    });
    image.src = url;
  });
}
