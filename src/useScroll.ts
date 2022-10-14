import { lstat } from "fs";
import { useState, useEffect } from "react";

export function useScroll() {
  const [scrollDir, setScrollDir] = useState("down");
  const [isFirst, setIsFirst] = useState(false);

  useEffect(() => {
    const threshold = 0;
    let lastScrollY = window.pageYOffset;
    let ticking = false;

    const updateScrollDir = () => {
      const scrollY = window.pageYOffset;

      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false;
        return;
      }
      setScrollDir(scrollY > lastScrollY ? "down" : "up");
      lastScrollY = scrollY > 0 ? scrollY : 0;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir);
        setIsFirst(true);
        ticking = true;
      }
    };

    // window.addEventListener("scroll", onScroll);

    const timer = setInterval(() => {
      window.addEventListener("scroll", onScroll);
    });

    console.log(scrollDir);

    return () => {
      clearInterval(timer);
      window.removeEventListener("scroll", onScroll);
    };
  }, [scrollDir]);

  return { scrollDir, isFirst };
  // const listener = () => {
  //   setScrollY(window.pageYOffset);
  //   console.log(window.pageYOffset);
  //   if (Math.abs(scrollY - lastScrollY) < threshold) {
  //     ticking = false;
  //     return;
  //   }
  //   setScrollDir(scrollY > lastScrollY ? "scrolling down" : "scrolling up");
  //   lastScrollY = scrollY > 0 ? scrollY : 0;
  //   ticking = false;
  // };

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     window.addEventListener("scroll", listener);
  //   }, 1000);

  //   return () => {
  //     clearInterval(timer);
  //     window.removeEventListener("scroll", listener);
  //   };
  // });

  // return {
  //   scrollY,
  // };
}
