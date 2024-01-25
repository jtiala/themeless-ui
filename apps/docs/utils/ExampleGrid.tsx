import { ReactNode } from "react";

export function ExampleGrid({
  columns,
  gap = 32,
  centered,
  children,
}: {
  columns: number;
  gap?: number;
  centered?: boolean;
  children: ReactNode;
}) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${columns}, max-content)`,
        alignItems: "start",
        justifyItems: centered ? "center" : "start",
        gap: `${gap}px`,
      }}
    >
      {children}
    </div>
  );
}
