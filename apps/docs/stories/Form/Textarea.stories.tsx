import type { Meta, StoryObj } from "@storybook/react";
import { Button, Stack, Textarea } from "@themeless-ui/react";

const meta = {
  title: "Form/Textarea",
  component: Textarea,
  tags: ["autodocs"],
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};

export const Disabled: Story = {
  args: {
    value: "Textarea",
    disabled: true,
  },
};

export const ReadOnly: Story = {
  args: {
    value: "Textarea",
    readOnly: true,
  },
};

export const Placeholder: Story = {
  args: {
    placeholder: "Textarea",
  },
};

export const UsingWithButton = {
  render: () => (
    <Stack direction="vertical">
      <Textarea placeholder="Write your comment here..." />
      <Button type="submit">Send</Button>
    </Stack>
  ),
};
