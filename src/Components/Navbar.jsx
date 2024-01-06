// NavBar.js
import React, { useState } from 'react';
import { FaRegUser } from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
const NavBar = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    return (
        <nav className="py-1">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */ }
                <div className="text-black font-bold text-lg font-bold">pti.</div>

                {/* Search Bar */ }
                <div className='flex'>
                    <div className="flex items-center">
                        <input
                            type="text"
                            placeholder="Search"
                            className="bg-white w-44 lg:w-80 text-black px-4 py-2 rounded-md focus:outline-yellow-100"
                        />
                    </div>

                    {/* Dropdown Menu */ }
                    <div className="relative inline-block text-left  ">
                        <button
                            onClick={ toggleDropdown }
                            className="bg-white text-black font-semibold px-4 py-2 rounded ml-2 w-20 lg:w-36 flex items-center justify-between uppercase font-semibold"
                        >Menu
                            <span className="text-orange-500">
                                {
                                    isDropdownOpen ? <IoIosArrowDown /> : <IoIosArrowUp />
                                }
                            </span>
                        </button>
                        { isDropdownOpen && (
                            <div className="absolute z-50 mt-2 text-black font-semibold p-2 rounded-md bg-white w-36 ml-2">
                                {/* Dropdown content goes here */ }
                                <a href="#" className="block py-1 px-1 hover:bg-[#eeeff0] hover:text-orange-500" onClick={ toggleDropdown }>
                                    Home
                                </a>
                                <a href="#" className="block py-1 px-1 hover:bg-[#eeeff0] hover:text-orange-500" onClick={ toggleDropdown }>
                                    Details
                                </a>
                                <a href="#" className="block py-1 px-1 hover:bg-[#eeeff0] hover:text-orange-500" onClick={ toggleDropdown }>
                                    Category
                                </a>
                                <a href="#" className="block py-1 px-1 hover:bg-[#eeeff0] hover:text-orange-500" onClick={ toggleDropdown }>
                                    My Favourites
                                </a>
                                <a href="#" className="block py-1 px-1 hover:bg-[#eeeff0] hover:text-orange-500" onClick={ toggleDropdown }>
                                    Profile
                                </a>
                                <a href="#" className="block py-1 px-1 hover:bg-[#eeeff0] hover:text-orange-500" onClick={ toggleDropdown }>
                                    Login/Sign Up
                                </a>
                            </div>
                        ) }
                    </div>

                    {/* User Icon */ }

                </div>
                <div className="text-white bg-orange-500 p-2 rounded-full">
                    <FaRegUser />
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
