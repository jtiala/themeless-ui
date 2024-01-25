import { ReactNode } from "react";
import { SizeElement } from "./SizeElement";

export function ExampleStack({
  gap = 32,
  children,
}: {
  gap?: number;
  children?: ReactNode;
}) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: `${gap}px`,
      }}
    >
      {children}
    </div>
  );
}

function getDefaultElement(elementNumber: number = 0) {
  return <SizeElement key={elementNumber} />;
}

export function getStackedElements(
  numberOfElements: number,
  getElement: (elementNumber: number) => JSX.Element = getDefaultElement,
) {
  return (
    <ExampleStack>
      {[...Array(numberOfElements).keys()].map((n) => getElement(n))}
    </ExampleStack>
  );
}
