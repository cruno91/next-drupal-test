import React from "react";

interface IconProps {
  style?: 'solid' | 'brands' | 'regular' | 'light' | 'thin' | 'duotone';
  name: string;
}

export const Icon = ({
  style = 'regular',
  name,
  ...props
}: IconProps) => {
  return (
    <i
      className={[`fa-${name}`, `fa-${style}`].join(' ')}
      {...props}
    />
  );
};
