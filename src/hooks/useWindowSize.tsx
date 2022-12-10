import React from "react";

type TSize={
  width?: number;
  height?: number;
};

const useWindowSize = () => {
  const [windowSize, setWindowSize] = React.useState<TSize>({
    width: undefined,
    height: undefined
  });

  React.useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
};

export default useWindowSize;
