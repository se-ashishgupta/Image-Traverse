import React, { useState } from 'react';
import logo from "../assets/logo.svg";
import { Link } from 'react-router-dom';
import { BiMenuAltRight } from "react-icons/bi";
import { GrFormClose } from "react-icons/gr";

const Header = () => {

    const [openNav, setOpenNav] = useState(false);
    const [activeNav, setActiveNav] = useState(location.pathname);

    const navItem = [
        {
            title: "Home",
            path: "/"
        },
        {
            title: "Search",
            path: "/searchphoto"
        }
    ];

    const activeLinkHandler = (item) => {
        setOpenNav(false);
        setActiveNav(item.path);
    };

    return (
        <>
            {/* Desktop Navbar  */}
            <div className='fixed top-0 left-0 bg-white w-full h-[4rem] shadow-xl px-4 md:px-10 flex items-center z-20 justify-between overflow-x-hidden overflow-hidden'>

                {/* Logo  */}
                <Link to={"/"} className='flex items-center gap-2 animate-slideRight' onClick={() => setActiveNav("/")} >
                    <img src={logo} alt="logo" className='w-[1.5rem] sm:w-[2rem]' />
                    <h1 className='text-lg sm:text-2xl font-extrabold'>Image Traverse</h1>
                </Link>

                {/* Nav Item  */}
                <div className='hidden sm:flex items-center gap-3 md:gap-5'>
                    {
                        navItem.map((item, index) => (
                            <Link key={index} to={item.path} onClick={() => setActiveNav(item.path)} className={` text-2xl  ${activeNav == item.path ? "text-black font-extrabold" : "text-gray-600 font-semibold"}`} >{item.title}</Link>
                        ))
                    }

                </div>

                {/* Menu Icon  */}
                <figure className='text-4xl cursor-pointer sm:hidden  shadow-md p-1 rounded-lg' onClick={() => setOpenNav(!openNav)}>
                    {openNav ? <GrFormClose /> : <BiMenuAltRight />}
                </figure>

            </div>

            {/* Phone Navbar  */}
            <div className={`fixed top-0 right-0 w-full h-[25vh] bg-white z-10 pt-[5rem] p-6 ${openNav ? "" : "translate-y-[-100%]"} transition-all duration-300 flex flex-col gap-2`}>
                {
                    navItem.map((item, index) => (
                        <Link key={index} className={`text-2xl border-b-2 ${activeNav == item.path ? "text-black font-extrabold" : "text-gray-600 font-semibold"} `} to={item.path} onClick={() => activeLinkHandler(item)}>{item.title}</Link>
                    ))
                }
            </div>
        </>
    );
};

export default Header;;