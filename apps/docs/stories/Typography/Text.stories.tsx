import type { Meta, StoryObj } from "@storybook/react";
import { Text } from "@themeless-ui/react";
import { ReactNode } from "react";

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

const Description = ({ children }: { children: ReactNode }) => (
  <Text type="code">
    <Text type="var">{children}</Text>:{" "}
  </Text>
);

export const TextTypes = {
  render: () => (
    <ul>
      <li>
        <Description>abbr</Description>
        <Text type="abbr">Abbreviation</Text>
      </li>
      <li>
        <Description>abbr with title</Description>
        <Text type="abbr" title="Abbreviation extension">
          Abbreviation
        </Text>
      </li>
      <li>
        <Description>b</Description>
        <Text type="b">Bring Attention To</Text>
      </li>
      <li>
        <Description>cite</Description>
        <Text type="cite">Citation</Text>
      </li>
      <li>
        <Description>code</Description>
        <Text type="code">Inline Code</Text>
      </li>
      <li>
        <Description>del</Description>
        <Text type="del">Deleted Text</Text>
      </li>
      <li>
        <Description>del with cite</Description>
        <Text
          type="del"
          cite="https://change-explanation.example.com"
          dateTime="2000-01-01H00:00:00"
        >
          Deleted Text
        </Text>
      </li>
      <li>
        <Description>em</Description>
        <Text type="em">Emphasis</Text>
      </li>
      <li>
        <Description>i</Description>
        <Text type="i">Idiomatic Text</Text>
      </li>
      <li>
        <Description>ins</Description>
        <Text type="ins">Inserted Text</Text>
      </li>
      <li>
        <Description>ins with cite</Description>
        <Text
          type="ins"
          cite="https://change-explanation.example.com"
          dateTime="2000-01-01H00:00:00"
        >
          Inserted Text
        </Text>
      </li>
      <li>
        <Description>kbd</Description>
        <Text type="kbd">Keyboard Input </Text>
      </li>
      <li>
        <Description>mark</Description>
        <Text type="mark">Mark Text</Text>
      </li>
      <li>
        <Description>q</Description>
        <Text type="q">Inline Quotation</Text>
      </li>
      <li>
        <Description>q with cite</Description>
        <Text type="q" cite="https://source-of-the-quote.example.com">
          Inline Quotation
        </Text>
      </li>
      <li>
        <Description>s</Description>
        <Text type="s">Strikethroug</Text>
      </li>
      <li>
        <Description>samp</Description>
        <Text type="samp">Sample Output</Text>
      </li>
      <li>
        <Description>small</Description>
        <Text type="small">Side Comment</Text>
      </li>
      <li>
        <Description>span</Description>
        <Text type="span">Content Span</Text>
      </li>
      <li>
        <Description>strong</Description>
        <Text type="strong">Strong Importance</Text>
      </li>
      <li>
        <Description>sub</Description>
        <Text type="sub">Subscript</Text>
      </li>
      <li>
        <Description>sup</Description>
        <Text type="sup">Superscript</Text>
      </li>
      <li>
        <Description>u</Description>
        <Text type="u">Unarticulated Annotation</Text>
      </li>
      <li>
        <Description>var</Description>
        <Text type="var">Variable</Text>
      </li>
    </ul>
  ),
};

export const CombiningTextTypes = {
  render: () => (
    <ul>
      <li>
        <Description>strong in mark</Description>
        <Text type="mark">
          Lorem ipsum dolor <Text type="strong">sit amet</Text>, consectetur
          adipiscing elit.
        </Text>
      </li>
      <li>
        <Description>del and ins in cite</Description>
        <Text>
          First verse of{" "}
          <Text type="cite">
            <Text type="del">Think</Text>
            <Text type="ins">Respect</Text>
          </Text>
          , by Aretha Franklin.
        </Text>
      </li>
      <li>
        <Description>var in code</Description>
        <Text type="code">
          let <Text type="var">foo</Text> = &quot;bar&quot;;
        </Text>
      </li>
      <li>
        <Description>samp in kbd</Description>
        <Text type="kbd">
          <Text type="kbd">
            <Text type="samp">File</Text>
          </Text>
          ⇒
          <Text type="kbd">
            <Text type="samp">New Document</Text>
          </Text>
        </Text>
      </li>
    </ul>
  ),
};
