import { useNavigate } from "react-router-dom";
import Data from "../../data.json";
import React from "react";
import BackgroundLetterAvatars from "@mui/material/Avatar";

// import BackgroundLetterAvatars from "./Avatar 2";
// import BackgroundLetterAvatars from "./Avatar";

const HeaderComponent = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = React.useState<boolean>(false);

  React.useEffect(() => {
    // Check if the user is logged in by verifying the presence of a token or session
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const handleSignInClick = () => {
    if (!isLoggedIn) {
      navigate("/signin");
    }
  };

  //   const handleLogout = () => {
  //     localStorage.removeItem("token");
  //     setIsLoggedIn(false);
  //   };
  return (
    <div className="relative">
      <div className="bg-white w-full absolute z-50">
        <div className="border w-full py-3 px-6">
          <div className="flex justify-between w-full">
            <div className="flex xl:mr-[17rem] items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-[2rem] w-[2rem] text-red-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                />
              </svg>
              <span onClick={() => navigate("/")} className="ml-2 text-[14px] text-[bond] font-semibold text-[#252C32]">
                What a Market
              </span>
            </div>

            <div className="flex items-center justify-center flex-1 gap-x-3">
              <span className="inputContainer w-full md:w-[60%] h-[3rem] bg-gray-200 border  text-sm rounded-full flex">
                <input
                  type="search"
                  name="search"
                  placeholder="Search"
                  className="flex-grow px-4 rounded-l-full rounded-r-full text-sm focus:outline-none border border-gray-400"
                />
                <i className=" m-3 text-lg text-gray-700 h-[25px] mt-[1.2rem] w-[25px] flex items-center justify-center">
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="transform -translate-y-1/2  h-[25p] w-[25px]  text-gray-500"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11 4a7 7 0 110 14 7 7 0 010-14zM21 21l-4.35-4.35"
                    />{" "}
                  </svg>
                </i>
              </span>
              {/* <AnchorTemporaryDrawer /> */}
            </div>

            <div className="ml-2 flex">
              <div className="border md:hidden transition-all duration-[1s] ease-in-out flex">
                <div className="inline relative">
                  <button
                    type="button"
                    className="inline-flex items-center  relative px-[10px] py-[2px] border rounded-full hover:shadow-lg"
                  >
                    <div className="pl-1">
                      <svg
                        viewBox="0 0 32 32"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        role="presentation"
                        // focusable="false"
                        style={{
                          display: "block",
                          fill: "grey",
                          height: "25px",
                          width: "25px",
                          stroke: "currentColor",
                          strokeWidth: 3,
                          overflow: "visible",
                        }}
                      >
                        <g fill="none" fillRule="nonzero">
                          <path d="M2 16h28"></path>
                          <path d="M2 24h28"></path>
                          <path d="M2 8h28"></path>
                        </g>
                      </svg>
                    </div>

                    <div className="block flex-grow-0 flex-shrink-0 h-10 w-12 pl-5">
                      {/* <svg
                        viewBox="0 0 32 32"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        role="presentation"
                        focusable="false"
                        style={{
                          display: "block",
                          height: "25px",
                          width: "25px",
                          fill: "grey",
                        }}
                      >
                        <path d="M16 .7C7.563.7.7 7.563.7 16S7.563 31.3 16 31.3 31.3 24.437 31.3 16 24.437.7 16 .7zm0 28c-4.021 0-7.605-1.884-9.933-4.81a12.425 12.425 0 0 1 6.451-4.4 6.507 6.507 0 0 1-3.018-5.49c0-3.584 2.916-6.5 6.5-6.5s6.5 2.916 6.5 6.5a6.513 6.513 0 0 1-3.019 5.491 12.42 12.42 0 0 1 6.452 4.4C23.605 26.816 20.021 28.7 16 28.7z"></path>
                      </svg> */}
                      <BackgroundLetterAvatars />
                    </div>
                  </button>
                </div>
              </div>
              <div className="md:flex transition-all ease-in-out duration-[1s] hidden">
                <div className="flex cursor-pointer items-center gap-x-1 rounded-md py-2 px-4 hover:bg-gray-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-[2rem] w-[2rem] text-gray-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z" />
                    <path
                      fillRule="evenodd"
                      d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm font-medium">Orders</span>
                </div>

                <div className="flex cursor-pointer items-center gap-x-1 rounded-md py-2 px-4 hover:bg-gray-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-[2rem] w-[2rem] text-gray-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm font-medium">Favorites</span>
                </div>

                <div className="flex cursor-pointer items-center gap-x-1 rounded-md py-2 px-4 hover:bg-gray-100">
                  <div className="relative">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-[2rem] w-[2rem] text-gray-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                    </svg>
                    <span className="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 p-2 text-xs text-white">
                      3
                    </span>
                  </div>
                  <span className="text-sm font-medium">Cart</span>
                </div>

                <div className="ml-2 flex cursor-pointer items-center gap-x-1 rounded-md border py-2 px-4 hover:bg-gray-100">
                  {isLoggedIn ? (
                    <div className="flex items-center">
                      <span className="text-sm font-medium">
                        <BackgroundLetterAvatars />
                        {/* <svg
                          viewBox="0 0 32 32"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          role="presentation"
                          focusable="false"
                          style={{
                            display: "block",
                            height: "25px",
                            width: "25px",
                            fill: "green",
                          }}
                        >
                          <path d="M16 .7C7.563.7.7 7.563.7 16S7.563 31.3 16 31.3 31.3 24.437 31.3 16 24.437.7 16 .7zm0 28c-4.021 0-7.605-1.884-9.933-4.81a12.425 12.425 0 0 1 6.451-4.4 6.507 6.507 0 0 1-3.018-5.49c0-3.584 2.916-6.5 6.5-6.5s6.5 2.916 6.5 6.5a6.513 6.513 0 0 1-3.019 5.491 12.42 12.42 0 0 1 6.452 4.4C23.605 26.816 20.021 28.7 16 28.7z"></path> */}
                        {/* </svg> */}
                      </span>
                      <button
                        className="ml-4 text-sm font-medium"
                        onClick={() => {
                          localStorage.removeItem("authToken");
                          setIsLoggedIn(false);
                        }}
                      >
                        Logout
                      </button>
                    </div>
                  ) : (
                    <div
                      className="ml-2 flex cursor-pointer items-center gap-x-1 rounded-md border py-2 px-4 hover:bg-gray-100"
                      onClick={handleSignInClick}
                    >
                      <span className="text-sm font-medium">Sign in</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-center">
            <div className=" md:flex hidden gap-x-8 flex-wrap">
              {Data.categories.map((category) => (
                <span
                  onClick={() => navigate(`/${category}`)}
                  className="cursor-pointer rounded-sm py-1 px-2 text-sm font-medium hover:bg-gray-100"
                >
                  {category}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderComponent;
