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

const Report = () => {
  const cardData = [
    {
      icon: "svgs/medicine.svg",
      text: "Medicines",
    },
    {
      icon: "svgs/dumbill.svg",
      text: "Exercise",
      to: "/my-exercise",
    },
  ];

  const navigate = useNavigate();
  return (
    <div className="m-5">
      <div className="flex justify-between items-center ">
        <Link className=" flex-initial" onClick={() => navigate(-1)}>
          <FiArrowLeft
            className="text-3xl bg-gray-200 p-1 rounded-md"
            style={{}}
          />
        </Link>
        <h1 className="md:text-3xl font-bold flex-auto flex justify-center ">
          Report
        </h1>
      </div>
      <p className="mt-8 ms-5">Select Report:</p>

      <div className=" flex  gap-4 mt-7">
        {cardData.map((item, i) => (
          <Card icon={item.icon} text={item.text} to={item.to} key={i} />
        ))}
      </div>
      <div className="my-5 flex md:w-[360px]  shadow-lg justify-between px-7 py-5">
        <div className="flex flex-col">
          <h3 className="text-xl">Medicines</h3>
          <p className="text-2xl">59%</p>
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
    </div>
  );
};

export default Report;