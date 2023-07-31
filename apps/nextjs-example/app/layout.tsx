import { Anchor, Heading, Text } from "@themeless-ui/react";
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
                <Text>
                  <Link href="/" passHref legacyBehavior>
                    <Anchor>Home</Anchor>
                  </Link>
                  {" | "}
                  <Link href="/about" passHref legacyBehavior>
                    <Anchor>About</Anchor>
                  </Link>
                </Text>
              </nav>
            </header>
            <main>{children}</main>
            <footer>
              <Text type="small">
                <Link
                  href="https://github.com/jtiala/themeless-ui"
                  passHref
                  legacyBehavior
                >
                  <Anchor target="_blank">GitHub</Anchor>
                </Link>
                {" | "}
                <Link
                  href="https://jtiala.github.io/themeless-ui"
                  passHref
                  legacyBehavior
                >
                  <Anchor target="_blank">Storybook</Anchor>
                </Link>
              </Text>
            </footer>
          </div>
        </div>
      </body>
    </html>
  );
}
