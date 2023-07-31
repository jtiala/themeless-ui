import { Heading, Text } from "@themeless-ui/react";
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
                  {/* TODO: use <Anchor> */}
                  <Link href="/">Home</Link>
                  {" | "}
                  <Link href="/about">About</Link>
                </Text>
              </nav>
            </header>
            <main>{children}</main>
            <footer>
              <Text type="small">
                {/* TODO: use <Anchor> */}
                <Link
                  href="https://github.com/jtiala/themeless-ui"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </Link>
                {" | "}
                <Link
                  href="https://jtiala.github.io/themeless-ui"
                  target="_blank"
                  rel="noreferrer"
                >
                  Storybook
                </Link>
              </Text>
            </footer>
          </div>
        </div>
      </body>
    </html>
  );
}
