import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { BsInfoCircle } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { useState } from "react";
import { RiEyeCloseLine } from "react-icons/ri";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const ResetPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigation = useNavigate();
  return (
    <div className="m-5">
      <div className="flex justify-between items-center ">
        <Link className="flex-initial" onClick={() => navigation(-1)}>
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
          Reset Password
        </h1>
      </div>
      <form>
        <div className="flex flex-col gap-5 mt-4 ">
          <div className="w-full md:w-[360px]">
            <div className="mb-3">
              <Label>Old Password</Label>
            </div>
            <div className=" flex border items-center justify-around">
              <Input
                required
                type={showPassword ? "text" : "password"}
                placeholder="****************"
                className=" border-none focus:outline-none"
              />
              <i>
                <RiEyeCloseLine
                  className="me-2 text-gray-400"
                  onClick={() => setShowPassword(!showPassword)}
                />
              </i>
            </div>
          </div>
          <div className="w-full md:w-[360px]">
            <div className="mb-3">
              <Label>New Password</Label>
            </div>
            <div className=" flex border items-center justify-around">
              <Input
                required
                type={showPassword ? "text" : "password"}
                placeholder="****************"
                className=" border-none focus:outline-none"
              />
              <i>
                <RiEyeCloseLine
                  className="me-2 text-gray-400"
                  onClick={() => setShowPassword(!showPassword)}
                />
              </i>
            </div>
          </div>
          <div className="w-full md:w-[360px]">
            <div className="mb-3">
              <Label>Confirm Password</Label>
            </div>
            <div className=" flex border items-center justify-around">
              <Input
                required
                type={showPassword ? "text" : "password"}
                placeholder="****************"
                className=" border-none focus:outline-none"
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
        <div className="flex items-center gap-2 ms-3 mt-1 text-gray-400">
          <BsInfoCircle />
          <p>Password Policy</p>
        </div>
        <p className="text-center text-sm md:w-[300px] text-gray-400 mx-7 mb-2">
          Your password should be 8 and 15 characters with atleast 1 numeric
          digit special character allowed
        </p>
        <AlertDialog>
          <AlertDialogTrigger className="bg-custom-blue w-full uppercase text-white rounded-lg py-4">
            Reset
          </AlertDialogTrigger>
          <AlertDialogContent className="mx-auto p-4 rounded-lg w-11/12 sm:w-3/4 md:w-2/3 lg:w-1/2">
            <AlertDialogHeader>
              <AlertDialogTitle className="flex justify-center">
                <svg
                  width="86"
                  height="85"
                  viewBox="0 0 86 85"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M43 82.625C65.3675 82.625 83.5 64.6604 83.5 42.5C83.5 20.3396 65.3675 2.375 43 2.375C20.6325 2.375 2.5 20.3396 2.5 42.5C2.5 64.6604 20.6325 82.625 43 82.625Z"
                    stroke="#315574"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M17 41.9055L36.5 60.3333L69 29.6204"
                    stroke="#315574"
                    strokeWidth="7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </AlertDialogTitle>
              <AlertDialogDescription className="uppercase text-custom-blue font-bold text-center">
                Your Password has been reset.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogAction className="bg-custom-blue py-6 w-32 mx-auto">
                <Link className="uppercase " to={"/sign-in"}>
                  Sign in
                </Link>
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </form>
    </div>
  );
};

export default ResetPassword;
