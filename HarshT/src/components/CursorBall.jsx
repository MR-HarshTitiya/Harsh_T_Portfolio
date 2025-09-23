import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function CursorBall() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth follow effect
  const springX = useSpring(x, { stiffness: 200, damping: 20 });
  const springY = useSpring(y, { stiffness: 200, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      x.set(e.clientX - 15); // center ball on cursor
      y.set(e.clientY - 15);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [x, y]);

  return (
    <motion.div
      style={{
        x: springX,
        y: springY,
      }}
      className="w-5 h-5 rounded-full bg-[#2e5bfc] fixed top-5 left-3 z-[9999] pointer-events-none shadow-lg max-sm:hidden md:hidden"
    />
  );
}
