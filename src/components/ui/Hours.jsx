import React, { useRef, useState, useEffect } from "react";

const Hours = () => {
  const [selected, setSelected] = useState(3);
  const containerRef = useRef(null);

  const handleSelect = (num) => {
    const container = containerRef.current;
    if (!container) return;

    const visibleNumbers = Math.floor(container.clientHeight / 60);
    const centerIdx = Math.floor(visibleNumbers / 2);

    setSelected(num);
    container.scrollTop = (num - centerIdx - 1) * 60;
  };

  const handleScroll = () => {
    const container = containerRef.current;
    if (!container) return;

    const scrollAmount = container.scrollTop;
    const snapHeight = container.clientHeight / 5;
    const snapIndex = Math.round(scrollAmount / snapHeight);

    container.scrollTop = snapIndex * snapHeight;
  };

  const handleKeyDown = (event) => {
    const container = containerRef.current;
    if (!container) return;

    if (event.key === "ArrowUp") {
      container.scrollTop -= 60; // Adjust as needed
    } else if (event.key === "ArrowDown") {
      container.scrollTop += 60; // Adjust as needed
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <div
        className="h-60 overflow-y-scroll"
        ref={containerRef}
        onScroll={handleScroll}
        style={{ scrollSnapType: "y mandatory" }}
      >
        {[...Array(12).keys()].map((num) => (
          <div
            key={num}
            className={`number h-12 flex items-center justify-center ${
              selected === num + 1
                ? "text-blue-600 text-3xl font-bold"
                : "text-sm"
            }`}
            onClick={() => handleSelect(num + 1)}
          >
            {(num + 1).toString().padStart(2, "0")}
          </div>
        ))}
      </div>
    </>
  );
};

export default Hours;
