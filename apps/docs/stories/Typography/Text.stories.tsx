import type { Meta, StoryObj } from "@storybook/react";
import { Text } from "@themeless-ui/react";
import { ExampleGrid, ExampleTitle } from "../../utils";

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
    <ExampleGrid columns={2}>
      <ExampleTitle>abbr</ExampleTitle>
      <Text type="abbr">Abbreviation</Text>
      <ExampleTitle>abbr with title</ExampleTitle>
      <Text type="abbr" title="Abbreviation extension">
        Abbreviation
      </Text>
      <ExampleTitle>b</ExampleTitle>
      <Text type="b">Bring attention to</Text>
      <ExampleTitle>cite</ExampleTitle>
      <Text type="cite">Citation</Text>
      <ExampleTitle>code</ExampleTitle>
      <Text type="code">Inline code</Text>
      <ExampleTitle>del</ExampleTitle>
      <Text type="del">Deleted text</Text>
      <ExampleTitle>del with cite</ExampleTitle>
      <Text
        type="del"
        cite="https://change-explanation.example.com"
        dateTime="2000-01-01H00:00:00"
      >
        Deleted text
      </Text>
      <ExampleTitle>em</ExampleTitle>
      <Text type="em">Emphasis</Text>
      <ExampleTitle>i</ExampleTitle>
      <Text type="i">Idiomatic text</Text>
      <ExampleTitle>ins</ExampleTitle>
      <Text type="ins">Inserted text</Text>
      <ExampleTitle>ins with cite</ExampleTitle>
      <Text
        type="ins"
        cite="https://change-explanation.example.com"
        dateTime="2000-01-01H00:00:00"
      >
        Inserted text
      </Text>
      <ExampleTitle>kbd</ExampleTitle>
      <Text type="kbd">Keyboard input</Text>
      <ExampleTitle>mark</ExampleTitle>
      <Text type="mark">Mark text</Text>
      <ExampleTitle>q</ExampleTitle>
      <Text type="q">Inline quotation</Text>
      <ExampleTitle>q with cite</ExampleTitle>
      <Text type="q" cite="https://source-of-the-quote.example.com">
        Inline quotation
      </Text>
      <ExampleTitle>s</ExampleTitle>
      <Text type="s">Strikethrough</Text>
      <ExampleTitle>samp</ExampleTitle>
      <Text type="samp">Sample output</Text>
      <ExampleTitle>small</ExampleTitle>
      <Text type="small">Side comment</Text>
      <ExampleTitle>span</ExampleTitle>
      <Text type="span">Content span</Text>
      <ExampleTitle>strong</ExampleTitle>
      <Text type="strong">Strong importance</Text>
      <ExampleTitle>sub</ExampleTitle>
      <Text type="sub">Subscript</Text>
      <ExampleTitle>sup</ExampleTitle>
      <Text type="sup">Superscript</Text>
      <ExampleTitle>u</ExampleTitle>
      <Text type="u">Unarticulated annotation</Text>
      <ExampleTitle>var</ExampleTitle>
      <Text type="var">Variable</Text>
    </ExampleGrid>
  ),
};

export const CombiningTextTypes = {
  render: () => (
    <ExampleGrid columns={2}>
      <ExampleTitle>code in span</ExampleTitle>
      <Text>
        sans-serif <Text type="code">monospace</Text> sans-serif
      </Text>
      <ExampleTitle>strong in mark</ExampleTitle>
      <Text type="mark">
        Lorem ipsum dolor <Text type="strong">sit amet</Text>, consectetur
        adipiscing elit.
      </Text>
      <ExampleTitle>del and ins in cite</ExampleTitle>
      <Text>
        Lorem ipsum{" "}
        <Text type="cite">
          <Text type="del">dolor</Text>
          <Text type="ins">sit amet</Text>
        </Text>
        , consectetur adipiscing elit.
      </Text>
      <ExampleTitle>var in code</ExampleTitle>
      <Text type="code">
        let <Text type="var">foo</Text> = &quot;bar&quot;;
      </Text>
      <ExampleTitle>samp in kbd</ExampleTitle>
      <Text type="kbd">
        <Text type="kbd">
          <Text type="samp">File</Text>
        </Text>
        ⇒
        <Text type="kbd">
          <Text type="samp">New Document</Text>
        </Text>
      </Text>
    </ExampleGrid>
  ),
};
