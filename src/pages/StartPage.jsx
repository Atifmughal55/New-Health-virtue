import { Link } from "react-router-dom";

const StartPage = () => {
  return (
    <>
      <div className="flex flex-col items-center md:gap-6 gap-18 justify-between h-[100vh] w-full ">
        <div className=" mt-[151px] ">
          <img src="images/2 23.png" height="186" width="227" alt="" />
        </div>
        <div className="flex flex-col  gap-5 flex-end h-[50%] mt-[20vh] ">
          <p className="mx-6 text-center text-base">
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
