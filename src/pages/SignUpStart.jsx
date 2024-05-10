import { FiArrowLeft } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import Card from "./Card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const SignUpStart = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState();
  return (
    <div className="m-5 flex flex-col justify-between h-[93vh]">
      <div>
        <Link className="" onClick={() => navigate(-1)}>
          <FiArrowLeft
          className="p-1"
          style={{
            border: "1px solid gray",
            borderRadius: "100%",
            fontSize:" 32px"
          }}
          />
        </Link>
        <h1 className="text-center font-bold text-4xl mb-10">Sign Up.</h1>
        <p className="block mb-8">Select User Type:</p>
        <div className="sm:w-full flex lg:justify-start lg:mt-5 justify-center md:flex-wrap gap-5">
          <Card
            icon={"svgs/patient.svg"}
            text={"Patient"}
            active={active}
            onClick={() => setActive(!active)}
          />
          <Card icon={"svgs/guardian.svg"} text={"Guardian"} />
        </div>
      </div>

      <Link to={"/sign-up"}>
        <Button
          className="bg-custom-blue mb-9 md:w-[320px] w-full"
          style={{ fontSize: "18px" }}
        >
          Continue
        </Button>
      </Link>
    </div>
  );
};

export default SignUpStart;
