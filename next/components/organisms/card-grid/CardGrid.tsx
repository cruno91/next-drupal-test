import React from "react"

import styles from './CardGrid.module.css';
import { Card } from '../../molecules/cards/card/Card';

interface Card {
  title: string;
  imagePath: string;
  imageAlt:string;
  description: string;
  link: string;
  tags: string;
}

interface CardGridProps {
  columns?: 2 | 3 | 4;
  cards: Card[];
}

let colClass;

export const CardGrid = ({
  columns,
  cards
}: CardGridProps) => {
  switch (columns) {
    case 2:
      colClass = styles.cardGrid__2_col;
      break;
    case 4:
      colClass = styles.cardGrid__4_col;
      break;
    case 3:
    default:
      colClass = styles.cardGrid__3_col;
      break;
  }

  return (
    <div className={styles.cardGrid}>
        {cards.map((card, index) => (
          <div className={colClass}>
            <Card {...card} />
          </div>
        ))}
    </div>
  );
};
