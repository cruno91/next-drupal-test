import type { Meta, StoryObj } from "@storybook/react";
import { CardGrid } from './CardGrid';
import cards from './cards.json';

const meta: Meta<typeof CardGrid> = {
  title: 'Organisms/Card Groups',
  component: CardGrid,
};

export default meta;
type Story = StoryObj<typeof CardGrid>;

export const CardGrids: Story = {
  args: {
    columns: '3',
    cards: cards
  },
}
