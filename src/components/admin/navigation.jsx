import React from "react";
import { useState } from "react";
import Image from "next/image";

function Navigation() {
  const [bar, setBar] = useState(1);
  const toggleBar = () => {
    setBar((prevBar) => (prevBar === 1 ? 0 : 1));
  };
  return (
    <div className="z-40 ">
      <div
        className={`${bar == 1
          ? " w-[200px] duration-100 ease-in-out"
          : " w-[80px] duration-100 ease-in-out"
          } h-screen shadow-md flex-col text-[#ffffff] bg-[#0d3064]`}
      >
        <div className="w-full h-[80px] mb-5 shadow-md  ">
          <button className="w-full h-full" onClick={toggleBar}>
            {bar === 0 ? (
              <img
                src="/assets/images/tyssquare.png"
                alt=""
                className="mx-5 w-6/12 opacity-100"
              />
            ) : (
              <img
                src="/assets/images/tys-logo.png"
                alt=""
                className="mx-5 w-10/12 opacity-100"
              />
            )}
          </button>
        </div>
        <a href="/dashboardAdmin/home">
          <button
            className={`${bar == 1
              ? "ms-5 justify-start items-center"
              : " justify-center items-center"
              } w-full h-10 flex my-3`}
          >
            {bar === 0 ?

              <div className="w-10">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#ffffff" d="M20,8h0L14,2.74a3,3,0,0,0-4,0L4,8a3,3,0,0,0-1,2.26V19a3,3,0,0,0,3,3H18a3,3,0,0,0,3-3V10.25A3,3,0,0,0,20,8ZM14,20H10V15a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1Zm5-1a1,1,0,0,1-1,1H16V15a3,3,0,0,0-3-3H11a3,3,0,0,0-3,3v5H6a1,1,0,0,1-1-1V10.25a1,1,0,0,1,.34-.75l6-5.25a1,1,0,0,1,1.32,0l6,5.25a1,1,0,0,1,.34.75Z" /></svg>
              </div>
              : <div className="flex gap-2 currentColor hover:text-[#007aff]">
                <div className="w-8">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#ffffff" d="M20,8h0L14,2.74a3,3,0,0,0-4,0L4,8a3,3,0,0,0-1,2.26V19a3,3,0,0,0,3,3H18a3,3,0,0,0,3-3V10.25A3,3,0,0,0,20,8ZM14,20H10V15a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1Zm5-1a1,1,0,0,1-1,1H16V15a3,3,0,0,0-3-3H11a3,3,0,0,0-3,3v5H6a1,1,0,0,1-1-1V10.25a1,1,0,0,1,.34-.75l6-5.25a1,1,0,0,1,1.32,0l6,5.25a1,1,0,0,1,.34.75Z" /></svg>
                </div>
                <div className="flex items-center justify-center font-semibold">
                  <p>Homepage</p>
                </div>
              </div>
            }
          </button>
        </a>
        <a href="/dashboardAdmin/about">
          <button
            className={`${bar == 1
              ? "ms-5 justify-start items-center"
              : " justify-center items-center"
              } w-full h-10 flex my-3`}
          >
            {bar === 0 ?
              <div className="w-10">
                <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#ffffff" d="M12,2A10,10,0,1,0,22,12,10.01114,10.01114,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.00917,8.00917,0,0,1,12,20Zm0-8.5a1,1,0,0,0-1,1v3a1,1,0,0,0,2,0v-3A1,1,0,0,0,12,11.5Zm0-4a1.25,1.25,0,1,0,1.25,1.25A1.25,1.25,0,0,0,12,7.5Z" /></svg>
              </div>
              : <div className="flex gap-2 currentColor hover:text-[#007aff]">
                <div className="w-8">
                  <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#ffffff" d="M12,2A10,10,0,1,0,22,12,10.01114,10.01114,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.00917,8.00917,0,0,1,12,20Zm0-8.5a1,1,0,0,0-1,1v3a1,1,0,0,0,2,0v-3A1,1,0,0,0,12,11.5Zm0-4a1.25,1.25,0,1,0,1.25,1.25A1.25,1.25,0,0,0,12,7.5Z" /></svg>
                </div>
                <div className="flex items-center justify-center font-semibold">
                  <p>About</p>
                </div>
              </div>}
          </button>
        </a>
        <a href="/dashboardAdmin/services">
          <button
            className={`${bar == 1
              ? "ms-5 justify-start items-center"
              : " justify-center items-center"
              } w-full h-10 flex my-3`}
          >
            {bar === 0 ? (
              <div className="w-10">
                <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path fill="#ffffff" d="M21.71,15.58l-4.52-4.51a6.85,6.85,0,0,0,.14-1.4A7.67,7.67,0,0,0,6.42,2.72a1,1,0,0,0-.57.74,1,1,0,0,0,.28.88l4.35,4.34-1.8,1.8L4.34,6.13a1,1,0,0,0-.88-.27,1,1,0,0,0-.74.56,7.67,7.67,0,0,0,7,10.91,6.85,6.85,0,0,0,1.4-.14l4.51,4.52a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42l-4.9-4.9a1,1,0,0,0-.95-.26,5.88,5.88,0,0,1-1.48.2A5.67,5.67,0,0,1,4,9.67a6,6,0,0,1,.08-1L8,12.6a1,1,0,0,0,1.42,0L12.6,9.39A1,1,0,0,0,12.6,8L8.71,4.08a6.12,6.12,0,0,1,1-.08,5.67,5.67,0,0,1,5.66,5.67,5.88,5.88,0,0,1-.2,1.48,1,1,0,0,0,.26.95l4.9,4.9a1,1,0,0,0,1.42-1.42Z" /></svg>
              </div>
            ) : (
              <div className="flex gap-2 hover:text-[#007aff]">
                <div className="w-8">
                  <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path fill="#ffffff" d="M21.71,15.58l-4.52-4.51a6.85,6.85,0,0,0,.14-1.4A7.67,7.67,0,0,0,6.42,2.72a1,1,0,0,0-.57.74,1,1,0,0,0,.28.88l4.35,4.34-1.8,1.8L4.34,6.13a1,1,0,0,0-.88-.27,1,1,0,0,0-.74.56,7.67,7.67,0,0,0,7,10.91,6.85,6.85,0,0,0,1.4-.14l4.51,4.52a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42l-4.9-4.9a1,1,0,0,0-.95-.26,5.88,5.88,0,0,1-1.48.2A5.67,5.67,0,0,1,4,9.67a6,6,0,0,1,.08-1L8,12.6a1,1,0,0,0,1.42,0L12.6,9.39A1,1,0,0,0,12.6,8L8.71,4.08a6.12,6.12,0,0,1,1-.08,5.67,5.67,0,0,1,5.66,5.67,5.88,5.88,0,0,1-.2,1.48,1,1,0,0,0,.26.95l4.9,4.9a1,1,0,0,0,1.42-1.42Z" /></svg>
                </div>
                <div className="flex items-center justify-center font-semibold">
                  <p>Services</p>
                </div>
              </div>
            )}
          </button>
        </a>
        <a href="/dashboardAdmin/articles">
          <button
            className={`${bar == 1
              ? "ms-5 justify-start items-center"
              : " justify-center items-center"
              } w-full h-10 flex my-3`}
          >
            {bar === 0 ?
              <div className="w-10">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#ffffff" d="M17,11H16a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm0,4H16a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2ZM11,9h6a1,1,0,0,0,0-2H11a1,1,0,0,0,0,2ZM21,3H7A1,1,0,0,0,6,4V7H3A1,1,0,0,0,2,8V18a3,3,0,0,0,3,3H18a4,4,0,0,0,4-4V4A1,1,0,0,0,21,3ZM6,18a1,1,0,0,1-2,0V9H6Zm14-1a2,2,0,0,1-2,2H7.82A3,3,0,0,0,8,18V5H20Zm-9-4h1a1,1,0,0,0,0-2H11a1,1,0,0,0,0,2Zm0,4h1a1,1,0,0,0,0-2H11a1,1,0,0,0,0,2Z" /></svg>
              </div>
              : <div className="flex gap-2 currentColor hover:text-[#007aff]">
                <div className="w-8">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#ffffff" d="M17,11H16a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm0,4H16a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2ZM11,9h6a1,1,0,0,0,0-2H11a1,1,0,0,0,0,2ZM21,3H7A1,1,0,0,0,6,4V7H3A1,1,0,0,0,2,8V18a3,3,0,0,0,3,3H18a4,4,0,0,0,4-4V4A1,1,0,0,0,21,3ZM6,18a1,1,0,0,1-2,0V9H6Zm14-1a2,2,0,0,1-2,2H7.82A3,3,0,0,0,8,18V5H20Zm-9-4h1a1,1,0,0,0,0-2H11a1,1,0,0,0,0,2Zm0,4h1a1,1,0,0,0,0-2H11a1,1,0,0,0,0,2Z" /></svg>
                </div>
                <div className="flex items-center justify-center font-semibold">
                  <p>Articles</p>
                </div>
              </div>}
          </button>
        </a>
        <a href="/dashboardAdmin/events">
          <button
            className={`${bar == 1
              ? "ms-5 justify-start items-center"
              : " justify-center items-center"
              } w-full h-10 flex my-3`}
          >
            {bar === 0 ?
              <div className="w-10">
                <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path fill="#ffffff" d="M19.99121,2.002a.99943.99943,0,0,0-1,1v.63672a9.03617,9.03617,0,0,1-7,3.36328h-6a3.00328,3.00328,0,0,0-3,3v2a3.00328,3.00328,0,0,0,3,3H6.475L4.07227,20.6084A.99931.99931,0,0,0,4.99121,22.002h4a.99857.99857,0,0,0,.91895-.60644L12.63391,15.04a9.02805,9.02805,0,0,1,6.3573,3.32507V19.002a1,1,0,0,0,2,0v-16A.99942.99942,0,0,0,19.99121,2.002Zm-14,11a1.00067,1.00067,0,0,1-1-1v-2a1.00068,1.00068,0,0,1,1-1h1v4Zm2.34082,7H6.50781l2.14258-5h1.82422ZM18.99121,15.5238a11.052,11.052,0,0,0-7-2.52185h-3v-4h3a11.05281,11.05281,0,0,0,7-2.52234Z" /></svg>
              </div>
              : <div className="flex gap-2 currentColor hover:text-[#007aff]">
                <div className="w-8">
                  <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path fill="#ffffff" d="M19.99121,2.002a.99943.99943,0,0,0-1,1v.63672a9.03617,9.03617,0,0,1-7,3.36328h-6a3.00328,3.00328,0,0,0-3,3v2a3.00328,3.00328,0,0,0,3,3H6.475L4.07227,20.6084A.99931.99931,0,0,0,4.99121,22.002h4a.99857.99857,0,0,0,.91895-.60644L12.63391,15.04a9.02805,9.02805,0,0,1,6.3573,3.32507V19.002a1,1,0,0,0,2,0v-16A.99942.99942,0,0,0,19.99121,2.002Zm-14,11a1.00067,1.00067,0,0,1-1-1v-2a1.00068,1.00068,0,0,1,1-1h1v4Zm2.34082,7H6.50781l2.14258-5h1.82422ZM18.99121,15.5238a11.052,11.052,0,0,0-7-2.52185h-3v-4h3a11.05281,11.05281,0,0,0,7-2.52234Z" /></svg>
                </div>
                <div className="flex items-center justify-center font-semibold">
                  <p>Events</p>
                </div>
              </div>}
          </button>
        </a>
        <a href="/dashboardAdmin/policies">
          <button
            className={`${bar == 1
              ? "ms-5 justify-start items-center"
              : " justify-center items-center"
              } w-full h-10 flex my-3`}
          >
            {bar === 0 ?
              <div className="w-10">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#ffffff" d="M12,7a1,1,0,0,0-1,1v4a1,1,0,0,0,2,0V8A1,1,0,0,0,12,7Zm0,8a1,1,0,1,0,1,1A1,1,0,0,0,12,15Zm9.71-7.44L16.44,2.29A1.05,1.05,0,0,0,15.73,2H8.27a1.05,1.05,0,0,0-.71.29L2.29,7.56A1.05,1.05,0,0,0,2,8.27v7.46a1.05,1.05,0,0,0,.29.71l5.27,5.27a1.05,1.05,0,0,0,.71.29h7.46a1.05,1.05,0,0,0,.71-.29l5.27-5.27a1.05,1.05,0,0,0,.29-.71V8.27A1.05,1.05,0,0,0,21.71,7.56ZM20,15.31,15.31,20H8.69L4,15.31V8.69L8.69,4h6.62L20,8.69Z" /></svg>
              </div>
              : <div className="flex gap-2 currentColor hover:text-[#007aff]">
                <div className="w-8">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#ffffff" d="M12,7a1,1,0,0,0-1,1v4a1,1,0,0,0,2,0V8A1,1,0,0,0,12,7Zm0,8a1,1,0,1,0,1,1A1,1,0,0,0,12,15Zm9.71-7.44L16.44,2.29A1.05,1.05,0,0,0,15.73,2H8.27a1.05,1.05,0,0,0-.71.29L2.29,7.56A1.05,1.05,0,0,0,2,8.27v7.46a1.05,1.05,0,0,0,.29.71l5.27,5.27a1.05,1.05,0,0,0,.71.29h7.46a1.05,1.05,0,0,0,.71-.29l5.27-5.27a1.05,1.05,0,0,0,.29-.71V8.27A1.05,1.05,0,0,0,21.71,7.56ZM20,15.31,15.31,20H8.69L4,15.31V8.69L8.69,4h6.62L20,8.69Z" /></svg>
                </div>
                <div className="flex items-center justify-center font-semibold">
                  <p>Pol & Reg</p>
                </div>
              </div>}
          </button>
        </a>
        <a href="/dashboardAdmin/clients">
          <button
            className={`${bar == 1
              ? "ms-5 justify-start items-center"
              : " justify-center items-center"
              } w-full h-10 flex my-3`}
          >
            {bar === 0 ?
              <div className="w-10">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#ffffff" d="M10.21,14.75a1,1,0,0,0,1.42,0l4.08-4.08a1,1,0,0,0-1.42-1.42l-3.37,3.38L9.71,11.41a1,1,0,0,0-1.42,1.42ZM21,2H3A1,1,0,0,0,2,3V21a1,1,0,0,0,1,1H21a1,1,0,0,0,1-1V3A1,1,0,0,0,21,2ZM20,20H4V4H20Z" /></svg>
              </div>
              : <div className="flex gap-2 currentColor hover:text-[#007aff]">
                <div className="w-8">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#ffffff" d="M10.21,14.75a1,1,0,0,0,1.42,0l4.08-4.08a1,1,0,0,0-1.42-1.42l-3.37,3.38L9.71,11.41a1,1,0,0,0-1.42,1.42ZM21,2H3A1,1,0,0,0,2,3V21a1,1,0,0,0,1,1H21a1,1,0,0,0,1-1V3A1,1,0,0,0,21,2ZM20,20H4V4H20Z" /></svg>
                </div>
                <div className="flex items-center justify-center font-semibold">
                  <p>Clients</p>
                </div>
              </div>}
          </button>
        </a>
      </div>
    </div>
  );
}
export default Navigation;
