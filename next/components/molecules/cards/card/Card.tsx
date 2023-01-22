import React from "react";
import Image from 'next/image';
import Link from 'next/link';

import {Icon} from "../../../atoms/icon/Icon";

interface CardProps {
  title: string;
  imagePath: string;
  imageAlt:string;
  description: string;
  link: string;
  tags: string;
}

export const Card = ({
  title,
  imagePath,
  imageAlt,
  description,
  link,
  tags
}: CardProps) => {
  return (
    <Link href={link}>
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <Image className="w-full" src={imagePath} alt={imageAlt} width={384} height={297}/>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{title}</div>
            <p className="text-gray-700 text-base">
              {description}
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <Icon name="tag" style="regular"/>
            {tags}
          </div>
      </div>
    </Link>
  );
};
