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
import { Link } from "react-router-dom";

const AddRoutine = () => {
  const weekDays = [
    { day: "Sunday" },
    { day: "Monday" },
    { day: "Tuesday" },
    { day: "Wednesday" },
    { day: "Thursday" },
    { day: "Friday" },
    { day: "Saturday" },
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
        <Link className="flex-initial">
          <FiArrowLeft
            className="text-3xl"
            style={{
              border: "1px solid gray",
              borderRadius: "100%",
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
      <div className="">Clock</div>
      <div className="">
        <h2 className="uppercase font-bold md:text-2xl">Repeat</h2>
        {weekDays.map((item, i) => (
          <button
            key={i}
            className={`me-1 px-2 py-1 rounded-lg hover:bg-gradient-to-r from-gradient-1 to-gradient-2 hover:text-white text-sm ${
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
      <div className="flex flex-col gap-4 mt-5">
        <div className="">
          <h1>Medicine</h1>
          <Input
            type="text"
            placeholder="Hydriline"
            className="border md:w-[380px] "
          />
        </div>
        <div className="">
          <h1>Dose</h1>
          <Select>
            <SelectTrigger className="md:w-[380px] w-full border text-left rounded-md p-2 text-gray-500">
              <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button className="uppercase bg-custom-blue md:w-[360px]">
          Set reminder
        </Button>
      </div>
    </div>
  );
};

export default AddRoutine;
