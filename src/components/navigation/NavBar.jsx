import React, { Fragment } from "react";

import {
  Popover,
  PopoverButton,
  PopoverPanel,
  Transition,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { Link, useLocation } from "react-router-dom";

import logo1 from "../../assets/logo-only.png";
import logo2 from "../../assets/logo-text-only.png";

const config = {
  event: {
    name: "RUSS 2025",
    logo1: logo1,
    logo2: logo2,
  },
  navigation: [
    { name: "Home", href: "/" },
    { name: "Programme", href: "/programme" },
    { name: "Author Instructions", href: "/author-instructions" },
    { name: "Team", href: "/team" },
  ],
  callToAction: { name: "Downloads", href: "/downloads" },
};

const Menu = () => {
  const { navigation, callToAction, event } = config;

  const path = useLocation();

  const isActive = (href) => {
    return path.pathname == href ? "text-[#6D2C95]" : "text-gray-500";
  };

  return (
    <>
      <Popover>
        <div className="relative bg-white w-screen py-2 px-4 sm:px-6 lg:px-8">
          <nav
            className="relative flex items-center justify-between sm:h-10 lg:justify-start"
            aria-label="Global"
          >
            <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
              <div className="flex items-center justify-between w-full md:w-auto">
                <Link to="/" className="flex flex-row items-center">
                  <img alt="logo" className="w-11 h-auto" src={event.logo1} />
                  <img alt="logo" className="w-16 h-auto" src={event.logo2} />
                </Link>
                <div className="-mr-2 flex items-center md:hidden">
                  <PopoverButton
                    className={`bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-[#6D2C95] hover:underline hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#6D2C95]`}
                  >
                    <span className="sr-only">Open main menu</span>
                    <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                  </PopoverButton>
                </div>
              </div>
            </div>
            <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
              {navigation.map((item) => (
                <Link
                  id="nav-links"
                  key={item.name}
                  to={item.href}
                  className={
                    isActive(item.href) +
                    " font-medium hover:text-[#6D2C95] hover:underline"
                  }
                >
                  {item.name}
                </Link>
              ))}
              <Link
                id="nav-links"
                key={callToAction.name}
                to={callToAction.href}
                className={
                  isActive(callToAction.href) +
                  " hover:underline bg-[#6D2C95] text-white px-3 py-2 rounded-md text-sm font-medium"
                }
              >
                {callToAction.name}
              </Link>
            </div>
          </nav>
        </div>

        <Transition
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <PopoverPanel
            focus
            className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
          >
            <div
              className={`rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden`}
            >
              <div className="px-5 pt-4 flex items-center justify-between">
                <Link to="/" className="flex flex-row items-center">
                  <img alt="logo" className="w-11 h-auto" src={event.logo1} />
                  <img alt="logo" className="w-16 h-auto" src={event.logo2} />
                </Link>
                <div className="-mr-2">
                  <PopoverButton
                    className={`bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-[#6D2C95] hover:underline hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#6D2C95]`}
                  >
                    <span className="sr-only">Close main menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </PopoverButton>
                </div>
              </div>
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#6d2c95] hover:bg-gray-50"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <Link
                key={callToAction.name}
                to={callToAction.href}
                className="block px-3 py-2 bg-[#6d2c95] rounded-b-md text-center font-medium text-white hover:bg-[#6d2c95]/80"
              >
                {callToAction.name}
              </Link>
            </div>
          </PopoverPanel>
        </Transition>
      </Popover>
    </>
  );
};

export default Menu;
