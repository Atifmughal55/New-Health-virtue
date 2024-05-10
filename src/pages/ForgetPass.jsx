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
      <div className="m-5">
        <div className="">
          <Link onClick={() => navigate(-1)}>
            <FiArrowLeft
              className="text-2xl hover:scale-110 transition-all"
              style={{
                border: "1px solid gray",
                borderRadius: "100%",
                marginBottom: "20px",
              }}
            />
          </Link>
          <h2
            className="block text-center font-bold"
            style={{ fontSize: "20px" }}
          >
            Forget Password
          </h2>
        </div>
        <div className="flex flex-col sm:items-center gap-4  mt-5">
          <p className="text-center">
            Pleae Enter Your Email To Recieve Verification Code
          </p>
          <form onSubmit={handleSubmit}>
            <div className="sm:w-[360px]">
              <Label>Email</Label>
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
