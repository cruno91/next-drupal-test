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
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
      <a href={link} {...props}>
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
