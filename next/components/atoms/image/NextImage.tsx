import React from "react";
import Image from "next/image";

interface ImageProps {
  src: string;
  width: number;
  height: number;
  alt: string;
}

export const NextImage = ({
  src = '#',
  width = 768,
  height = 400,
  alt = 'alt'
}: ImageProps) => {
  return (
    <Image
      src={src}
      width={width}
      height={height}
      alt={alt}
    />
  );
};
