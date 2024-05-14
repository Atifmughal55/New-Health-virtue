import { FiArrowLeft } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import Card from "./Card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaInfoCircle } from "react-icons/fa";
import DoughnutChart from "@/components/ui/DoughnutChart";
import BarChart from "@/components/ui/BarChart";
import RadialChart from "@/components/ui/RadialChart";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { useState } from "react";

const Report = () => {
  const navigate = useNavigate();
  const cardData = [
    {
      icon: "svgs/medicine.svg",
      text: "Medicines",
    },
    {
      icon: "svgs/dumbill.svg",
      text: "Exercise",
    },
  ];

  const [activeMed, setActiveMed] = useState(false);
  const [activeExe, setActiveExe] = useState(false);
  const handleClick = (text) => {
    if (text === "Medicines") {
      setActiveMed(!activeMed);
      setActiveExe(false);
    } else if (text === "Exercise") {
      setActiveExe(!activeExe);
      setActiveMed(false);
    }
  };

  return (
    <div className="m-5">
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
        <h1 className="md:text-3xl text-xl font-bold flex-auto flex justify-center">
          Report
        </h1>
      </div>
      <p className="mt-8 ms-5 font-bold text-base">Select Report :</p>

      <div className=" flex  gap-4 mt-7">
        {cardData.map((item, i) => (
          <Card
            icon={item.icon}
            text={item.text}
            onClick={() => handleClick(item.text)}
            key={i}
            activeExe={activeExe}
            activeMed={activeMed}
          />
        ))}
      </div>
      <div className="my-5 flex md:w-[360px]  shadow-lg justify-between px-7 py-5">
        <div className="flex flex-col">
          <h3 className="text-xl font-semibold">{activeMed ? "Medicines" : "Exercise"}</h3>
          <p className="text-2xl font-semibold">59%</p>
          <Select className="bg-transparent">
            <SelectTrigger className="bg-transparent p-0 border-none text-sm">
              <SelectValue placeholder="Last Year" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="male">Last week</SelectItem>
              <SelectItem value="x-gender">2 weeks before</SelectItem>
              <SelectItem value="female">Last Month</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="">
          <FaInfoCircle className="text-gray-400 text-lg" />
        </div>
      </div>
      {(activeMed || activeExe) && (
        <div className="h-[350px] w-[350px]">
          <Swiper spaceBetween={50} slidesPerView={1}>
            <SwiperSlide>
              <DoughnutChart />
            </SwiperSlide>
            <SwiperSlide>
              <BarChart />
            </SwiperSlide>
            <SwiperSlide>
              <RadialChart />
            </SwiperSlide>
          </Swiper>
        </div>
      )}
    </div>
  );
};

export default Report;
