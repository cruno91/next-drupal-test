import type { Meta, StoryObj } from '@storybook/react';
import { NextImage } from './NextImage';

const meta: Meta<typeof NextImage> = {
  title: 'Atoms',
  component: NextImage,
};

export default meta;
type Story = StoryObj<typeof NextImage>;

export const Images: Story = {
  args: {
    src: 'https://placeimg.com/768/400/any',
    width: 768,
    height: 400,
    alt: 'alt text'
  },
};
