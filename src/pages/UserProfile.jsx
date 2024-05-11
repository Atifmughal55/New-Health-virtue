import React from "react";
import { FiArrowLeft } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";

const UserProfile = () => {
  const userData = [
    {
      text: "Name",
      value: "Ahmad Ahmad",
    },
    {
      text: "Phone",
      value: "123 456 789 0",
    },
    {
      text: "Email",
      value: "Email.@gmail.com",
    },
    {
      text: "Date of Birth",
      value: "21 April 1971",
    },
    {
      text: "Gender",
      value: "male",
    },
    {
      text: "Disease",
      value: "Dangue",
    },
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
                fontSize: " 32px",
              }}
            />
          </Link>
          <h1 className="md:text-3xl text-xl font-bold flex-auto flex justify-center ">
            My Profile
          </h1>
        </div>
      </div>
      <div className="flex flex-col items-center gap-5 mt-5">
        <img src="images/user.png" alt="" />
        <h1 className="uppercase font-bold md:text-3xl text-2xl">Ahmad</h1>
      </div>

      {userData.map((data, i) => (
        <div className="flex flex-col md:w-[360px] w-full mt-5" key={i}>
          <div className="border-b border-gray-400">
            <div className="ms-8 flex flex-col gap-3 mb-2">
              <h3 className="text-custom-gray font-semibold ">{data.text}</h3>
              <h1 className="text-custom-font">{data.value}</h1>
            </div>
          </div>
        </div>
      ))}

      <div className="text-center text-gray-400 mt-16">
        <h1 className="font-bold">Joined</h1>
        <h2>27 Apr 2024</h2>
      </div>
    </>
  );
};

export default UserProfile;
