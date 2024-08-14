import { MdKeyboardArrowRight } from "react-icons/md";
import { FiArrowLeft } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

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
      to: "/alarm",
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
    },
  ];
  const navigate = useNavigate();
  return (
    <div className="m-5 ">
      <div className=" flex justify-between items-center">
        <Link className="flex-initial" onClick={() => navigate(-1)}>
          <FiArrowLeft
            className="p-1"
            style={{
              border: "1px solid gray",
              borderRadius: "100%",
              fontSize: " 32px",
            }}
          />
        </Link>
        <h1 className="md:text-3xl text-xl font-bold flex-auto flex justify-center">
          Settings
        </h1>
      </div>
      <div className="mt-10">
        {linkData.map((link, i) => (
          link.text === "Logout" ? (
            <AlertDialog key={i} className="flex items-center justify-between my-6 cursor-pointer">
              <AlertDialogTrigger asChild>
                <div className="flex w-full justify-between">
                  <div className="flex gap-4">
                    <img src={link.icon} alt="" />
                    <span className="bg-white font-semibold  text-base">
                      Log out
                    </span>
                  </div>
                  <i><MdKeyboardArrowRight /></i>
                </div>
              </AlertDialogTrigger>
              <AlertDialogContent className="mx-auto p-4 rounded-lg w-11/12 sm:w-3/4 md:w-2/3 lg:w-1/2">
                <AlertDialogHeader>
                  <AlertDialogTitle className="text-custom-blue font-bold text-center">
                    Are you sure you want to log out?
                  </AlertDialogTitle>
                </AlertDialogHeader>
                <AlertDialogFooter className="flex flex-row justify-center items-center gap-4">
                  <AlertDialogCancel className="mt-2 rounded-md py-5 px-7 border border-blue-700">
                    No
                  </AlertDialogCancel>
                  <AlertDialogAction className="mt-2 bg-custom-blue py-5 px-7 hover:opacity-90 ml-3 text-lg">
                    <Link to={"/sign-in"}>
                      Yes
                    </Link>
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          ) : (
            <Link to={link.to} className="flex items-center justify-between my-6 w-full" key={i}>
              <div className="flex gap-4">
                <img src={link.icon} alt="" />
                <h1 className="font-semibold">{link.text}</h1>
              </div>
              <div className="flex items-center gap-1">
                {link.text === "Language" ? <p className="text-gray-400">English</p> : ""}
                <i><MdKeyboardArrowRight /></i>
              </div>
            </Link>
          )
        ))}
      </div>

    </div>
  );
};

export default Settings;
