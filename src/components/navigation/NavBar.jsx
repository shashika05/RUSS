// eslint-disable-next-line no-unused-vars
import React, {useState} from "react";
import {Link, NavLink} from "react-router-dom";
import {Bars3Icon, XMarkIcon} from "@heroicons/react/16/solid";
import {Dialog, DialogPanel} from "@headlessui/react";

export default function NavBar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const iconClickEvent = () => {
        setMobileMenuOpen(false);
    };

    return (
        <div>
            <nav className="h-auto w-full">
                <div className="flex justify-between mx-5">
                    <div className="content-center p-2">
                        <NavLink to="/" className="flex items-center">
                            <img className="h-8 md:h-12" src="src/assets/RUHREClogo.png"
                                 alt=""/>
                            <p className="text-2xl md:text-4xl font-bold text-[#6D2C95]">RUSREC</p>
                        </NavLink>
                    </div>
                    <div className="flex lg:hidden justify-end p-3">
                        <button
                            type="button"
                            className="-m-2 inline-flex items-center justify-center rounded-md p-2.5"
                            onClick={() => setMobileMenuOpen(true)}
                        >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon className="h-6 w-6 text-[#333333] hover:text-[#6D2C95]" aria-hidden="true"/>
                        </button>
                    </div>
                    <div className="hidden p-5 gap-5 lg:flex">
                        <Link to='/'
                              className='hover:text-[#6D2C95] focus:text-[#6D2C95] text-[#333333] font-bold'>Home</Link>
                        <Link to='/Symposia'
                              className='hover:text-[#6D2C95] focus:text-[#6D2C95] text-[#333333] font-bold'>Symposia</Link>
                        <Link to='/Gallery'
                              className='hover:text-[#6D2C95] focus:text-[#6D2C95] text-[#333333] font-bold'>Gallery</Link>
                        <Link to='/Team'
                              className='hover:text-[#6D2C95] focus:text-[#6D2C95] text-[#333333] font-bold'>Team</Link>
                    </div>
                </div>
            </nav>
            <Dialog className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-50 top-0"/>
                <DialogPanel className="fixed inset-y-0 right-0 z-50 w-1/2 md:w-1/4 bg-[#1A1919]">
                    <div className="flex items-center justify-between">
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6 text-slate-400 hover:text-[#6D2C95]" aria-hidden="true"/>
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="space-y-2 py-6 flex flex-col">
                            <Link
                                to="/"
                                className="mx-2 mb-1 text-center hover:text-[#6D2C95] focus:text-[#6D2C95] text-slate-400 font-bold"
                                onClick={iconClickEvent}
                            >
                                Home
                            </Link>
                            <Link
                                to="/Symposia"
                                className="mx-2 mb-1 text-center hover:text-[#6D2C95] focus:text-[#6D2C95] text-slate-400 font-bold"
                                onClick={iconClickEvent}
                            >
                                Symposia
                            </Link>
                            <Link
                                to="/Gallery"
                                className="mx-2 mb-1 text-center hover:text-[#6D2C95] focus:text-[#6D2C95] text-slate-400 font-bold"
                                onClick={iconClickEvent}
                            >
                                Gallery
                            </Link>
                            <Link
                                to="/Team"
                                className="mx-2 mb-1 text-center hover:text-[#6D2C95] focus:text-[#6D2C95] text-slate-400 font-bold"
                                onClick={iconClickEvent}
                            >
                                Team
                            </Link>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </div>
    )
}