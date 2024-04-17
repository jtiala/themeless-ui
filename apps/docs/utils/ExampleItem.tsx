import { ReactNode } from "react";
import { ExampleTitle } from "./ExampleTitle";

export function ExampleItem({
  title,
  direction = "vertical",
  centered,
  children,
}: {
  title?: string;
  direction?: "vertical" | "horizontal" | "vertical-reverse";
  centered?: boolean;
  children: ReactNode;
}) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection:
          direction === "vertical"
            ? "column"
            : direction === "vertical-reverse"
              ? "column-reverse"
              : "row",
        alignItems: centered ? "center" : "normal",
        gap: "8px",
      }}
    >
      {title && (
        <ExampleTitle>{`${title}${direction === "horizontal" ? ":" : ""}`}</ExampleTitle>
      )}
      {children}
    </div>
  );
}
