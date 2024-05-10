import { Progress } from "@/components/ui/progress";

import { FiArrowLeft } from "react-icons/fi";
import { TbClockHour3 } from "react-icons/tb";
import { Link, useNavigate } from "react-router-dom";

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
  return (
    <div className="mt-5 mx-5">
      <div className="flex justify-between items-center ">
        <Link className=" flex-initial" onClick={() => navigate(-1)}>
          <FiArrowLeft className="p-1"
            style={{
              border: "1px solid gray",
              borderRadius: "100%",
              fontSize:" 32px"
            }} />
        </Link>
        <h1 className="md:text-3xl text-xl font-bold flex-auto flex justify-center ">
          Exercises
        </h1>
      </div>

      <p className="my-3">There are 4 Exercises for Back itch</p>
      <div className="flex gap-6 flex-wrap mx-1">
        {cardData.map((item, i) => (
          <Link
            to={"/tutorial"}
            className="flex px-3 py-2 gap-16 shadow-lg rounded-lg bg-blue-200"
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
      <p className="mt-5 ms-5">Have you take your exercise today?</p>
    </div>
  );
};

export default Exercise;
