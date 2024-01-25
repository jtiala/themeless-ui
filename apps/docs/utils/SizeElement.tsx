import { CSSProperties, useEffect, useRef, useState } from "react";

export function SizeElement({ styles }: { styles?: CSSProperties }) {
  const ref = useRef(null);

  const [size, setSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const handleResize = () => {
      if (ref && "current" in ref && ref.current) {
        const { clientWidth: width, clientHeight: height } = ref.current;
        setSize({ width, height });
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [ref]);

  return (
    <div
      ref={ref}
      style={{
        backgroundColor: "black",
        color: "white",
        padding: "8px",
        ...styles,
      }}
    >
      <code>
        {size.width}x{size.height}
      </code>
    </div>
  );
}
