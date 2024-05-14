import { Switch } from "@/components/ui/switch";
import { BsGearFill } from "react-icons/bs";
import { FaPlus } from "react-icons/fa";
import { FiArrowLeft } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";

const Notification = () => {
  const cardData = [
    {
      title: "Morning Walk",
      time: "5:30",
      days: "Mon, Tue, Thur, Fri",
      remainingTime: "",
    },
    {
      title: "Medicines",
      time: "8:30",
      days: "Mon, Tue, Thur, Fri",
      remainingTime: "12h 28m",
    },
    {
      title: "Morning Walk",
      time: "5:30",
      days: "Mon, Tue, Thur, Fri",
      remainingTime: "12h 28m",
    },
  ];
  const navigate = useNavigate();
  return (
    <div className="m-5">
      <div className="flex justify-between items-center ">
        <Link className="flex-initial" to={"/dashboard"}>
          <FiArrowLeft
            className="p-1"
            style={{
              border: "1px solid gray",
              borderRadius: "100%",
              fontSize: " 32px",
            }}
          />
        </Link>
        <h1 className="md:text-3xl text-xl font-bold flex-auto flex justify-center">
          Reminder
        </h1>
        <div className="">
          <Link to={"/settings"}>
            <BsGearFill
              className=" text-3xl bg-gray-100 rounded p-1"
              style={{ color: "#6C93FC" }}
            />
          </Link>
        </div>
      </div>

      <div className="flex gap-3 my-5">
        <img src="svgs/calendar.svg" alt="" />
        <p className="font-medium text-black">Today</p>
      </div>
      <div className="md:flex gap-3 justify-center flex-wrap">
        {cardData.map((item, i) => (
          <div
            className="md:w-[350px] bg-gradient-to-r from-gradient-1 to-gradient-2 rounded-xl p-4 text-white mb-5"
            key={i}
          >
            <div className="flex justify-between">
              <p>{item.title}</p>
              {/* <Switch className="bg-gradient-to-r from-gradient-1 to-gradient-1" /> */}
              <Switch />
            </div>
            <h1 className="font-bold text-3xl my-5">{item.time}</h1>
            <div className="flex justify-between">
              <p>{item.days}</p>
              <p>{item.remainingTime}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-20">
        <Link to={"/add-daily-routine"}>
          <FaPlus className="text-5xl font-bold rounded-full text-white bg-custom-blue p-2 text-center ms-[50%] transform -translate-x-1/2" />
        </Link>
      </div>
    </div>
  );
};

export default Notification;
