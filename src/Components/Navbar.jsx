import { HiBars2 } from "react-icons/hi2";
import { HiMiniXMark } from "react-icons/hi2";
import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import '../index.css'
import Button from "./Button";

import { useState } from "react";

const Navbar = ({isDarkModeActive , setIsDarkModeActive}) => {

    const [navLinkActive , setNavLinkActive] = useState(false);

    return (
        <nav className="relative flex border-b-[0.5px] border-[var(--lightBorder)] items-center h-[var(--navbarHeight)] justify-between dark:bg-[var(--darkBackground)] dark:text-[var(--lightColor)] dark:border-[var(--darkBorder)]">
            {/* Nav Logo  */}
            <div className="pl-3 font-medium text-[1.5rem] cursor-pointer flex items-center gap-1">
                <img src="/logo2.png" alt="traskify logo image" className="rounded-ipad h-9" />
                Taskify
            </div>


            {/* Nav Links */}
            <div className="flex gap-6">
                <div className={`${
                navLinkActive ? "" : "hidden"
                } ipad:flex ipad:relative ipad:top-0 ipad:flex-row ipad:items-center ipad:shadow-none ipad:px-0 ipad:py-0 absolute top-[var(--navbarHeight)] py-10 w-full shadow-ipad px-3 dark:bg-[var(--darkBackground)] bg-[var(--lightBackground)] ipad:bg-transparent dark:text-[var(--lightColor)] dark:shadow-slate-800 ipad:w-fit left-0`}>
                <ul className="flex flex-col gap-5 ipad:flex-row ipad:items-center">
                    <div className="flex flex-col gap-3 mb-3 ipad:mb-0 ipad:flex-row ipad:items-center ipad:gap-6">
                        <li className="cursor-pointer text-lg hover:text-slate-600 dark:hover:text-gray-300 ipad:text-[0.9rem]">Home</li>
                        <li className="cursor-pointer text-lg hover:text-slate-600 dark:hover:text-gray-300 ipad:text-[0.9rem]">About</li>
                        <li className="cursor-pointer text-lg hover:text-slate-600 dark:hover:text-gray-300 ipad:text-[0.9rem]">Use Cases</li>
                    </div>
                    <Button
                        buttonValue="Login"
                        buttonColor="var(--blueColor)"
                        buttonHeight="2.1rem"
                        buttonWidth="6.5rem"
                        // classButton="bg-gradient-to-r from-[var(--gradientStart)] to-[var(--gradientEnd)]"
                        classButton="text-sm"
                    />
                </ul>
                </div>


                <div className="flex items-center pr-5 gap-2">
                    <div>
                        {
                            isDarkModeActive != true 
                            ?
                            <MdOutlineDarkMode  className="cursor-pointer text-2xl" onClick={() => {
                                localStorage.setItem("isDarkMode" , true);
                                setIsDarkModeActive(true);
                            }}/> 
                            :
                            <MdOutlineLightMode  className="cursor-pointer text-2xl" onClick={() => {
                                localStorage.setItem("isDarkMode" , false);
                                setIsDarkModeActive(false);
                            }}/>
                        }
                    </div>

                    <div>
                        {
                            navLinkActive ?
                            <HiMiniXMark  className="cursor-pointer text-3xl ipad:hidden" onClick={() => setNavLinkActive(!navLinkActive)}/> :
                            <HiBars2 className="cursor-pointer text-3xl ipad:hidden" onClick={() => setNavLinkActive(!navLinkActive)}/>
                        }
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;