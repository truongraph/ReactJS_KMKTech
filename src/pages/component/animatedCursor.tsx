import { useCallback, useEffect, useRef, useState } from "react";

const DotCursor = () => {
  const [dotPosition, setDotPosition] = useState({ x: 0, y: 0 });
  const [borderPosition, setBorderPosition] = useState({ x: 0, y: 0 });
  const [scale, setScale] = useState({ x: 1, y: 1 });
  const [angle, setAngle] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const animationRef = useRef<number | null>(null);

  const handleMouseMove = (e: MouseEvent) => {
    setDotPosition({ x: e.pageX, y: e.pageY });
  };

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);

  const smoothMoveBorder = useCallback(() => {
    setBorderPosition((prev) => {
      const diffX = dotPosition.x - prev.x;
      const diffY = dotPosition.y - prev.y;

      const speed = 0.1;
      const newX = prev.x + diffX * speed;
      const newY = prev.y + diffY * speed;
      const angle = Math.atan2(diffY, diffX) * (180 / Math.PI);
      setAngle(angle);

      const velocity = Math.sqrt(diffX ** 2 + diffY ** 2);
      const maxScale = 1.5;
      const minScale = 0.8;
      const scaleX = Math.min(maxScale, Math.max(minScale, 1 + velocity * 0.005));
      const scaleY = Math.min(maxScale, Math.max(minScale, 1 - velocity * 0.005));

      setScale({ x: scaleX, y: scaleY });

      return { x: newX, y: newY };
    });

    animationRef.current = requestAnimationFrame(smoothMoveBorder);
  }, [dotPosition]);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    animationRef.current = requestAnimationFrame(smoothMoveBorder);

    const hoverElements = document.querySelectorAll("a, button, img, p, span");
    hoverElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);

      hoverElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, [smoothMoveBorder]);

  return (
    <>
      <div
        className="dot-cursor"
        style={{
          left: `${dotPosition.x}px`,
          top: `${dotPosition.y}px`,
          transform: isHovering
            ? "translate(-50%, -50%) scale(4)"
            : "translate(-50%, -50%) scale(1)",
          backgroundColor: isHovering ? "rgba(8, 89, 216,0.30)" : "rgb(8, 89, 216)", // Mờ khi hover
        }}
      ></div>
      <div
        className="border-cursor"
        style={{
          left: `${borderPosition.x}px`,
          top: `${borderPosition.y}px`,
          transform: `translate(-50%, -50%) rotate(${angle}deg) scale(${scale.x}, ${scale.y})`,
          display: isHovering ? "none" : "block",
        }}
      ></div>
    </>
  );
};

export default DotCursor;
