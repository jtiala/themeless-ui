import type { Meta, StoryObj } from "@storybook/react";
import { Heading, Paragraph } from "@themeless-ui/react";

const meta = {
  title: "Typography/Heading",
  component: Heading,
  tags: ["autodocs"],
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

const lipsum =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec accumsan ex vel lacinia volutpat. Ut ultricies, mauris et varius finibus, nulla ante efficitur libero, eget convallis odio ex ut neque. Praesent quis odio ac felis pretium pharetra sit amet quis neque. Nam nec libero purus. Maecenas sagittis lobortis lacinia. Aliquam non vehicula metus. Vivamus fringilla ante eget leo pretium cursus. Morbi venenatis diam metus, ut faucibus dolor mollis a. Nulla nec ex sapien. Curabitur a tempor est. Mauris faucibus congue mi, sit amet pulvinar justo porttitor nec. Nunc et eros a est fermentum lacinia id at nisi.";

const lipsumParagraph = <Paragraph>{lipsum}</Paragraph>;

export const Default: Story = {
  args: {
    level: 1,
    children: "Heading",
  },
};

export const Levels = {
  render: () => (
    <div>
      <div>
        <Heading level={1}>Heading 1</Heading>
        <Heading level={2}>Heading 2</Heading>
        <Heading level={3}>Heading 3</Heading>
        <Heading level={4}>Heading 4</Heading>
        <Heading level={5}>Heading 5</Heading>
        <Heading level={6}>Heading 6</Heading>
      </div>
    </div>
  ),
};

export const LongContent = {
  render: () => (
    <div>
      <div>
        <Heading level={1}>Heading 1 &mdash; {lipsum}</Heading>
        <Heading level={2}>Heading 2 &mdash; {lipsum}</Heading>
        <Heading level={3}>Heading 3 &mdash; {lipsum}</Heading>
        <Heading level={4}>Heading 4 &mdash; {lipsum}</Heading>
        <Heading level={5}>Heading 5 &mdash; {lipsum}</Heading>
        <Heading level={6}>Heading 6 &mdash; {lipsum}</Heading>
      </div>
    </div>
  ),
};

export const UsingWithParagraphs = {
  render: () => (
    <div>
      <div>
        <Heading level={1}>Heading 1</Heading>
        {lipsumParagraph}
        {lipsumParagraph}
        <Heading level={2}>Heading 2</Heading>
        {lipsumParagraph}
        {lipsumParagraph}
        <Heading level={3}>Heading 3</Heading>
        {lipsumParagraph}
        {lipsumParagraph}
        <Heading level={4}>Heading 4</Heading>
        {lipsumParagraph}
        {lipsumParagraph}
        <Heading level={5}>Heading 5</Heading>
        {lipsumParagraph}
        {lipsumParagraph}
        <Heading level={6}>Heading 6</Heading>
        {lipsumParagraph}
        {lipsumParagraph}
      </div>
    </div>
  ),
};
