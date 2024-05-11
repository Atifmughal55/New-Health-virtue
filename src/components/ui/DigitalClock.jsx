import React, { useState } from "react";

const DigitalClock = () => {
  const [hours, setHours] = useState(1);
  const [minutes, setMinutes] = useState(0);
  const [period, setPeriod] = useState("AM");

  const handleScroll = (e, type) => {
    e.preventDefault();
    const delta = e.deltaY > 0 ? 1 : -1;

    if (type === "hours") {
      const newHours = (hours + delta + 12) % 12 || 12;
      setHours(newHours);
    } else if (type === "minutes") {
      const newMinutes = (minutes + delta + 60) % 60;
      setMinutes(newMinutes);
    } else if (type === "period") {
      setPeriod(period === "AM" ? "PM" : "AM");
    }
  };

  const renderNumbers = (type, start, end) => {
    const numbers = [];
    for (let i = start; i <= end; i++) {
      numbers.push(
        <div
          key={i}
          className={`text-center ${
            i === start || i === end ? "text-sm" : "text-lg"
          } ${
            (type === "hours" && i === hours) ||
            (type === "minutes" && i === minutes) ||
            (type === "period" && (i === "AM" || i === "PM"))
              ? "text-blue-500 font-bold"
              : "text-gray-700"
          }`}
        >
          {i}
        </div>
      );
    }
    return numbers;
  };

  return (
    <div className="flex justify-center items-center space-x-4 p-4">
      <div
        className="flex flex-col h-40 overflow-hidden relative"
        onWheel={(e) => handleScroll(e, "hours")}
      >
        {renderNumbers("hours", 1, 12)}
      </div>
      <div
        className="flex flex-col h-40 overflow-hidden relative"
        onWheel={(e) => handleScroll(e, "minutes")}
      >
        {renderNumbers("minutes", 0, 59)}
      </div>
      <div
        className="flex flex-col h-40 overflow-hidden relative"
        onWheel={(e) => handleScroll(e, "period")}
      >
        {renderNumbers("period", "AM", "PM")}
      </div>
    </div>
  );
};

export default DigitalClock;
