import React from "react";
import Image from 'next/image';
import Link from 'next/link';

import styles from './Card.module.css';
import {Icon} from '../../../atoms/icon/Icon';

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
      <div className={styles.card}>
        <Image 
          className={styles.card__image} 
          src={imagePath} 
          alt={imageAlt} 
          width={384} 
          height={297}
        />
          <div className={styles.card__text_wrapper}>
            <div className={styles.card__title}>
              {title}
            </div>
            <p className={styles.card__description}>
              {description}
            </p>
          </div>
          <div className={styles.card__tags}>
            <Icon name="tag" style="regular"/>
            {tags}
          </div>
      </div>
    </Link>
  );
};
