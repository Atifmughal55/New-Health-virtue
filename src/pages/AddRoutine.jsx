import DigitalClock from "@/components/ui/DigitalClock";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { SelectTrigger } from "@radix-ui/react-select";
import { useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";

const AddRoutine = () => {
  const navigate = useNavigate();
  const weekDays = [
    { day: "Sun" },
    { day: "Mon" },
    { day: "Tue" },
    { day: "Wed" },
    { day: "Thu" },
    { day: "Fri" },
    { day: "Sat" },
  ];
  const [activeIndices, setActiveIndices] = useState([]);

  const handleClick = (index) => {
    if (activeIndices.includes(index)) {
      setActiveIndices(activeIndices.filter((i) => i !== index));
    } else {
      setActiveIndices([...activeIndices, index]);
    }
  };
  return (
    <div className="m-5">
      <div className="flex justify-between items-center ">
        <Link className="flex-initial" onClick={() => navigate(-1)}>
          <FiArrowLeft
            className="p-1"
            style={{
              border: "1px solid gray",
              borderRadius: "100%",
              fontSize: " 32px",
            }}
          />
        </Link>
      </div>
      <div className="flex justify-center">
        <div className="-mt-5 ">
          <img
            src="svgs/bell.svg"
            className="flex justify-center w-15 h-15 flex-auto"
            alt=""
          />
        </div>
      </div>
      <h1 className="font-bold text-3xl text-center mt-4">Add Daily Routine</h1>
      <div className="">
        <DigitalClock />
      </div>
      <div className="">
        <h2 className="uppercase font-bold md:text-2xl">Repeat</h2>
        {weekDays.map((item, i) => (
          <button
            key={i}
            className={`me-1 px-2 ml-1 py-1 rounded-lg hover:bg-gradient-to-r from-gradient-1 to-gradient-2 hover:text-white text-sm ${
              activeIndices.includes(i)
                ? " text-white bg-gradient-to-r from-gradient-1 to-gradient-2"
                : "bg-transparent text-black border"
            }`}
            onClick={() => handleClick(i)}
          >
            {item.day}
          </button>
        ))}
      </div>
      <div className="flex flex-col gap-4 mt-10">
        <div className="">
          <h1 className="font-semibold mb-3 text-black text-sm">Medicine</h1>
          <Input
            type="text"
            placeholder="Hydriline"
            className="border md:w-[380px] "
          />
        </div>
        <div className="">
          <h1 className="font-semibold mb-3 text-black text-sm">Dose</h1>
          <Select>
            <SelectTrigger className="md:w-[380px] w-full border text-left rounded-md p-2 text-gray-500">
              <SelectValue placeholder="Select Dose" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Spoon</SelectItem>
              <SelectItem value="dark">1 pill</SelectItem>
              <SelectItem value="system">1 Cap</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button
          onClick={() => navigate(-1)}
          className="uppercase bg-custom-blue md:w-[360px] py-7 text-lg"
        >
          Set reminder
        </Button>
      </div>
    </div>
  );
};

export default AddRoutine;
