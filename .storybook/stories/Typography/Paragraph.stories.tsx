import type { Meta, StoryObj } from "@storybook/react";
import { Paragraph, Text } from "../../../src";

const meta = {
  title: "Typography/Paragraph",
  component: Paragraph,
  tags: ["autodocs"],
} satisfies Meta<typeof Paragraph>;

export default meta;
type Story = StoryObj<typeof meta>;

const lipsum =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec accumsan ex vel lacinia volutpat. Ut ultricies, mauris et varius finibus, nulla ante efficitur libero, eget convallis odio ex ut neque. Praesent quis odio ac felis pretium pharetra sit amet quis neque. Nam nec libero purus. Maecenas sagittis lobortis lacinia. Aliquam non vehicula metus. Vivamus fringilla ante eget leo pretium cursus. Morbi venenatis diam metus, ut faucibus dolor mollis a. Nulla nec ex sapien. Curabitur a tempor est. Mauris faucibus congue mi, sit amet pulvinar justo porttitor nec. Nunc et eros a est fermentum lacinia id at nisi.";

export const Default: Story = {
  args: {
    children: lipsum,
  },
};

export const UsingWithText = {
  render: () => (
    <>
      <Paragraph>{lipsum}</Paragraph>
      <Paragraph>
        <Text type="del">Lorem ipsum dolor sit amet</Text>
        <Text type="ins">Donec accumsan ex vellacinia volutpat.</Text> Ut
        tricies, <Text type="mark">mauris</Text> et{" "}
        <Text type="small">varius</Text> finibus,{" "}
        <Text type="strong">nulla ante</Text> efficitur libero, eget convallis{" "}
        <Text type="code">odio ex ut</Text> neque.
      </Paragraph>
      <Paragraph>{lipsum}</Paragraph>
    </>
  ),
};
