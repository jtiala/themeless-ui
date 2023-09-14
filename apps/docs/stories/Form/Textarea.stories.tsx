import type { Decorator, Meta, StoryObj } from "@storybook/react";
import { Button, Stack, Textarea } from "@themeless-ui/react";

const meta = {
  title: "Form/Textarea",
  component: Textarea,
  tags: ["autodocs"],
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

const labelDecorator: Decorator = (Story) => (
  <Stack>
    <label htmlFor="textarea">Label</label>
    <Story />
  </Stack>
);

export const Primary: Story = {
  args: {
    id: "textarea",
  },
  decorators: [labelDecorator],
};

export const Disabled: Story = {
  args: {
    id: "textarea",
    value: "Textarea",
    disabled: true,
  },
  decorators: [labelDecorator],
};

export const ReadOnly: Story = {
  args: {
    id: "textarea",
    value: "Textarea",
    readOnly: true,
  },
  decorators: [labelDecorator],
};

export const Placeholder: Story = {
  args: {
    id: "textarea",
    placeholder: "Textarea",
  },
  decorators: [labelDecorator],
};

export const UsingWithButton = {
  render: () => (
    <Stack>
      <Stack>
        <label htmlFor="textarea">Label</label>
        <Textarea id="textarea" placeholder="Write your comment here..." />
      </Stack>
      <Button type="submit">Send</Button>
    </Stack>
  ),
};
