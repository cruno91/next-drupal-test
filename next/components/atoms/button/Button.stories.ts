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
    buttonType: 'primary'
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
    buttonType: 'primary'
  },
};

export const SecondaryButton: Story = {
  args: {
    link: '#',
    label: 'Button',
    buttonType: 'secondary'
  },
};
