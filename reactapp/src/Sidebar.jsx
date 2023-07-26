import React, { useState } from "react";

const Sidebar = () => {
    const [active, setActive] = useState("Account"); // set initial active state to "Account"

    const handleItemClick = (name) => {
        setActive(name);
    };

    return (
        <div className="w-64 bg-white border-r h-full">
            <ul className="py-4">
                <li
                    className={`px-4 py-2 cursor-pointer ${active === "Account" && "bg-gray-100"
                        }`}
                    onClick={() => handleItemClick("Account")}
                >
                    Account
                </li>
                <li
                    className={`px-4 py-2 cursor-pointer ${active === "Privacy" && "bg-gray-100"
                        }`}
                    onClick={() => handleItemClick("Privacy")}
                >
                    Privacy
                </li>
                <li
                    className={`px-4 py-2 cursor-pointer ${active === "Security" && "bg-gray-100"
                        }`}
                    onClick={() => handleItemClick("Security")}
                >
                    Security
                </li>
                <li
                    className={`px-4 py-2 cursor-pointer ${active === "Notifications" && "bg-gray-100"
                        }`}
                    onClick={() => handleItemClick("Notifications")}
                >
                    Notifications
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
