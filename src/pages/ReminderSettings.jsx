import { Slider } from "@/components/ui/slider";
import { FaClock } from "react-icons/fa";
import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";

const ReminderSettings = () => {
  return (
    <div className="m-5">
      <div className="flex justify-between items-center ">
        <Link className=" flex-initial">
          <FiArrowLeft className="p-1"
            style={{
              border: "1px solid gray",
              borderRadius: "100%",
              fontSize:" 32px"
            }} />
        </Link>
        <h1 className="md:text-3xl text-xl font-bold flex-auto flex justify-center">
          Settings
        </h1>
      </div>

      <div className="mt-10 flex flex-col gap-9">
        <h2 className="font-bold">Change Date & Time</h2>
        <div className="">
          <h2 className="font-bold">Silence After</h2>
          <p className="text-sm text-gray-400">Never</p>
        </div>

        <div className="">
          <h2 className="font-bold mb-6">Alarm Volume</h2>
          <div className="flex items-center  gap-2 h-1 md:w-[360px] w-full">
            <FaClock className="text-2xl text-gray-400" />
            <Slider />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReminderSettings;
