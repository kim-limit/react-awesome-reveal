import { useEffect } from "react";
import { Fade, Zoom } from "react-awesome-reveal";
import { useNavigate } from "react-router-dom";
import { useScroll } from "./useScroll";

export const Slide2 = () => {
  const navigate = useNavigate();
  const { scrollDir, isFirst } = useScroll();

  // useEffect(() => {
  //   if (isFirst) {
  //     if (scrollDir === "up") {
  //       navigate("/");
  //     } else {
  //       navigate("/3");
  //     }
  //     console.log(scrollDir);
  //   }
  // }, [scrollDir]);
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // });
  return (
    // <div
    //   style={{
    //     height: "100vh",
    //     // padding: "1px",
    //     // width: "100%",
    //   }}
    //   onWheel={() => {
    //     console.log("s");
    //   }}
    // >
    //   <h1>
    //     <Zoom>SLide2</Zoom>
    //   </h1>
    // </div>
    <div
      style={{
        height: "90vh",
      }}
      onWheel={() => {
        // navigate("/3");
        console.log("1");
      }}
    >
      slide2
    </div>
  );
};
