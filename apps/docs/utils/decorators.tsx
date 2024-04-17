import { Decorator } from "@storybook/react";
import { useEffect, useState } from "react";

export const hiddenLabelDecorator: (htmlFor: string) => Decorator = (
  htmlFor,
) => {
  const decorator: Decorator = (Story) => (
    <>
      <label
        htmlFor={htmlFor}
        style={{
          position: "absolute",
          overflow: "hidden",
          width: "1px",
          height: "1px",
          padding: 0,
          borderWidth: 0,
          margin: "-1px",
          clip: "rect(0, 0, 0, 0)",
          whiteSpace: "nowrap",
        }}
      >
        {htmlFor}
      </label>
      <Story />
    </>
  );

  return decorator;
};

export const marginDecorator: (
  margin:
    | {
        top?: string;
        left?: string;
        bottom?: string;
        right?: string;
      }
    | string,
) => Decorator = (margin) => {
  const decorator: Decorator = (Story) => (
    <div
      style={
        typeof margin === "object"
          ? {
              marginTop: margin.top,
              marginLeft: margin.left,
              marginBottom: margin.bottom,
              marginRight: margin.right,
            }
          : { margin }
      }
    >
      <Story />
    </div>
  );

  return decorator;
};

export const viewportSizeDecorator: () => Decorator = () => {
  const Decorator: Decorator = (Story) => {
    const [size, setSize] = useState({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    useEffect(() => {
      const handleResize = () => {
        setSize({ width: window.innerWidth, height: window.innerHeight });
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);

    // These values should match the ones in `breakpoints.css`
    const viewport =
      size.width < 640
        ? "xs"
        : size.width < 768
          ? "sm"
          : size.width < 1024
            ? "md"
            : size.width < 1280
              ? "lg"
              : size.width < 1536
                ? "xl"
                : "xxl";

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}
      >
        <code>
          viewport: {viewport} ({size.width}x{size.height})
        </code>
        <Story />
      </div>
    );
  };

  return Decorator;
};
