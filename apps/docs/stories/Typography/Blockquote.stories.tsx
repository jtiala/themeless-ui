import type { Meta, StoryObj } from "@storybook/react";
import { Blockquote, Paragraph } from "@themeless-ui/react";

const meta = {
  title: "Typography/Blockquote",
  component: Blockquote,
  tags: ["autodocs"],
} satisfies Meta<typeof Blockquote>;

export default meta;
type Story = StoryObj<typeof meta>;

const cite = "https://source-of-the-quote.example.com";
const author = "Samuel L. Ipsum";
const source = "Lorem Ipsum";
const lipsum =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec accumsan ex vel lacinia volutpat. Ut ultricies, mauris et varius finibus, nulla ante efficitur libero, eget convallis odio ex ut neque. Praesent quis odio ac felis pretium pharetra sit amet quis neque. Nam nec libero purus. Maecenas sagittis lobortis lacinia. Aliquam non vehicula metus. Vivamus fringilla ante eget leo pretium cursus. Morbi venenatis diam metus, ut faucibus dolor mollis a. Nulla nec ex sapien. Curabitur a tempor est. Mauris faucibus congue mi, sit amet pulvinar justo porttitor nec. Nunc et eros a est fermentum lacinia id at nisi.";
const children = <Paragraph>{lipsum}</Paragraph>;

export const Default: Story = {
  args: {
    cite,
    author,
    source,
    children,
  },
};

export const WithoutSource: Story = {
  args: {
    cite,
    author,
    children,
  },
};

export const WithoutAuthor: Story = {
  args: {
    cite,
    source,
    children,
  },
};
