import React, { useState } from "react";
// import shacdn from "shacdn";

const DigitalClock = () => {
  const [hours, setHours] = useState("12");
  const [minutes, setMinutes] = useState("00");
  const [period, setPeriod] = useState("AM");

  const handleScroll = (direction, type) => {
    if (type === "hours") {
      const newHours = shacdn.scroll(hours, direction, {
        min: 1,
        max: 12,
        length: 2,
      });
      setHours(newHours);
    } else if (type === "minutes") {
      const newMinutes = shacdn.scroll(minutes, direction, {
        min: 0,
        max: 59,
        length: 2,
      });
      setMinutes(newMinutes);
    } else if (type === "period") {
      const newPeriod = period === "AM" ? "PM" : "AM";
      setPeriod(newPeriod);
    }
  };

  return (
    <div className="flex justify-center ">
      <div className="flex flex-col items-center">
        <div className="flex">
          <div className="text-6xl font-bold text-black">{hours}</div>
        </div>
        <div className="flex">
          <div className="text-6xl font-bold text-black">{minutes}</div>
        </div>
        <div className="flex">
          <div className="text-lg font-bold text-black">{period}</div>
        </div>
      </div>
    </div>
  );
};

export default DigitalClock;
