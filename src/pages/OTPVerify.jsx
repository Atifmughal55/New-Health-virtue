import { Button } from "@/components/ui/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { FiArrowLeft } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";

const OTPVerify = () => {
  const navigate = useNavigate();
  return (
    <div className="m-5 flex flex-col items-center gap-20 ">
      <div className="flex justify-between items-center  w-full">
        <Link className="flex-initial" onClick={() => navigate(-2)}>
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
          Verification
        </h1>
      </div>
      <div className="flex flex-col items-center gap-9 w-[250px]">
        <p className="text-center">
          Please Enter 4 Digit Code Sent To email@email.com
        </p>
        <InputOTP maxLength={6}>
          <InputOTPGroup className="gap-3  rounded-none" required>
            <InputOTPSlot
              className="bg-gray-100 border-2 border-b-blue-600"
              index={0}
            />
            <InputOTPSlot
              className="bg-gray-100 border-2 border-b-blue-600"
              index={1}
            />
            <InputOTPSlot
              className="bg-gray-100 border-2 border-b-blue-600"
              index={2}
            />
            <InputOTPSlot
              className="bg-gray-100 border-2 border-b-blue-600"
              index={3}
            />
          </InputOTPGroup>
        </InputOTP>
        <Link className="text-custom-blue text-sm font-bold mt-9">
          Resend Code
        </Link>
      </div>

      <Button
        onClick={() => navigate("/new-password")}
        className="md:w-[230px] w-full uppercase bg-custom-blue"
      >
        Verify
      </Button>
    </div>
  );
};

export default OTPVerify;
