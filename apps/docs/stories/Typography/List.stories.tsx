import type { Meta, StoryObj } from "@storybook/react";
import { List } from "@themeless-ui/react";

const meta = {
  title: "Typography/List",
  component: List,
  tags: ["autodocs"],
} satisfies Meta<typeof List>;

export default meta;
type Story = StoryObj<typeof meta>;

const children = [
  <List.Item key="1">Lorem ipsum</List.Item>,
  <List.Item key="2">Dolor sit amet</List.Item>,
  <List.Item key="3">Consectetur adipiscing elit</List.Item>,
];

export const UnorderedList: Story = {
  args: {
    type: "unordered",
    children,
  },
};

export const OrderedList: Story = {
  args: {
    type: "ordered",
    children,
  },
};
