import type { Meta, StoryObj } from "@storybook/react";
import { Anchor } from "@themeless-ui/react";

const meta = {
  title: "Navigation/Anchor",
  component: Anchor,
  tags: ["autodocs"],
} satisfies Meta<typeof Anchor>;

export default meta;
type Story = StoryObj<typeof meta>;

const href = "https://example.com";
const children = "Example.com";

export const Default: Story = {
  args: {
    href,
    children,
  },
};

export const ExternalLink: Story = {
  args: {
    href,
    target: "_blank",
    children,
  },
};
