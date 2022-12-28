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
}

export const Button = ({
  link = '#',
  icon,
  label = 'Button',
  ...props
}: ButtonProps) => {
  return (
    <a href={link}>
      {icon ? (
        <Icon name={icon.name} style={icon.style}/>
      ) : (
        <></>
      )}
      {label}
    </a>
  );
};
