import { FaRegEnvelope } from "react-icons/fa";
import { FiArrowLeft } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";

const EmailNoti = () => {
  const navigate = useNavigate();
  return (
    <div className="m-5 flex flex-col justify-between h-[85vh]">
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
      </div>
      {/* ------------------------------------ */}
      <div className=" flex flex-col items-center gap-16 justify-around">
        <div className=" bg-blue-200 p-4 md:p-8 rounded-full ">
          <FaRegEnvelope className="text-6xl md:text-9xl text-blue-400" />
        </div>
        <div className="flex flex-col items-center md:w-full text-center w-[250px] ">
          <p className="font-bold">Check Your Inbox to Verify your email.</p>
          <p>
            We have sent a message to email@email.com with a link to active your
            account
          </p>
        </div>
      </div>
      {/* ------------------------------------------- */}
      <div className="md:mt-10 flex  gap-3 justify-center">
        <Link
          to={"/open-mail"}
          className="uppercase border border-blue-600 py-4 px-5  rounded-md  "
        >
          Resend Email
        </Link>
        <Link
          to="mailto:www.gmail.com"
          className="uppercase py-4 px-5 bg-custom-blue rounded-md text-white"
        >
          Open Email
        </Link>
      </div>
    </div>
  );
};

export default EmailNoti;
