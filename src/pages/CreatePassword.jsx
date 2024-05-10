import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { useState } from "react";
import { RiEyeCloseLine } from "react-icons/ri";

const CreatePassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/sign-in");
  };
  return (
    <div className="m-5">
      <div className="flex justify-between items-center ">
        <Link className="flex-initial" to={"/otp-verify"}>
          <FiArrowLeft
           className="p-1"
           style={{
             border: "1px solid gray",
             borderRadius: "100%",
             fontSize:" 32px"
           }}
          />
        </Link>
        <h1 className="md:text-3xl text-2xl font-bold flex-auto flex justify-center ">
          Create Password
        </h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className=" flex flex-col gap-5 items-center w-full md:w-[360px] mt-20">
          <p className="text-center">
            Your New Password Must Be Different From Previous Password
          </p>

          <div className="w-full">
            <div className="mb-5">
              <Label>Password</Label>
            </div>
            <div className=" flex border items-center justify-around">
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="****************"
                className=" border-none focus:outline-none"
                required
              />
              <i>
                <RiEyeCloseLine
                  className="me-2 text-gray-400"
                  onClick={() => setShowPassword(!showPassword)}
                />
              </i>
            </div>
          </div>
          <div className="w-full">
            <div className="mb-5">
              <Label>Confirm Password</Label>
            </div>
            <div className=" flex border items-center justify-around">
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="****************"
                className=" border-none focus:outline-none"
                required
              />
              <i>
                <RiEyeCloseLine
                  className="me-2 text-gray-400"
                  onClick={() => setShowPassword(!showPassword)}
                />
              </i>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <Button className="w-full bg-custom-blue uppercase">Save</Button>
        </div>
      </form>
    </div>
  );
};

export default CreatePassword;
