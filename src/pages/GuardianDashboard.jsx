import { BsGearFill } from "react-icons/bs";
import { CgSearch } from "react-icons/cg";
import { Button } from "@/components/ui/button";
import { TbClockHour3 } from "react-icons/tb";
import { BiRightArrowAlt } from "react-icons/bi";
import Card from "./Card";
import { Link } from "react-router-dom";

const cardData = [
  {
    icon: "svgs/profile.svg",
    text: "Profile",
    to: "/user-profile",
  },
  {
    icon: "svgs/addPatient.svg",
    text: "Patient List",
    to: "/add-patient",
  },
  {
    icon: "svgs/list.svg",
    text: "Reschuedule",
    to: "/add-daily-routine",
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

const GuardianDashboard = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-gradient-1 to-gradient-2 p-5 rounded-b-3xl">
        <div className="flex justify-between items-center  ">
          <div className="flex items-center gap-3">
            <img src="images/user.png" height="50" width="50" alt="" />
            <div className="">
              <h3 className="text-white">Welcome Back</h3>
              <h3 className="font-bold text-white">Mr Ahmad</h3>
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
                className=""
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

        <Button
          className="flex justify-start gap-3 md:w-[250px] w-full bg-transparent rounded-3xl text-gray-600 mt-7"
          style={{ border: "2px solid lightgray" }}
        >
          <i className="bg-blue-400 text-white p-1 rounded-full">
            <CgSearch />
          </i>
          <input
            type="text"
            placeholder="Search Here"
            className="bg-transparent text-white "
          />
        </Button>
      </div>
      <div className=" m-4">
        <p className="mb-2 ms-5 font-bold">Upcomming</p>
        <Link to={'/my-exercise'}>
        <div className="flex md:w-[460px] my-4 py-5 px-2 justify-between gap-4 items-center rounded-lg bg-blue-400 text-white  shadow-lg">
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
          <BiRightArrowAlt className="text-8xl pt-[70px]" />
        </div>
        </Link>

        <div className=" flex flex-wrap gap-6 justify-center">
          {cardData.map((item, i) => (
            <Card
              icon={item.icon}
              color="blue-700"
              text={item.text}
              to={item.to}
              key={i}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default GuardianDashboard;
