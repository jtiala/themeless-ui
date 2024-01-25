import type { Meta, StoryObj } from "@storybook/react";
import {
  Blockquote,
  Heading,
  List,
  Paragraph,
  Prose,
} from "@themeless-ui/react";

const meta = {
  title: "Typography/Prose",
  component: Prose,
  tags: ["autodocs"],
} satisfies Meta<typeof Prose>;

export default meta;
type Story = StoryObj<typeof meta>;

const lipsum =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec accumsan ex vel lacinia volutpat. Ut ultricies, mauris et varius finibus, nulla ante efficitur libero, eget convallis odio ex ut neque. Praesent quis odio ac felis pretium pharetra sit amet quis neque. Nam nec libero purus. Maecenas sagittis lobortis lacinia. Aliquam non vehicula metus. Vivamus fringilla ante eget leo pretium cursus. Morbi venenatis diam metus, ut faucibus dolor mollis a. Nulla nec ex sapien. Curabitur a tempor est. Mauris faucibus congue mi, sit amet pulvinar justo porttitor nec. Nunc et eros a est fermentum lacinia id at nisi.";
const cite = "https://source-of-the-quote.example.com";
const author = "Samuel L. Ipsum";
const source = "Lorem Ipsum";

export const Default: Story = {
  args: {
    children: [
      <Heading level={1} key={1}>
        Heading 1
      </Heading>,
      <Paragraph key={2}>{lipsum}</Paragraph>,
      <Paragraph key={3}>{lipsum}</Paragraph>,
      <Heading level={2} key={4}>
        Heading 2
      </Heading>,
      <List key={5}>
        <List.Item key="1">Lorem ipsum</List.Item>
        <List.Item key="2">Dolor sit amet</List.Item>
        <List.Item key="3">Consectetur adipiscing elit</List.Item>
      </List>,
      <Paragraph key={6}>{lipsum}</Paragraph>,
      <Heading level={2} key={7}>
        Heading 3
      </Heading>,
      <Paragraph key={8}>{lipsum}</Paragraph>,
      <Blockquote cite={cite} author={author} source={source} key={9}>
        {lipsum}
      </Blockquote>,
      <Paragraph key={10}>{lipsum}</Paragraph>,
    ],
  },
};
