import type { Meta, StoryObj } from "@storybook/react";
import { Button, Input, Stack } from "@themeless-ui/react";

const meta = {
  title: "Form/Input",
  component: Input,
  tags: ["autodocs"],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};

export const Disabled: Story = {
  args: {
    value: "Input",
    disabled: true,
  },
};

export const ReadOnly: Story = {
  args: {
    value: "Input",
    readOnly: true,
  },
};

export const Placeholder: Story = {
  args: {
    placeholder: "Input",
  },
};

export const UsingWithButton = {
  render: () => (
    <Stack direction="horizontal">
      <Input placeholder="Enter keyword..." />
      <Button type="submit">Search</Button>
    </Stack>
  ),
};
