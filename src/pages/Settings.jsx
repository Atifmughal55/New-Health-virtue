import { MdKeyboardArrowRight } from "react-icons/md";
import { FiArrowLeft } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";

const Settings = () => {
  const linkData = [
    {
      icon: "svgs/profile-icon.svg",
      text: "My Profile",
      to: "/my-profile",
    },
    {
      icon: "svgs/bell-icon.svg",
      text: "Notifications",
      to: "/notifications",
    },
    {
      icon: "svgs/world.svg",
      text: "Language",
      to: "/languages",
    },
    {
      icon: "svgs/help.svg",
      text: "Help Center",
      to: "/contact-us",
    },
    {
      icon: "svgs/privacy.svg",
      text: "Privacy Policy",
      to: "/privacy-policy",
    },
    {
      icon: "svgs/reset.svg",
      text: "Reset Password",
      to: "/reset-password",
    },
    {
      icon: "svgs/logout.svg",
      text: "Logout",
      to: "/sign-in",
    },
  ];
  const navigate = useNavigate();
  return (
    <div className="m-5">
      <div className="flex justify-between items-center ">
        <Link className="flex-initial" onClick={() => navigate(-1)}>
          <FiArrowLeft
            className="text-3xl"
            style={{
              border: "1px solid gray",
              borderRadius: "100%",
            }}
          />
        </Link>
        <h1 className="md:text-4xl font-bold flex-auto flex justify-center ">
          Settings
        </h1>
      </div>

      {linkData.map((link, i) => (
        <Link
          to={link.to}
          className="flex items-center justify-between my-5"
          key={i}
        >
          <div className=" flex gap-4">
            <img src={link.icon} alt="" />

            <h1>{link.text}</h1>
          </div>
          <div className="flex items-center gap-1">
            {link.text === "Language" ? (
              <p className="text-gray-400">English</p>
            ) : (
              ""
            )}
            <i>
              <MdKeyboardArrowRight />
            </i>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Settings;
