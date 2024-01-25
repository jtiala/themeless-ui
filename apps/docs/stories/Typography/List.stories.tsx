import type { Meta, StoryObj } from "@storybook/react";
import { Heading, List, Paragraph, Prose } from "@themeless-ui/react";
import { ExampleGrid, ExampleItem } from "../../utils";

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

const lipsum =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec accumsan ex vel lacinia volutpat. Ut ultricies, mauris et varius finibus, nulla ante efficitur libero, eget convallis odio ex ut neque. Praesent quis odio ac felis pretium pharetra sit amet quis neque. Nam nec libero purus. Maecenas sagittis lobortis lacinia. Aliquam non vehicula metus. Vivamus fringilla ante eget leo pretium cursus. Morbi venenatis diam metus, ut faucibus dolor mollis a. Nulla nec ex sapien. Curabitur a tempor est. Mauris faucibus congue mi, sit amet pulvinar justo porttitor nec. Nunc et eros a est fermentum lacinia id at nisi.";

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

export const NestedLists: Story = {
  render: () => {
    const unordered = (
      <List>
        <List.Item>
          First level
          <List>
            <List.Item>
              Second level
              <List>
                <List.Item>
                  Third level
                  <List>
                    <List.Item>Fourth level</List.Item>
                    <List.Item>Fourth level</List.Item>
                  </List>
                </List.Item>
              </List>
            </List.Item>
          </List>
        </List.Item>
        <List.Item>
          First level
          <List>
            <List.Item>
              Second level
              <List>
                <List.Item>
                  Third level
                  <List>
                    <List.Item>Fourth level</List.Item>
                  </List>
                </List.Item>
              </List>
            </List.Item>
            <List.Item>Second level</List.Item>
          </List>
        </List.Item>
      </List>
    );

    const ordered = (
      <List type="ordered">
        <List.Item>
          First level
          <List type="ordered">
            <List.Item>
              Second level
              <List type="ordered">
                <List.Item>
                  Third level
                  <List type="ordered">
                    <List.Item>Fourth level</List.Item>
                    <List.Item>Fourth level</List.Item>
                  </List>
                </List.Item>
              </List>
            </List.Item>
          </List>
        </List.Item>
        <List.Item>
          First level
          <List type="ordered">
            <List.Item>
              Second level
              <List type="ordered">
                <List.Item>
                  Third level
                  <List type="ordered">
                    <List.Item>Fourth level</List.Item>
                  </List>
                </List.Item>
              </List>
            </List.Item>
            <List.Item>Second level</List.Item>
          </List>
        </List.Item>
      </List>
    );

    const mixed = (
      <List type="ordered">
        <List.Item>
          First level
          <List>
            <List.Item>
              Second level
              <List type="ordered">
                <List.Item>
                  Third level
                  <List>
                    <List.Item>Fourth level</List.Item>
                    <List.Item>Fourth level</List.Item>
                  </List>
                </List.Item>
              </List>
            </List.Item>
          </List>
        </List.Item>
        <List.Item>
          First level
          <List type="ordered">
            <List.Item>
              Second level
              <List>
                <List.Item>
                  Third level
                  <List type="ordered">
                    <List.Item>Fourth level</List.Item>
                  </List>
                </List.Item>
              </List>
            </List.Item>
            <List.Item>Second level</List.Item>
          </List>
        </List.Item>
      </List>
    );

    return (
      <ExampleGrid columns={6}>
        <ExampleItem title="Unordered">{unordered}</ExampleItem>
        <ExampleItem title="Ordered">{ordered}</ExampleItem>
        <ExampleItem title="Mixed">{mixed}</ExampleItem>
        <ExampleItem title="Unordered with Prose">
          <Prose>{unordered}</Prose>
        </ExampleItem>
        <ExampleItem title="Ordered with Prose">
          <Prose>{ordered}</Prose>
        </ExampleItem>
        <ExampleItem title="Mixed with Prose">
          <Prose>{mixed}</Prose>
        </ExampleItem>
      </ExampleGrid>
    );
  },
};

export const UsingWithProse = {
  render: () => (
    <Prose>
      <Heading level={1}>Heading 1</Heading>
      <Paragraph>{lipsum}</Paragraph>
      <List>{children}</List>
      <Paragraph>{lipsum}</Paragraph>
      <Heading level={2}>Heading 2</Heading>
      <List type="ordered">{children}</List>
      <Heading level={3}>Heading 3</Heading>
      <List>{children}</List>
      <Paragraph>{lipsum}</Paragraph>
      <List>{children}</List>
    </Prose>
  ),
};
