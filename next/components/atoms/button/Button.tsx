import React from "react";
import { Icon } from '../icon/Icon';

type Icon = {
  style: 'regular';
  name: string;
};

interface ButtonProps {
  link: string;
  icon?: Icon;
  label: string;
  classes: string;
}

export const Button = ({
  link = '#',
  icon,
  label = 'Button',
  classes='',
  ...props
}: ButtonProps) => {
  return (
    <button className={classes} {...props}>
      <a href={link}>
        {icon ? (
          <Icon {...icon}/>
        ) : (
          <></>
        )}
        {label}
      </a>
    </button>
  );
};
