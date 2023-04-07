import type { Meta, StoryObj } from "@storybook/react";
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

export const TextTypes = {
  render: () => (
    <ul>
      <li>
        <Text type="var">abbr:</Text>{" "}
        <Text type="abbr" title="Abbreviation extension">
          Abbreviation
        </Text>
      </li>
      <li>
        <Text type="var">b:</Text> <Text type="b">Bring Attention To</Text>
      </li>
      <li>
        <Text type="var">cite:</Text> <Text type="cite">Citation</Text>
      </li>
      <li>
        <Text type="var">code:</Text> <Text type="code">Inline Code</Text>
      </li>
      <li>
        <Text type="var">del:</Text>{" "}
        <Text
          type="del"
          cite="https://change-explanation.example.com"
          datetime="2000-01-01H00:00:00"
        >
          Deleted Text
        </Text>
      </li>
      <li>
        <Text type="var">em:</Text> <Text type="em">Emphasis</Text>
      </li>
      <li>
        <Text type="var">i:</Text> <Text type="i">Idiomatic Text</Text>
      </li>
      <li>
        <Text type="var">ins:</Text>{" "}
        <Text
          type="ins"
          cite="https://change-explanation.example.com"
          datetime="2000-01-01H00:00:00"
        >
          Inserted Text
        </Text>
      </li>
      <li>
        <Text type="var">kbd:</Text> <Text type="kbd">Keyboard Input </Text>
      </li>
      <li>
        <Text type="var">mark:</Text> <Text type="mark">Mark Text</Text>
      </li>
      <li>
        <Text type="var">q:</Text>{" "}
        <Text type="q" cite="https://source-of-the-quote.example.com">
          Inline Quotation
        </Text>
      </li>
      <li>
        <Text type="var">s:</Text> <Text type="s">Strikethroug</Text>
      </li>
      <li>
        <Text type="var">samp:</Text> <Text type="samp">Sample Output</Text>
      </li>
      <li>
        <Text type="var">small:</Text> <Text type="small">Side Comment</Text>
      </li>
      <li>
        <Text type="var">span:</Text> <Text type="span">Content Span</Text>
      </li>
      <li>
        <Text type="var">strong:</Text>{" "}
        <Text type="strong">Strong Importance</Text>
      </li>
      <li>
        <Text type="var">sub:</Text> <Text type="sub">Subscript</Text>
      </li>
      <li>
        <Text type="var">sup:</Text> <Text type="sup">Superscript</Text>
      </li>
      <li>
        <Text type="var">u:</Text>{" "}
        <Text type="u">Unarticulated Annotation</Text>
      </li>
      <li>
        <Text type="var">var:</Text> <Text type="var">Variable</Text>
      </li>
    </ul>
  ),
};
