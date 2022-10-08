import { lstat } from "fs";
import { useState, useEffect } from "react";

export function useScroll() {
  const [scrollY, setScrollY] = useState<number>(0);

  const listener = () => {
    setScrollY(window.pageYOffset);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      window.addEventListener("scroll", listener);
    }, 1000);

    return () => {
      clearInterval(timer);
      window.removeEventListener("scroll", listener);
    };
  });

  return {
    scrollY,
  };
}
