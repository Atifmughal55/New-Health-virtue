import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

const ForgetPass = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/open-mail");
  };
  return (
    <>
      <div className="m-5 flex flex-col items-center gap-20">
        <div className="flex justify-between items-center  w-full">
        <Link className="flex-initial" onClick={() => navigate(-1)}>
          <FiArrowLeft
            className="p-1"
            style={{
              border: "1px solid gray",
              borderRadius: "100%",
              fontSize:" 32px"
            }}
          />
        </Link>
        <h1 className="md:text-3xl text-xl font-bold flex-auto flex justify-center ">
        Forget Password
        </h1>
      </div>
        <div className="flex flex-col sm:items-center  ">
          <p className="text-center">
            Pleae Enter Your Email To Recieve Verification Code
          </p>
          <form onSubmit={handleSubmit} className="mt-5">
            <div className="sm:w-[360px]">
              <div className="mb-5">
              <Label>Email</Label>
              </div>
              <Input type="email" placeholder="email@email.com" required />
            </div>

            <Button
              className="mt-10 sm:w-[360px] uppercase hover:opacity-95"
              style={{ backgroundColor: "#1D5F8B" }}
            >
              Send
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ForgetPass;
