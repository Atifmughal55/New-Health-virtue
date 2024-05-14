import { FiArrowLeft } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";

const Privacy = () => {
  const navigate = useNavigate();
  return (
    <div className="m-5">
      <div className="flex justify-between items-center ">
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
        <h1 className="md:text-3xl text-xl font-bold flex-auto flex justify-center">
          Privacy Policy
        </h1>
      </div>
      <div className="flex flex-col items-center gap-3 mt-10 italic">
        <p className="text-center md:w-[400px] py-2">
          Your privacy is important to us. It is Brainstorming's policy to
          respect your privacy regarding any information we may collect from you
          across our <Link className="text-blue-700">website,</Link> and other
          sites we own and operate.
        </p>
        <p className="text-center md:w-[400px] py-2">
          We only ask for personal information when we truly need it to provide
          a service to you. We collect it by fair and lawful means, with your
          knowledge and consent. We also let you know why we’re collecting it
          and how it will be used.
        </p>
        <p className="text-center md:w-[400px] py-2">
          We only retain collected information for as long as necessary to
          provide you with your requested service. What data we store, we’ll
          protect within commercially acceptable means to prevent loss and
          theft, as well as unauthorized access, disclosure, copying, use or
          modification.
        </p>
        <p className="text-center md:w-[400px] py-2">
          We don’t share any personally identifying information publicly or with
          third-parties, except when required to by law.
        </p>
      </div>
    </div>
  );
};

export default Privacy;
