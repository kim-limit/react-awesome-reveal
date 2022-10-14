import { useEffect } from "react";
import { Zoom } from "react-awesome-reveal";
import { useNavigate } from "react-router-dom";
import { useScroll } from "./useScroll";

export const Slide3 = () => {
  const navigate = useNavigate();
  const { scrollDir } = useScroll();

  useEffect(() => {
    if (scrollDir === "up") {
      navigate("/2");
    }
    console.log(scrollDir);
  }, [scrollDir]);
  return (
    <div
      style={{
        height: "100vh",
        padding: "1px",
        // width: "100%",
      }}
    >
      <h1>
        <Zoom>Slide3</Zoom>
      </h1>
    </div>
  );
};
