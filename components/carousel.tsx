import { useState } from "react";

export default function useCarousel(length: number) {
  const [index, setIndex] = useState(0);

  // Swipe/drag start positions
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchStartY, setTouchStartY] = useState(0);
  const [mouseStartX, setMouseStartX] = useState<number | null>(null);

  // Navigation
  const handleNext = () => {
    setIndex((prev) => (prev + 1) % length);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + length) % length);
  };

  // Touch X
  const handleTouchStartX = (e: React.TouchEvent) => {
    if (e.targetTouches.length > 0) {
      setTouchStartX(e.targetTouches[0].clientX);
    }
  };

  const handleTouchEndX = (e: React.TouchEvent) => {
    if (e.changedTouches.length === 0) return;
    const touchEnd = e.changedTouches[0].clientX;
    const delta = touchStartX - touchEnd;

    if (delta > 50) handleNext();
    else if (delta < -50) handlePrev();
  };

  // Touch Y
  const handleTouchStartY = (e: React.TouchEvent) => {
    if (e.targetTouches.length > 0) {
      setTouchStartY(e.targetTouches[0].clientY);
    }
  };

  const handleTouchEndY = (e: React.TouchEvent) => {
    if (e.changedTouches.length === 0) return;
    const touchEnd = e.changedTouches[0].clientY;
    const delta = touchStartY - touchEnd;

    if (delta > 50) handleNext();
    else if (delta < -50) handlePrev();
  };

  // Mouse drag
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
