import React, { useState } from "react";
import Content from "../Content/Content";
import SideBar from "./SideBar";
import EditProfilePage from "../Content/pages/EditProfilePage";
import PasswordChangePage from "../Content/pages/PasswordChangePage";
import SavePostPage from "../Content/pages/SavePostPage";
import ProfilePage from "../../components/Profile/ProfilePage";


const MainPage = () => {
  const [showSide, setshowSide] = useState(false);

  const [selectedPage, setSelectedPage] = useState("editProfile"); // stores current page key
  
  //Stores key value (Component) key = "editprofile"
  // page[key] => <EditProfilePage/>
  const pages = {
    editProfile: <EditProfilePage />,
    password: <PasswordChangePage />,
    savedPost: <SavePostPage />,
    profilePage: <ProfilePage />,
  };

  return (
    <>
      {/* <NavBar /> */}
      <div className="relative">
        <button
          onClick={() => setshowSide(!showSide)}
          type="button"
          class="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        >
          <span class="sr-only">Open sidebar</span>
          <svg
            class="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clip-rule="evenodd"
              fill-rule="evenodd"
              d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
            ></path>
          </svg>
        </button>

        {/* Side Bar */}

        <SideBar
          showSide={showSide}
          setshowSide={setshowSide}
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />

        {/* end Side bar */}

        {/* Content Page */}

        <div
          onClick={() => setshowSide(false)}
          class="p-4 sm:ml-64 h-full w-full bg-gray-50"
        >

          {/* // selectedPage = "editProfile" */}
          {/* // pagesToShow = pages[key] -> "<PasswordChangePage />" */}
          <Content pageToShow={pages[selectedPage]} />
        </div>

        {/* End Content page */}
      </div>
    </>
  );
};

export default MainPage;
