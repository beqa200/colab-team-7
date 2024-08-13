declare module "react-image-zooom" {
  import { ComponentType } from "react";

  interface ImageZoomProps {
    src: string;
    alt: string;
    zoom?: number;
    width?: string;
    height?: string;
    className?: string;
  }

  const ImageZoom: ComponentType<ImageZoomProps>;

  export default ImageZoom;
}
