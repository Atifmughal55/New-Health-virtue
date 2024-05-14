import { Progress } from "@/components/ui/progress";
import { GrStatusGood } from "react-icons/gr";
import { FaRegCircleXmark } from "react-icons/fa6";
import { FiArrowLeft } from "react-icons/fi";
import { TbClockHour3 } from "react-icons/tb";
import { Link, useNavigate } from "react-router-dom";

import { useState } from "react";

const Exercise = () => {
  const cardData = [
    {
      title: "Planks",
      totalExercises: 20,
      totalTime: 12,
      image: "images/plank.png",
    },
    {
      title: "Squats",
      totalExercises: 20,
      totalTime: 12,
      image: "images/squat.png",
    },
    {
      title: "Lunges",
      totalExercises: 20,
      totalTime: 12,
      image: "images/lunges.png",
    },
  ];

  const navigate = useNavigate();
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (buttonId) => {
    setSelectedButton(buttonId);
  };
  return (
    <div className="mt-5 mx-5">
      <div className="flex justify-between items-center ">
        <Link className=" flex-initial" onClick={() => navigate(-1)}>
          <FiArrowLeft
            className="p-1"
            style={{
              border: "1px solid gray",
              borderRadius: "100%",
              fontSize: " 32px",
            }}
          />
        </Link>
        <h1 className="md:text-3xl text-xl font-bold flex-auto flex justify-center ">
          Exercises
        </h1>
      </div>

      <p className="my-3 mb-10">There are 4 Exercises for Back itch</p>
      <div className="flex gap-6 flex-wrap mx-1">
        {cardData.map((item, i) => (
          <Link
            to={"/tutorial"}
            className="flex px-3 justify-between py-2 gap-16 md:w-[340px] w-full shadow-lg rounded-lg bg-blue-200"
            key={i}
          >
            <div className="">
              <h3 className="font-bold mb-3 ms-4 text-xl">{item.title}</h3>
              <p className="text-sm ms-7">{item.totalExercises} Exercise</p>
              <div className="flex gap-1.5 items-center mb-2">
                <i>
                  <TbClockHour3 className="h-5 w-5" />
                </i>
                <p className="text-sm">{item.totalTime} Minutes</p>
              </div>
              <Progress value={63} className="text-blue-800" />
            </div>
            <div className="">
              <img src={item.image} width="97" height="97" alt="" />
            </div>
          </Link>
        ))}
      </div>
      <p className="mt-5 font-semibold">Have you take your exercise today?</p>
      <div className="flex justify-end gap-3">
        <button
          id="cancelButton"
          className={`text-3xl rounded-full focus:outline-none font-bold ${
            selectedButton === "cancelButton"
              ? "text-white bg-black"
              : "text-black bg-white"
          }`}
          onClick={() => handleButtonClick("cancelButton")}
        >
          <FaRegCircleXmark />
        </button>
        <button
          id="confirmButton"
          className={`text-3xl rounded-full border-none flex items-center justify-center focus:outline-none font-bold ${
            selectedButton === "confirmButton"
              ? "text-white bg-blue-500"
              : "text-blue-500 bg-white"
          }`}
          onClick={() => handleButtonClick("confirmButton")}
        >
          <GrStatusGood />
        </button>
      </div>
    </div>
  );
};

export default Exercise;
