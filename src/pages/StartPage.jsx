import { Link } from "react-router-dom";

const StartPage = () => {
  return (
    <>
      <div className="flex flex-col items-center  gap-16 justify-between h-[100vh] w-full ">
        <div className=" mt-[20vh] ">
          <img src="images/logo.png" alt="" width="90" height="90" />
        </div>
        <div className="flex flex-col  gap-5 flex-end h-[50%] mt-[20vh] ">
          <p className="mx-6 text-center">
            Let's get started on your journey to a healthier you.
          </p>
          <Link
            to={"/sign-up-start"}
            className=" bg-slate-700 text-center mx-4 text-white uppercase py-3 rounded-lg "
          >
            Get Started
          </Link>
          <Link
            to={"/sign-in"}
            className=" uppercase text-center py-3 border-2 border-black rounded-lg mx-4"
          >
            Already have an account
          </Link>
        </div>
      </div>
    </>
  );
};

export default StartPage;
