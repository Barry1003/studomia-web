import { useState } from "react";

export default function useCarousel(length: number) {
  const [index, setIndex] = useState(0);

  const [touchStartX, setTouchStartX] = useState(0);
  const [touchStartY, setTouchStartY] = useState(0);
  const [mouseStartX, setMouseStartX] = useState<number | null>(null);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % length);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + length) % length);
  };

  const handleTouchStartX = (e: React.TouchEvent) => {
    const touch = e.targetTouches[0];
    if (touch) {
      setTouchStartX(touch.clientX);
    }
  };

  const handleTouchEndX = (e: React.TouchEvent) => {
    const touch = e.changedTouches[0];
    if (!touch) return;

    const delta = touchStartX - touch.clientX;

    if (delta > 50) handleNext();
    else if (delta < -50) handlePrev();
  };

  const handleTouchStartY = (e: React.TouchEvent) => {
    const touch = e.targetTouches[0];
    if (touch) {
      setTouchStartY(touch.clientY);
    }
  };

  const handleTouchEndY = (e: React.TouchEvent) => {
    const touch = e.changedTouches[0];
    if (!touch) return;

    const delta = touchStartY - touch.clientY;

    if (delta > 50) handleNext();
    else if (delta < -50) handlePrev();
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setMouseStartX(e.clientX);
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    if (mouseStartX === null) return;

    const delta = mouseStartX - e.clientX;
    if (delta > 50) handleNext();
    else if (delta < -50) handlePrev();

    setMouseStartX(null);
  };

  return {
    index,
    setIndex,
    handleNext,
    handlePrev,
    onSwipeX: {
      onTouchStart: handleTouchStartX,
      onTouchEnd: handleTouchEndX,
      onMouseDown: handleMouseDown,
      onMouseUp: handleMouseUp,
    },
    onSwipeY: {
      onTouchStart: handleTouchStartY,
      onTouchEnd: handleTouchEndY,
    },
  };
}
