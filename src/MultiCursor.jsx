import React, { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import "./MultiCursor.css";

function SingleCursor() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth spring animation
  const springX = useSpring(mouseX, { stiffness: 500, damping: 40 });
  const springY = useSpring(mouseY, { stiffness: 500, damping: 40 });

  useEffect(() => {
    const moveCursor = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="single-cursor"
      style={{
        width: 15,
        height: 15,
        borderRadius: "50%",
        backgroundColor: "red",
        translateX: springX,
        translateY: springY,
      }}
    />
  );
}

export default SingleCursor;