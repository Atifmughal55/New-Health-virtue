import React, { useRef, useState, useEffect } from "react";

const DigitalClock = () => {
  const [selectedFirstLine, setSelectedFirstLine] = useState(3);
  const [selectedSecondLine, setSelectedSecondLine] = useState(3);
  const [selectedThirdLine, setSelectedThirdLine] = useState("AM");
  const firstLineRef = useRef(null);
  const secondLineRef = useRef(null);
  const thirdLineRef = useRef(null);

  const handleSelectFirstLine = (num) => {
    const container = firstLineRef.current;
    if (!container) return;

    const visibleNumbers = Math.floor(container.clientHeight / 60);
    const centerIdx = Math.floor(visibleNumbers / 2);

    setSelectedFirstLine(num);
    container.scrollTop = (num - centerIdx - 1) * 60;
  };

  const handleSelectSecondLine = (num) => {
    const container = secondLineRef.current;
    if (!container) return;

    const visibleNumbers = Math.floor(container.clientHeight / 60);
    const centerIdx = Math.floor(visibleNumbers / 2);

    setSelectedSecondLine(num);
    container.scrollTop = (num - centerIdx - 1) * 60;
  };

  const handleSelectThirdLine = (value) => {
    setSelectedThirdLine(value);
  };

  const handleScroll = (ref) => {
    const container = ref.current;
    if (!container) return;

    const scrollAmount = container.scrollTop;
    const snapHeight = container.clientHeight / 5;
    const snapIndex = Math.round(scrollAmount / snapHeight);

    container.scrollTop = snapIndex * snapHeight;
  };

  const handleKeyDown = (event, ref) => {
    const container = ref.current;
    if (!container) return;

    if (event.key === "ArrowUp") {
      container.scrollTop -= 60; // Adjust as needed
    } else if (event.key === "ArrowDown") {
      container.scrollTop += 60; // Adjust as needed
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", (event) =>
      handleKeyDown(event, firstLineRef)
    );
    window.addEventListener("keydown", (event) =>
      handleKeyDown(event, secondLineRef)
    );

    return () => {
      window.removeEventListener("keydown", (event) =>
        handleKeyDown(event, firstLineRef)
      );
      window.removeEventListener("keydown", (event) =>
        handleKeyDown(event, secondLineRef)
      );
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="flex justify-evenly">
      <style>
        {`
          .no-scrollbar {
            scrollbar-width: none; /* Firefox */
            -ms-overflow-style: none; /* IE and Edge */
          }

          .no-scrollbar::-webkit-scrollbar {
            display: none; /* Chrome, Safari, Opera */
          }
        `}
      </style>
      <div
        className="h-60 overflow-y-scroll no-scrollbar"
        ref={firstLineRef}
        onScroll={() => handleScroll(firstLineRef)}
        // style={{ scrollSnapType: "y mandatory" }}
      >
        {[...Array(12).keys()].map((num) => (
          <div
            key={num}
            className={`number h-12 flex items-center justify-center ${
              selectedFirstLine === num + 1
                ? "text-blue-600 text-3xl font-bold"
                : "text-sm"
            }`}
            onClick={() => handleSelectFirstLine(num + 1)}
          >
            {(num + 1).toString().padStart(2, "0")}
          </div>
        ))}
      </div>
      <div
        className="h-60 overflow-y-scroll no-scrollbar"
        ref={secondLineRef}
        onScroll={() => handleScroll(secondLineRef)}
      >
        {[...Array(60).keys()].map((num) => (
          <div
            key={num + 1}
            className={`number h-12 flex items-center justify-center ${
              selectedSecondLine === num + 1
                ? "text-blue-600 text-3xl font-bold"
                : "text-sm"
            }`}
            onClick={() => handleSelectSecondLine(num + 1)}
          >
            {(num + 1).toString().padStart(2, "0")}
          </div>
        ))}
      </div>
      <div className="h-60 flex flex-col items-center justify-center">
        <div
          className={`number ${
            selectedThirdLine === "AM"
              ? "text-blue-600 text-3xl font-bold"
              : "text-sm"
          }`}
          onClick={() => handleSelectThirdLine("AM")}
        >
          AM
        </div>
        <div
          className={`number ${
            selectedThirdLine === "PM"
              ? "text-blue-600 text-3xl font-bold"
              : "text-sm"
          }`}
          onClick={() => handleSelectThirdLine("PM")}
        >
          PM
        </div>
      </div>
    </div>
  );
};

export default DigitalClock;
