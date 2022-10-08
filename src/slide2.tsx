import { useEffect } from "react";
import { Fade, Zoom } from "react-awesome-reveal";
import { useNavigate } from "react-router-dom";
import { useScroll } from "./useScroll";

export const Slide2 = () => {
  const navigate = useNavigate();
  const { scrollY } = useScroll();

  useEffect(() => {
    // if (scrollY > 0) {
    //   navigate("/3");
    // }
    console.log(scrollY);
  }, [scrollY]);
  return (
    <div
      style={{
        height: "100vh",
        padding: "1px",
        // width: "100%",
      }}
    >
      <h1>
        <Zoom>SLide2</Zoom>
      </h1>
    </div>
  );
};
