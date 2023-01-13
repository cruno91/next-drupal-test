import type { Meta, StoryObj } from '@storybook/react';
import Image from 'next/image';

const meta: Meta<typeof Image> = {
  title: 'Atoms/Images',
  component: Image,
}

export default meta;
type Story = StoryObj<typeof Image>;

export const NextImage: { args: { src: string; alt: string; width: number; height: number } } = {
  args: {
    src: 'https://placeimg.com/768/400/any',
    alt: 'alt text',
    width: 768,
    height: 400
  },
};
