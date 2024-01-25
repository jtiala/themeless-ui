import {
  componentToJson,
  describe,
  expect,
  it,
  render,
  renderer,
  screen,
} from "../../../test";
import { Heading } from "../Heading";
import { Paragraph } from "../Paragraph";
import { Text } from "../Text";
import { Prose } from "./Prose";

const lipsum =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec accumsan ex vel lacinia volutpat. Ut ultricies, mauris et varius finibus, nulla ante efficitur libero, eget convallis odio ex ut neque. Praesent quis odio ac felis pretium pharetra sit amet quis neque. Nam nec libero purus. Maecenas sagittis lobortis lacinia. Aliquam non vehicula metus. Vivamus fringilla ante eget leo pretium cursus. Morbi venenatis diam metus, ut faucibus dolor mollis a. Nulla nec ex sapien. Curabitur a tempor est. Mauris faucibus congue mi, sit amet pulvinar justo porttitor nec. Nunc et eros a est fermentum lacinia id at nisi.";

const defaultProse = (
  <Prose testId="prose">
    <Heading level={1}>Heading</Heading>
    <Paragraph>{lipsum}</Paragraph>
    <Text>Text</Text>
  </Prose>
);

describe("Prose", async () => {
  it("should render the prose", () => {
    expect(componentToJson(renderer.create(defaultProse))).toMatchSnapshot();

    render(defaultProse);

    const prose = screen.getByTestId("prose");

    expect(prose).toBeInTheDocument();
  });
});
