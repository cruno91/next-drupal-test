import type { Meta, StoryObj } from '@storybook/react';
import { Figure } from './Figure';

const meta: Meta<typeof Figure> = {
  title: 'Atoms/Images',
  component: Figure,
};

export default meta;
type Story = StoryObj<typeof Figure>;

export const FigureImage: { args: { image: { src: string; width: number; alt: string; height: number }; caption: string } } = {
  args: {
    caption: 'Caption for image',
    image: {
      src: 'https://placeimg.com/768/400/any',
      width: 768,
      height: 500,
      alt: 'alt text'
    }
  },
};
