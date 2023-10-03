import React from "react";
import { useState } from "react";

function Navigation() {
  const [bar, setBar] = useState(1);
  const toggleBar = () => {
    setBar((prevBar) => (prevBar === 1 ? 0 : 1));
  };
  return (
    <div className="z-40">
      <div
        className={`${
          bar == 1
            ? " w-[200px] duration-100 ease-in-out"
            : " w-[80px] duration-100 ease-in-out"
        } h-screen shadow-md flex-col`}
      >
        <div className="w-full h-[80px] mt-10 shadow-md  ">
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
            className={`${
              bar == 1
                ? "ms-5 justify-start items-center"
                : " justify-center items-center"
            } w-full h-10 flex `}
          >
            {bar === 0 ? <p>H</p> : <p className="">Homepage</p>}
          </button>
        </a>
        <a href="/dashboardAdmin/about">
          <button
            className={`${
              bar == 1
                ? "ms-5 justify-start items-center"
                : " justify-center items-center"
            } w-full h-10 flex `}
          >
            {bar === 0 ? <p>A</p> : <p>About</p>}
          </button>
        </a>
        <a href="/dashboardAdmin/services">
          <button
            className={`${
              bar == 1
                ? "ms-5 justify-start items-center"
                : " justify-center items-center"
            } w-full h-10 flex `}
          >
            {bar === 0 ? (
              <p>S</p>
            ) : (
              <>
                <p>Services</p>
                {}
              </>
            )}
          </button>
        </a>
        <a href="/dashboardAdmin/articles">
          <button
            className={`${
              bar == 1
                ? "ms-5 justify-start items-center"
                : " justify-center items-center"
            } w-full h-10 flex `}
          >
            {bar === 0 ? <p>A</p> : <p>Articles</p>}
          </button>
        </a>
        <a href="/dashboardAdmin/events">
          <button
            className={`${
              bar == 1
                ? "ms-5 justify-start items-center"
                : " justify-center items-center"
            } w-full h-10 flex `}
          >
            {bar === 0 ? <p>E</p> : <p>Event</p>}
          </button>
        </a>
        <a href="/dashboardAdmin/policies">
          <button
            className={`${
              bar == 1
                ? "ms-5 justify-start items-center"
                : " justify-center items-center"
            } w-full h-10 flex `}
          >
            {bar === 0 ? <p>PR</p> : <p>Pol and Reg</p>}
          </button>
        </a>
        <a href="/dashboardAdmin/clients">
          <button
            className={`${
              bar == 1
                ? "ms-5 justify-start items-center"
                : " justify-center items-center"
            } w-full h-10 flex `}
          >
            {bar === 0 ? <p>C</p> : <p>Clients</p>}
          </button>
        </a>
      </div>
    </div>
  );
}
export default Navigation;
