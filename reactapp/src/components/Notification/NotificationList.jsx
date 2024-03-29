
import React, { useState, useEffect } from "react";
import axios from "axios";

function NotificationList() {
  const [notificationList, setNotificationList] = useState([]);
  const currentDate = new Date();

  useEffect(() => {
    axios
      .get("https://648ae86717f1536d65e9f0b7.mockapi.io/frndlist/frnds")
      .then(function (response) {
        const notificationArray = Object.values(response.data).map((item) => ({
          id: item.id,
          notification: item.notification,
          time: item.time,
          date: new Date(item.time),
        }));
        notificationArray.push({
          id: 90,
          notification: "hii",
          time: 4556,
          date: new Date(),
        });
        const sortedNotifications = notificationArray.sort(
          (a, b) => b.date - a.date
        );
        setNotificationList(sortedNotifications);
      });
  }, []);

  const groupedNotificationList = notificationList.reduce((acc, notification) => {
    const date = notification.date.toLocaleDateString();
    const isToday = date === currentDate.toLocaleDateString();
    const isThisWeek =
      notification.date >=
      new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        currentDate.getDate() - currentDate.getDay()
      );
    const label = isToday ? "Today" : isThisWeek ? "This week" : "";
    if (!acc[date]) {
      acc[date] = { label, notifications: [] };
    }
    acc[date].notifications.push(notification);
    return acc;
  }, {});

  return (
    <div className="flex flex-col items-center">
      <div
        id="notification-container"
        className="fixed inset-0 flex items-center justify-center pointer-events-none z-50"
      >
        {/* Notifications will be dynamically added here */}
      </div>
      {Object.entries(groupedNotificationList).map(([date, { label, notifications }]) => (
        <div key={date} className="my-4">
          {label && <h2 className="text-lg font-medium mb-2">{label}</h2>}
          <h3 className="text-gray-500 mb-2">{date}</h3>
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className="bg-gray-200 p-4 rounded-lg my-2 w-96"
            >
              <p className="text-black">{notification.notification}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default NotificationList;
