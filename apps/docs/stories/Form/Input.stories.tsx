import type { Decorator, Meta, StoryObj } from "@storybook/react";
import { Button, Input, Stack } from "@themeless-ui/react";

const meta = {
  title: "Form/Input",
  component: Input,
  tags: ["autodocs"],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

const labelDecorator: Decorator = (Story) => (
  <Stack>
    <label htmlFor="input">Label</label>
    <Story />
  </Stack>
);

export const Primary: Story = {
  args: {
    id: "input",
  },
  decorators: [labelDecorator],
};

export const Disabled: Story = {
  args: {
    id: "input",
    value: "Input",
    disabled: true,
  },
  decorators: [labelDecorator],
};

export const ReadOnly: Story = {
  args: {
    id: "input",
    value: "Input",
    readOnly: true,
  },
  decorators: [labelDecorator],
};

export const Placeholder: Story = {
  args: {
    id: "input",
    placeholder: "Input",
  },
  decorators: [labelDecorator],
};

export const UsingWithButton = {
  render: () => (
    <Stack direction="horizontal">
      <Stack>
        <label htmlFor="input">Label</label>
        <Input id="input" placeholder="Enter keyword..." />
      </Stack>
      <Button type="submit">Search</Button>
    </Stack>
  ),
};
