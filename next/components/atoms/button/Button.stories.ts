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
    label: 'Button'
  },
};

export const PrimaryButtonIcon: Story = {
  args: {
    link: '#',
    icon: {
      style: 'regular',
      name: 'flag'
    },
    label: 'Button'
  },
};
