import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@themeless-ui/react";

const meta = {
  title: "Form/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: { onClick: { action: "click" } },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Button",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: "Button",
  },
};
