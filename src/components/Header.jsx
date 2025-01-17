import React, { useState } from 'react'
import logo from '../assets/swiggy_logo.png'
import { MdKeyboardArrowDown } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { BiSolidOffer } from "react-icons/bi";
import { IoIosHelpBuoy } from "react-icons/io";
import { FaRegUser } from "react-icons/fa6";
import { FiShoppingCart } from "react-icons/fi";

function Header() {

    const [showSearch, setShowsearch] = useState(false)


    function searchSection() {
        setShowsearch(true)
    }




    const links = [
        {
            icon: <CiSearch />,
            name: "Search"
        },
        {
            icon: <BiSolidOffer />,
            name: "Offers",
            sup: "NEW"
        },
        {
            icon: <IoIosHelpBuoy />,
            name: "Help"
        },
        {
            icon: <FaRegUser />,
            name: "Sign In",

        },
        {
            icon: <FiShoppingCart />,
            name: "Cart",
            sup: "0"
        }
    ]


    return (
        <>
            {
                showSearch && (
                    <div onClick={() => setShowsearch(false)} className="black-overlay fixed     z-50  duration-500 ease-in-out "
                        style={{
                            opacity: showSearch ? "1" : "0",
                            visibility: showSearch ? "visible" : "hidden"
                        }}
                    >
                        <div onClick={(e) => e.stopPropagation()} className='w-[500px] h-full bg-white absolute duration-[400ms]'
                            style={{
                                left: showSearch ? '0%' : "-100%"
                            }}
                        >
                            <input type="text" placeholder='Search here...' />
                        </div>
                    </div >
                )
            }





            <header className='header w-full min-h-[75px] sticky top-0 bg-white shadow-md px-20  flex items-center justify-between'>
                <div className='flex'>
                    <div className='cursor-pointer w-[70px]'>
                        <a href="/"><img src={logo} alt="logo" className='w-[50px]  transition-transform duration-300 transform hover:scale-110' /></a>
                    </div>
                    <div onClick={searchSection} className=' flex items-center gap-3 text-lg'>
                        <p className='cursor-pointer underline'>Other</p>
                        <MdKeyboardArrowDown className='cursor-pointer  text-orange-500' />
                    </div>
                </div>
                <div className='flex font-semibold text-[18px] list-none gap-10 items-center   '>
                    {
                        links.map((link, index) => {
                            return (
                                <li key={index} className='flex gap-2 cursor-pointer hover:text-[#fc8019] items-center'>
                                    {link.icon}
                                    {link.name}
                                    <sup className='text-orange-500'>{link.sup}</sup>
                                </li>
                            )
                        })
                    }
                </div>
            </header>
        </>
    )
}

export default Header
