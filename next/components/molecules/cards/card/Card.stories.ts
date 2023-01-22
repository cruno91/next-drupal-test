import type { Meta, StoryObj } from "@storybook/react";
import { Card } from './Card';

const meta: Meta<typeof Card> = {
  title: 'Molecules/Cards',
  component: Card,
};

export default meta;
type Story = StoryObj<typeof Card>;

export const VerticalCard: Story = {
  args: {
    title: 'My Article',
    imagePath: 'https://cdcssl.ibsrv.net/autodata/images/?IMG=USD20MBCCN1A01301.JPG&WIDTH=736',
    imageAlt: 'alt text',
    description: 'Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.',
    link: '#',
    tags: 'News'
  },
}
