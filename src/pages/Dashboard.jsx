import { BsGearFill } from "react-icons/bs";
import { CgSearch } from "react-icons/cg";
import { Button } from "@/components/ui/button";
import { TbClockHour3 } from "react-icons/tb";
import { PiArrowFatRight } from "react-icons/pi";
import Card from "./Card";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";

const cardData = [
  {
    icon: "svgs/profile.svg",
    text: "Profile",
    to: "/user-profile",
  },
  {
    icon: "svgs/dumbill.svg",
    text: "Exercise",
    to: "/my-exercise",
  },
  {
    icon: "svgs/reminder.svg",
    text: "Reminder",
    to: "/notifications",
  },
  {
    icon: "svgs/report.svg",
    text: "Report",
    to: "/my-report",
  },
  {
    icon: "svgs/blueGuardian.svg",
    text: "Guardian",
    to: "/guardian",
  },
  {
    icon: "svgs/gear.svg",
    text: "Settings",
    to: "/settings",
  },
];
const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="m-5 flex flex-col gap-4">
        <div className="flex justify-between items-center ">
          <div className="flex items-center gap-3">
            <img src="images/user.png" height="50" width="50" alt="" />
            <div className="">
              <h3>Welcome Back</h3>
              <h3 className="font-bold text-blue-700">Mr Ahmad</h3>
            </div>
          </div>
          <div className=" flex gap-2">
            <Link to={"/settings"}>
              <BsGearFill
                className=" text-3xl bg-gray-100 rounded p-1"
                style={{ color: "#6C93FC" }}
              />
            </Link>
            <div className="bg-gray-100 p-1 rounded-md">
              <svg
                // onClick={() => navigate("/notifications")}
                width="18"
                height="20"
                viewBox="0 0 15 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.5 0C11.6422 0 15 3.36957 15 7.52617V15H0V7.52617C0 3.36957 3.35787 0 7.5 0ZM5.41667 15.8333H9.58333C9.58333 16.9839 8.65058 17.9167 7.5 17.9167C6.34942 17.9167 5.41667 16.9839 5.41667 15.8333Z"
                  fill="#6C93FC"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="relative ">
          <input
            type="text"
            placeholder="Search here"
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-3xl w-full md:w-[340px] focus:outline-none focus:ring focus:border-blue-300"
          />

          <svg
            width="31"
            height="32"
            className="h-6 w-6 absolute left-2 top-1/2 transform -translate-y-1/2 "
            viewBox="0 0 31 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              width="30.5714"
              height="31.7143"
              rx="15.2857"
              fill="#6C93FC"
            />
            <path
              d="M20.9548 19.7594L24.5747 23.3793L23.3794 24.5746L19.7595 20.9547C18.4579 21.9961 16.8072 22.619 15.0119 22.619C10.8128 22.619 7.40479 19.211 7.40479 15.0119C7.40479 10.8127 10.8128 7.40474 15.0119 7.40474C19.2111 7.40474 22.6191 10.8127 22.6191 15.0119C22.6191 16.8072 21.9961 18.4578 20.9548 19.7594ZM19.259 19.1322C20.2925 18.0671 20.9286 16.6141 20.9286 15.0119C20.9286 11.7429 18.2809 9.09521 15.0119 9.09521C11.743 9.09521 9.09526 11.7429 9.09526 15.0119C9.09526 18.2808 11.743 20.9285 15.0119 20.9285C16.6142 20.9285 18.0671 20.2925 19.1323 19.2589L19.259 19.1322Z"
              fill="white"
            />
          </svg>
        </div>

        {/* <Input
          className="flex justify-start gap-3 md:w-[250px] bg-transparent rounded-3xl text-gray-600"
          style={{ border: "2px solid lightgray" }}
        >
          <i className="bg-blue-400 text-white p-1 rounded-full">
            <CgSearch />
          </i>
          Search Here
        </Input> */}
        <p className="font-bold">Upcomming</p>
        <Link to={"/my-exercise"}>
        
        <div className="flex md:w-[460px] py-5 px-2 justify-between gap-4 items-center rounded-lg bg-blue-400 text-white  shadow-lg">
          <div className="flex flex-col items-center">
            <TbClockHour3 />
            <p>8:00pm</p>
          </div>
          <div className="">
            <h3 className="font-bold">Take Medicines</h3>
            <p>
              Paracetamol + panadol Plus with Vitamin B12 Tablets and record
              blood pressure
            </p>
          </div>
          <PiArrowFatRight className="text-8xl pt-[70px]" />
        </div>
        </Link>

        <div className=" flex flex-wrap gap-6 justify-center text-blue-700">
          {cardData.map((item, i) => (
            <Card icon={item.icon} text={item.text} to={item.to} key={i} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
