import { Input } from "@/components/ui/input";
import { FaMicrophone, FaSearch } from "react-icons/fa";
import { FiArrowLeft } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";

const SelectLanguage = () => {
  const languages = [
    "English (Australia)",
    "English (Canada)",
    "English (India)",
    "English (Ireland)",
    "English (New Zealand)",
    "English (Singapore)",
    "English (South Africa)",
    "English (US)",
  ];

  const navigate = useNavigate();
  return (
    <>
      <div className="m-5">
        <div className="flex justify-between items-center ">
          <Link className=" flex-initial" onClick={() => navigate(-1)}>
            <FiArrowLeft
             className="p-1"
             style={{
               border: "1px solid gray",
               borderRadius: "100%",
               fontSize:" 32px"
             }}
            />
          </Link>
          <h1 className="md:text-2xl  flex-auto flex justify-center ">
            Select Language
          </h1>
        </div>
        <div className="flex items-center gap-2 my-6 w-full ">
          <div className="flex items-center bg-gray-200 px-2 rounded-lg">
            <FaSearch className="text-gray-400 " />
            <Input
              type="text"
              placeholder="Search"
              className="w-full md:w-[360px] rounded-lg text-lg bg-gray-200 border-none "
            />
            <FaMicrophone className="text-gray-400" />
          </div>
          <Link className="text-blue-700">Cancel</Link>
        </div>
      </div>
      <div className=" bg-gray-200 p-7">
        <p>Select Language</p>
      </div>
    </>
  );
};

export default SelectLanguage;
