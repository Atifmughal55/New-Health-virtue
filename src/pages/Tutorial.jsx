import { FaFire, FaRegClock } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Tutorial = () => {
  const navigate = useNavigate();
  return (
    <div className="md:w-full md:flex flex-col ">
      <div className="relative w-full">
        <img
          src={"images/tutorial.png"}
          alt=""
          className="w-full md:w-[360px] h-[548px]"
        />
        <div className="absolute top-0 left-0 p-4">
          <Link onClick={() => navigate(-1)}>
            <svg
              width="34"
              height="33"
              viewBox="0 0 34 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.5"
                y="0.5"
                width="32.2308"
                height="31.753"
                rx="15.8765"
                stroke="#AEAEAE"
              />
              <path
                d="M12.1229 15.2996H25.2308V17.4535H12.1229L17.8995 23.23L16.3765 24.753L8 16.3765L16.3765 8L17.8995 9.523L12.1229 15.2996Z"
                fill="black"
              />
            </svg>
          </Link>
        </div>
      </div>

      <div className="flex flex-col items-center w-full md:w-[360px] p-5">
        <div className="flex justify-between w-full ">
          <h1 className="md:text-3xl text-xl font-bold">Squats Tutorial</h1>
          <div className="flex items-center gap-3">
            <FaRegClock className="md:text-xl" />
            <p>12 min</p>
          </div>
        </div>
        <div className="flex md:justify-start justify-between w-full mt-3 mb-1">
          <h2 className="text-base font-semibold">Lower Body Exercise</h2>
          <div className="flex items-center gap-3">
            <FaFire className="text-red-600 md:text-xl" />
            <p>220 kcal</p>
          </div>
        </div>
        <p className="w-full md:w-[360px] ">
          Squats offer numerous benefits for both physical fitness and overall
          health. Squats primarily target the muscles in your legs, including
          the quadriceps, hamstrings, and glutes. By regularly performing
          squats, you can increase lower body strength and muscle mass.
        </p>
      </div>
    </div>
  );
};

export default Tutorial;
