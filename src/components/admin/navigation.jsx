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
          } h-screen shadow-md flex-col`}
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
                src="/assets/images/tys-logo-blue.png"
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
              } w-full h-10 flex `}
          >
            {bar === 0 ?

              <Image
                src="homepage.svg"
                alt="My Image"
                width={30}
                height={30}
              />
              : <div className="flex gap-2">
                <Image
                  src="homepage.svg"
                  alt="My Image"
                  width={30}
                  height={30}
                />
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
              } w-full h-10 flex `}
          >
            {bar === 0 ?
              <Image
                src="information-sign.svg"
                alt="My Image"
                width={30}
                height={30}
              />
              : <div className="flex gap-2">
                <Image
                  src="information-sign.svg"
                  alt="My Image"
                  width={30}
                  height={30}
                />
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
              } w-full h-10 flex `}
          >
            {bar === 0 ? (
              <Image
                src="services.svg"
                alt="My Image"
                width={30}
                height={30}
              />
            ) : (
              <div className="flex gap-2">
                <Image
                  src="services.svg"
                  alt="My Image"
                  width={30}
                  height={30}
                />
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
              } w-full h-10 flex `}
          >
            {bar === 0 ?
              <Image
                src="newspaper.svg"
                alt="My Image"
                width={30}
                height={30}
              />
              : <div className="flex gap-2">
                <Image
                  src="newspaper.svg"
                  alt="My Image"
                  width={30}
                  height={30}
                />
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
              } w-full h-10 flex `}
          >
            {bar === 0 ?
              <Image
                src="megaphone.svg"
                alt="My Image"
                width={30}
                height={30}
              />
              : <div className="flex gap-2">
                <Image
                  src="megaphone.svg"
                  alt="My Image"
                  width={30}
                  height={30}
                />
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
              } w-full h-10 flex `}
          >
            {bar === 0 ?
              <Image
                src="exclamation-mark.svg"
                alt="My Image"
                width={30}
                height={30}
              />
              : <div className="flex gap-2">
                <Image
                  src="exclamation-mark.svg"
                  alt="My Image"
                  width={30}
                  height={30}
                />
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
              } w-full h-10 flex `}
          >
            {bar === 0 ?
              <Image
                src="checked.svg"
                alt="My Image"
                width={30}
                height={30}
              />
              : <div className="flex gap-2">
                <Image
                  src="checked.svg"
                  alt="My Image"
                  width={30}
                  height={30}
                />
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
