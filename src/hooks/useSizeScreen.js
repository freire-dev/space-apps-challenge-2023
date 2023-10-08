import { useState, useEffect } from "react";

export const useSizeScreen = () => {
    
  const initialState = {
    width: 0,
    height: 0,
  };

  const [size, setSize] = useState(initialState);

  const changeSize = () => {
    const width =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;

    const height =
      window.innerHeight ||
      document.documentElement.clientHeight ||
      document.body.clientHeight;

    setSize({ width, height });
  };

  useEffect(() => {
    changeSize();
    window.addEventListener("resize", changeSize);

    return () => {
      window.removeEventListener("resize", changeSize);
    };
  }, []);

  return size;
};