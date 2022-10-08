import { useEffect, useRef } from "react";
import { Fade, Zoom } from "react-awesome-reveal";
import { useNavigate } from "react-router-dom";
import { useScroll } from "./useScroll";

export const Slide1 = () => {
  const navigate = useNavigate();
  const { scrollY } = useScroll();

  useEffect(() => {
    console.log(scrollY);
    // if (scrollY > 0) {
    //   navigate("/2");
    // }
  }, [scrollY]);

  return (
    <div
      style={{
        height: "100vh",
        padding: "0.5px",
        // width: "100%",
        backgroundColor: "green",
      }}
    >
      <Fade>
        <div
          style={{ width: "100px", height: "100px", backgroundColor: "blue" }}
        ></div>
      </Fade>
      <Zoom>줌</Zoom>
    </div>
  );
};
