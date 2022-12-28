import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from './Icon';

const meta: Meta<typeof Icon> = {
  title: 'Atoms/Icons',
  component: Icon,
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const FontawesomeIcon: Story = {
  args: {
    style: 'regular',
    name: 'flag'
  },
};
