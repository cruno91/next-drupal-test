import React from "react";
import Image from "next/image";

type Image = {
  src: 'https://placeimg.com/768/400/any';
  alt: 'alt text';
  width: 768;
  height: 400;
}

interface FigureProps {
  caption: string;
  image?: Image;
}

export const Figure = ({
  caption = 'Figure caption',
  image,
  ...props
}: FigureProps) => {
  return (
    <figure {...props}>
      <Image
        src={image.src}
        width={image.width}
        height={image.height}
        alt={image.alt}
      />
      {caption && (
        <figcaption className="py-2 text-sm text-center text-gray-600">
          {caption}
        </figcaption>
      )}
    </figure>
  );
};
