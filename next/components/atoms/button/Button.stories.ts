import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Atoms/Buttons',
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const PrimaryButton: Story = {
  args: {
    link: '#',
    label: 'Button',
    classes: 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded'
  },
};

export const PrimaryButtonIcon: Story = {
  args: {
    link: '#',
    icon: {
      style: 'regular',
      name: 'flag'
    },
    label: 'Button',
    classes: 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded'
  },
};

export const SecondaryButton: Story = {
  args: {
    link: '#',
    label: 'Button',
    classes: 'bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'
  },
};
