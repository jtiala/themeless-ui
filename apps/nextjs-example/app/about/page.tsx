import { Heading, Paragraph, Prose } from "@themeless-ui/react";

export default async function About() {
  return (
    <article>
      <Prose>
        <Heading level={1}>About</Heading>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pulvinar
          quam ipsum, at placerat quam eleifend in. Nulla gravida eros eu
          vehicula laoreet. Duis vitae consequat ante. Vestibulum quis semper
          neque. Pellentesque et ante ut nisi posuere dictum. Aenean dictum
          ligula id velit cursus, in tincidunt felis faucibus. Class aptent
          taciti sociosqu ad litora torquent per conubia nostra, per inceptos
          himenaeos.
        </Paragraph>
      </Prose>
    </article>
  );
}
