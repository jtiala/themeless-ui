import { Heading, Text } from "@themeless-ui/react";
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
        <Text>
          <a
            href="https://github.com/jtiala/themeless-ui"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          {" | "}
          <a
            href="https://jtiala.github.io/themeless-ui"
            target="_blank"
            rel="noreferrer"
          >
            Storybook
          </a>
        </Text>
      </footer>
    </div>
  );
}
