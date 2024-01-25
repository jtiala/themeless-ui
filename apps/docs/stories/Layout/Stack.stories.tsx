import type { Meta, StoryObj } from "@storybook/react";
import { Stack } from "@themeless-ui/react";
import { SizeElement } from "../../utils";

const meta = {
  title: "Layout/Stack",
  component: Stack,
  tags: ["autodocs"],
} satisfies Meta<typeof Stack>;

export default meta;
type Story = StoryObj<typeof meta>;

const children = [...Array(3).keys()].map((n) => <SizeElement key={n} />);

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
