import { HiBars2 } from "react-icons/hi2";
import { HiMiniXMark } from "react-icons/hi2";
import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import '../index.css'
import Button from "./Button";
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import { useState } from "react";
import { motion } from "framer-motion";

const Navbar = ({isDarkModeActive , setIsDarkModeActive}) => {

    const [navLinkActive , setNavLinkActive] = useState(false);

    return (
        <nav className=" px-4 fixed w-full desktop:max-w-[var(--maxWidth)] ipad:w-full laptop:w-full flex border-b-[0.5px] border-[var(--lightBorder)] items-center h-[var(--navbarHeight)] justify-between dark:bg-[var(--darkBackground)] dark:text-[var(--lightColor)] dark:border-[var(--darkBorder)]">
            {/* Nav Logo  */}
            <div className="font-medium text-[1.5rem] cursor-pointer flex items-center gap-1">
                <img src="/logo.png" alt="taskify logo image" className="rounded-ipad h-11" />
                Taskify
            </div>


            {/* Nav Links */}
            <div className="flex gap-6">
                <motion.div
                className={`${
                navLinkActive ? "" : "hidden"
                } ipad:flex ipad:relative ipad:top-0 ipad:flex-row ipad:items-center ipad:shadow-none ipad:px-0 ipad:py-0 absolute top-[var(--navbarHeight)]  py-10 w-full shadow-ipad px-5 dark:bg-[var(--darkBackground)] bg-[var(--lightBackground)] ipad:bg-transparent dark:text-[var(--lightColor)] dark:shadow-slate-800 ipad:w-fit left-0`}>
                <ul className="flex flex-col gap-5 ipad:flex-row ipad:items-center">
                    <div className="flex flex-col gap-3 mb-3 ipad:mb-0 ipad:flex-row ipad:items-center ipad:gap-6">
                        <ScrollLink to="/" smooth={true} duration={100}>
                            <li className="cursor-pointer text-lg hover:text-slate-600 dark:hover:text-gray-300 ipad:text-[0.9rem]" onClick={() => setTimeout(() => {
                                setNavLinkActive(false)
                            }, 100)}>Home</li>
                        </ScrollLink>
                        <ScrollLink to="whyussection" smooth={true} duration={100}>
                            <li className="cursor-pointer text-lg hover:text-slate-600 dark:hover:text-gray-300 ipad:text-[0.9rem]" onClick={() => setTimeout(() => {
                                setNavLinkActive(false)
                            }, 100)}>About</li>
                        </ScrollLink>
                        <ScrollLink to="howitworkssection" smooth={true} duration={100}>
                            <li className="cursor-pointer text-lg hover:text-slate-600 dark:hover:text-gray-300 ipad:text-[0.9rem]" onClick={() => setTimeout(() => {
                                setNavLinkActive(false)
                            }, 100)}>How It Works</li>
                        </ScrollLink>
                    </div>
                        <Button
                            buttonValue="Login"
                            buttonColor="var(--blueColor)"
                            buttonHeight="2.1rem"
                            buttonWidth="6.5rem"
                            classButton="text-sm"
                            rounded="3px"
                        />
                </ul>
                </motion.div>


                <div className="flex items-center gap-2">
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