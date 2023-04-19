import type { Meta, StoryObj } from "@storybook/react";
import { ReactNode } from "react";
import { Text } from "../../../src";

const meta = {
  title: "Typography/Text",
  component: Text,
  tags: ["autodocs"],
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Text content.",
  },
};

const Type = ({ children }: { children: ReactNode }) => (
  <Text type="code">
    <Text type="var">{children}</Text>
  </Text>
);

export const TextTypes = {
  render: () => (
    <ul>
      <li>
        <Type>abbr:</Type>{" "}
        <Text type="abbr" title="Abbreviation extension">
          Abbreviation
        </Text>
      </li>
      <li>
        <Type>b:</Type> <Text type="b">Bring Attention To</Text>
      </li>
      <li>
        <Type>cite:</Type> <Text type="cite">Citation</Text>
      </li>
      <li>
        <Type>code:</Type> <Text type="code">Inline Code</Text>
      </li>
      <li>
        <Type>del:</Type>{" "}
        <Text
          type="del"
          cite="https://change-explanation.example.com"
          dateTime="2000-01-01H00:00:00"
        >
          Deleted Text
        </Text>
      </li>
      <li>
        <Type>em:</Type> <Text type="em">Emphasis</Text>
      </li>
      <li>
        <Type>i:</Type> <Text type="i">Idiomatic Text</Text>
      </li>
      <li>
        <Type>ins:</Type>{" "}
        <Text
          type="ins"
          cite="https://change-explanation.example.com"
          dateTime="2000-01-01H00:00:00"
        >
          Inserted Text
        </Text>
      </li>
      <li>
        <Type>kbd:</Type> <Text type="kbd">Keyboard Input </Text>
      </li>
      <li>
        <Type>mark:</Type> <Text type="mark">Mark Text</Text>
      </li>
      <li>
        <Type>q:</Type>{" "}
        <Text type="q" cite="https://source-of-the-quote.example.com">
          Inline Quotation
        </Text>
      </li>
      <li>
        <Type>s:</Type> <Text type="s">Strikethroug</Text>
      </li>
      <li>
        <Type>samp:</Type> <Text type="samp">Sample Output</Text>
      </li>
      <li>
        <Type>small:</Type> <Text type="small">Side Comment</Text>
      </li>
      <li>
        <Type>span:</Type> <Text type="span">Content Span</Text>
      </li>
      <li>
        <Type>strong:</Type> <Text type="strong">Strong Importance</Text>
      </li>
      <li>
        <Type>sub:</Type> <Text type="sub">Subscript</Text>
      </li>
      <li>
        <Type>sup:</Type> <Text type="sup">Superscript</Text>
      </li>
      <li>
        <Type>u:</Type> <Text type="u">Unarticulated Annotation</Text>
      </li>
      <li>
        <Type>var:</Type> <Text type="var">Variable</Text>
      </li>
    </ul>
  ),
};
