import { FiArrowLeft } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { Switch } from "@/components/ui/switch";
import React, { useState } from "react";

const Alarm = () => {
    const navigate = useNavigate()
    // State to manage the switch status
    const [isEmailNotificationsActive, setIsEmailNotificationsActive] = useState(false);
    const [isPauseAllActive, setIsPauseAllActive] = useState(false);

    // Toggle the switch state
    const toggleEmailNotifications = () => setIsEmailNotificationsActive(!isEmailNotificationsActive);
    const togglePauseAll = () => setIsPauseAllActive(!isPauseAllActive);

    return (
        <div className="m-5">
            <div className="flex justify-between items-center">
                <Link className="flex-initial" onClick={() => navigate(-1)}>
                    <FiArrowLeft
                        className="p-1"
                        style={{
                            border: "1px solid gray",
                            borderRadius: "100%",
                            fontSize: "32px",
                        }}
                    />
                </Link>
                <h1 className="md:text-3xl text-xl font-bold flex-auto flex justify-center">
                    Notifications
                </h1>
            </div>

            <div className="mt-10 flex flex-col gap-5">
                <div>
                    <h2 className="font-bold">Notification Tone</h2>
                    <p className="text-sm text-gray-400">Never</p>
                </div>

                <div className="flex justify-center items-center h-full">
                    <div className="flex justify-between items-center w-full max-w-md">
                        <h2 className="font-bold">Email Notifications</h2>
                        <Switch
                            onClick={toggleEmailNotifications}
                            className={`transform scale-50 ${isEmailNotificationsActive ? "bg-gradient-to-r from-gradient-1 to-gradient-1" : "bg-gray-400"}`}
                        />
                    </div>
                </div>
                
                <div className="flex justify-center items-center h-full">
                    <div className="flex justify-between items-center w-full max-w-md">
                        <h2 className="font-bold">Pause All</h2>
                        <Switch
                            onClick={togglePauseAll}
                            className={`transform scale-50 ${isPauseAllActive ? "bg-gradient-to-r from-gradient-1 to-gradient-1" : "bg-gray-400"}`}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Alarm;
