import { ReactNode } from "react";

export function ExampleTitle({ children }: { children: ReactNode }) {
  return (
    <span
      style={{
        maxWidth: "20ch",
      }}
    >
      <code>{children}</code>
    </span>
  );
}
