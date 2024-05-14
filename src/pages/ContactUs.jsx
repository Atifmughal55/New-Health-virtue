import {
  FaAt,
  FaFacebook,
  FaLinkedin,
  FaPhoneVolume,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { FiArrowLeft } from "react-icons/fi";
import { RiInstagramFill } from "react-icons/ri";
import { TbWorld } from "react-icons/tb";
import { Link, NavLink, useNavigate } from "react-router-dom";

const ContactUs = () => {
  const navigate = useNavigate();
  const data = [
    {
      icon: <FaAt className="text-3xl" />,
      text: "info@HealthVirtue.com",
      link: `www.google.com`,
    },
    {
      icon: <FaFacebook className="text-3xl text-blue-700" />,
      text: "Health.Virtue",
      link: `www.facebook.com/healthvirtue`,
      color: "bg-custom-blue",
    },
    {
      icon: <FaLinkedin className="text-3xl text-blue-700" />,
      text: "Healthvirtue",
      link: ``,
      color: "bg-custom-blue",
    },
    {
      icon: <FaYoutube className="text-3xl text-red-600" />,
      text: "Healthvirtue",
      link: `www.youtube.com/healthvirtue`,
      color: "bg-red-400",
    },
    {
      icon: <FaTwitter className="text-3xl text-green-700" />,
      text: "Healthvirtue",
      link: `www.twitter.com/healthvirtue`,
    },
    {
      icon: (
        <RiInstagramFill className="text-3xl text-gradient-to-r from-blue-700 to-red-300" />
      ),
      text: "Healthvirtue",
      link: `www.instagram.com/healthvirtue`,
    },
    {
      icon: <TbWorld className="text-3xl text-green-700" />,
      text: "www.HealthVirtue.com",
      link: `www.HealthVirtue.com`,
    },
    {
      icon: <FaPhoneVolume className="text-3xl text-green-700" />,
      text: "ogoo-Healthvirtue",
      link: ``,
    },
  ];
  return (
    <div className="mt-5 ">
      <div className="mb-10 flex justify-between items-center ">
        <Link className="ms-5 flex-initial">
          <FiArrowLeft onClick={() => navigate(-1)}
            className="p-1"
            style={{
              border: "1px solid gray",
              borderRadius: "100%",
              fontSize:" 32px"
            }}
          />
        </Link>
        <h1 className="md:text-3xl text-xl font-bold flex-auto flex justify-center">
          Contact Us.
        </h1>
      </div>
      <div className=" flex flex-col md:w-[360px] ">
        {data.map((item, i) => (
          <div
            className=" py-4 flex items-center gap-4 p-2  border-b border-black "
            key={i}
          >
            <i className="ms-5">{item.icon}</i>
            <NavLink
              to={item.link}
              className="text-sky-500 font-bold md:font-normal"
            >
              {item.text}
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactUs;
