import { Link, useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { SiFacebook } from "react-icons/si";
import { FcGoogle } from "react-icons/fc";
import { FiArrowLeft } from "react-icons/fi";

const SignIn = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };
  return (
    <>
      <div className="mx-5 mt-8">
        <Link className="" onClick={() => navigate(-1)}>
          <FiArrowLeft
            className="text-2xl"
            style={{
              border: "1px solid gray",
              borderRadius: "100%",
              marginBottom: "20px",
            }}
          />
        </Link>
      </div>
      <div className=" flex flex-col w-full md:w-[360px] px-5">
        <h1 className="text-4xl text-center font-bold my-7">Sign In.</h1>
        <form onSubmit={handleSubmit}>
          <div className="flex md:flex-wrap gap-9 flex-col  md:w-[420px]">
            <div className="flex flex-col gap-3">
              <Label htmlFor="email">Email</Label>
              <Input type="email" placeholder="Contact@gmail.com" required />
            </div>
            <div className="flex flex-col gap-3">
              <Label htmlFor="email">Password</Label>
              <Input type="password" placeholder="****************" required />
              <Link
                to={"/forgot-password"}
                className="text-xs text-right block  text-gray-500 font-bold"
              >
                Forget Password?
              </Link>
            </div>
            <Button type="submit" style={{ backgroundColor: "#1D5F8B" }}>
              Sign In
            </Button>
            <div className="">
              <p
                className="block text-center font-bold mt-4"
                style={{ fontSize: "13px" }}
              >
                Or Sign In With
              </p>
              <hr />
            </div>
            <Button
              onClick={() => navigate("/dashboard")}
              className=" flex gap-4"
              style={{ backgroundColor: "#1877F2" }}
            >
              <SiFacebook />
              Sign In with Facebook
            </Button>
            <Button
              onClick={() => navigate("/dashboard")}
              className=" flex gap-4"
              style={{
                backgroundColor: "transparent",
                color: "black",
                border: "1px solid gray",
              }}
            >
              <FcGoogle />
              Sign In with Google
            </Button>

            <p className="text-center text-sm">
              Don't Have An Account ?
              <Link
                to={"/sign-up-start"}
                className="font-bold"
                style={{ color: "#0056D2" }}
              >
                Sign Up Here
              </Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignIn;
