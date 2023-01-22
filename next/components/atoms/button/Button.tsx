import React from "react";
import Link from "next/link";

import styles from './Button.module.css';
import { Icon } from '../icon/Icon';

type Icon = {
  style: 'regular';
  name: string;
};

interface ButtonProps {
  link: string;
  icon?: Icon;
  label: string;
  buttonType?: 'primary' | 'secondary';
}

export const Button = ({
  link = '#',
  icon,
  label,
  buttonType
}: ButtonProps) => {
  let classes;
  switch (buttonType) {
    case 'primary':
      classes = styles.primary_button;
      break;
    case 'secondary':
      classes = styles.secondary_button;
  }

  return (
    <button className={classes}>
      <Link href={link}>
        {icon ? (
          <Icon {...icon}/>
        ) : (
          <></>
        )}
        {label}
      </Link>
    </button>
  );
};
