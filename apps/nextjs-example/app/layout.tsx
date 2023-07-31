import { Anchor, Heading, Stack, Text } from "@themeless-ui/react";
import type { Metadata } from "next";
import Link from "next/link";
import "./index.css";

export const metadata: Metadata = {
  title: "ThemelessUI Next.js Example App",
  description: "ThemelessUI <3 Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="appContainer">
          <div className="app">
            <header>
              <Heading level={2}>ThemelessUI Next.js Example App</Heading>
              <nav>
                <Stack direction="horizontal">
                  <Text>
                    <Link href="/" passHref legacyBehavior>
                      <Anchor>Home</Anchor>
                    </Link>
                  </Text>
                  <Text>&nbsp;|&nbsp;</Text>
                  <Text>
                    <Link href="/about" passHref legacyBehavior>
                      <Anchor>About</Anchor>
                    </Link>
                  </Text>
                </Stack>
              </nav>
            </header>
            <main>{children}</main>
            <footer>
              <Stack direction="horizontal">
                <Text type="small">
                  <Link
                    href="https://github.com/jtiala/themeless-ui"
                    passHref
                    legacyBehavior
                  >
                    <Anchor target="_blank">GitHub</Anchor>
                  </Link>
                </Text>
                <Text type="small">&nbsp;|&nbsp;</Text>
                <Text type="small">
                  <Link
                    href="https://jtiala.github.io/themeless-ui"
                    passHref
                    legacyBehavior
                  >
                    <Anchor target="_blank">Storybook</Anchor>
                  </Link>
                </Text>
              </Stack>
            </footer>
          </div>
        </div>
      </body>
    </html>
  );
}
