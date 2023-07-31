import {
  Blockquote,
  Heading,
  List,
  Paragraph,
  Text,
} from "@themeless-ui/react";
import type { MDXComponents } from "mdx/types";

export const mdxComponents: MDXComponents = {
  p: ({ children }) => <Paragraph>{children}</Paragraph>,
  a: ({ children }) => <Text>{children}</Text>, // TODO: use <Anchor>
  em: ({ children }) => <Text type="em">{children}</Text>,
  strong: ({ children }) => <Text type="strong">{children}</Text>,
  blockquote: ({ children }) => <Blockquote>{children}</Blockquote>,
  h1: ({ children }) => <Heading level={1}>{children}</Heading>,
  h2: ({ children }) => <Heading level={2}>{children}</Heading>,
  h3: ({ children }) => <Heading level={3}>{children}</Heading>,
  h4: ({ children }) => <Heading level={4}>{children}</Heading>,
  h5: ({ children }) => <Heading level={5}>{children}</Heading>,
  h6: ({ children }) => <Heading level={6}>{children}</Heading>,
  ul: ({ children }) => <List type="unordered">{children}</List>,
  ol: ({ children }) => <List type="ordered">{children}</List>,
  li: ({ children }) => <List.Item>{children}</List.Item>,
};
