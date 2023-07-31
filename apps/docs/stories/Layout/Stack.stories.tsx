import type { Meta, StoryObj } from "@storybook/react";
import { Stack } from "@themeless-ui/react";

const meta = {
  title: "Layout/Stack",
  component: Stack,
  tags: ["autodocs"],
} satisfies Meta<typeof Stack>;

export default meta;
type Story = StoryObj<typeof meta>;

const children = [
  <div key="1">1</div>,
  <div key="2">2</div>,
  <div key="3">3</div>,
];

export const Vertical: Story = {
  args: {
    direction: "vertical",
    children,
  },
};

export const Horizontal: Story = {
  args: {
    direction: "horizontal",
    children,
  },
};
