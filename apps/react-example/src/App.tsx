import { Anchor, Heading, Stack, Text } from "@themeless-ui/react";
import { TypographyExample } from "./examples/Typography/TypographyExample";

export function App() {
  return (
    <div className="app">
      <header>
        <Heading level={1}>ThemelessUI React Examples</Heading>
      </header>
      <main>
        <TypographyExample />
      </main>
      <footer>
        <Stack direction="horizontal">
          <Stack direction="horizontal">
            <Text type="small">
              <Anchor
                href="https://github.com/jtiala/themeless-ui"
                target="_blank"
              >
                GitHub
              </Anchor>
            </Text>
            <Text type="small">&nbsp;|&nbsp;</Text>
            <Text type="small">
              <Anchor
                href="https://jtiala.github.io/themeless-ui"
                target="_blank"
              >
                Storybook
              </Anchor>
            </Text>
          </Stack>
        </Stack>
      </footer>
    </div>
  );
}
