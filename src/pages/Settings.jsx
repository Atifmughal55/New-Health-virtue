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
        <h1 className="md:text-4xl font-bold flex-auto flex justify-center ">
          Settings
        </h1>
      </div>
      <div className="mt-10">
        {linkData.map((link, i) => (
          <Link
            to={link.to}
            className="flex items-center justify-between my-6"
            key={i}
          >
            <div className=" flex gap-4">
              <img src={link.icon} alt="" />
              {link.text === "Logout" ? (
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <span className="bg-white font-semibold text-black text-base">
                      Log out
                    </span>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>
                        Are you sure you want to log out?
                      </AlertDialogTitle>
                    </AlertDialogHeader>
                    <AlertDialogFooter className="flex flex-row justify-center items-center gap-4">
                      <AlertDialogCancel>No</AlertDialogCancel>
                      <AlertDialogAction className="mt-2">
                        <Link to={"/sign-in"}>
                          {/* <link to={"/sign-in"}>Log Out</link> */}
                          Yes
                        </Link>
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              ) : (
                <h1 className="font-semibold">{link.text}</h1>
              )}
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
    </div>
  );
};

export default Settings;
