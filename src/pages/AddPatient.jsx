import { Button } from "@/components/ui/button";
import { BsGearFill } from "react-icons/bs";
import { CgSearch } from "react-icons/cg";
import { FaPlusCircle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
const AddPatient = () => {
  const navigation = useNavigate();
  const patientData = [
    {
      image: "/images/user2.png",
      name: "Wasim Akhtar",
      disease: "Dangue",
      relation: "Uncle",
      date: "29-06-2022",
    },
    {
      image: "/images/user3.png",
      name: "Marie Marie",
      disease: "flu",
      relation: "Aunty",
      date: "29-06-2022",
    },
    {
      image: "/images/user4.png",
      name: "Shoaib Akhtar",
      disease: "Malaria",
      relation: "Cousin",
      date: "29-06-2022",
    },
  ];
  return (
    <div className="h-[100vh] ">
      <div className="bg-gradient-to-r from-gradient-1 to-gradient-2 p-5 rounded-b-3xl">
      <Link className="flex-initial" onClick={() => navigation(-1)}>
          <FiArrowLeft
            className="p-1 mb-3"
            style={{
              border: "1px solid gray",
              borderRadius: "100%",
              fontSize: " 32px",
            }}
          />
        </Link>
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
            className="bg-transparent text-white placeholder-white "
          />
        </Button>
      </div>
      <div className="mt-5">
        {patientData.map((patient, i) => (
          <div
            className="flex w-full md:w-[400px] justify-between 
         border-b border-black ps-5 pe-3 py-2 "
            key={i}
          >
            <div className="flex items-start gap-1 ">
              <img
                src={patient.image}
                width={40}
                height={40}
                className="inline rounded-full"
                alt=""
              />
              <div className="">
                <h2 className="font-semibold text-lg text-custom-blue">{patient.name}</h2>
                <p className="text-base text-custom-blue ">{patient.disease}</p>
              </div>
            </div>
            <div className="flex flex-col items-start">
              <p className="text-base font-semibold">{patient.relation}</p>
              <p className="text-base">{patient.date}</p>
              <Button
                className="rounded-3xl  px-7 my-1 bg-custom-blue"
                style={{ fontSize: "12px" }}
              >
                Add
              </Button>
            </div>
          </div>
        ))}
      </div>

      <FaPlusCircle className="text-6xl  text-custom-blue md:ms-20 mx-auto md:mt-7 mt-20" />
    </div>
  );
};

export default AddPatient;
