/**
 * Stands in for statically imported images. Mirrors next/image's
 * `StaticImageData` so components can read width/height and use
 * `placeholder="blur"` without next/image throwing.
 */
const image = {
  src: "/test-image.png",
  height: 900,
  width: 1200,
  blurWidth: 8,
  blurHeight: 6,
  blurDataURL:
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=",
};

export default image;
