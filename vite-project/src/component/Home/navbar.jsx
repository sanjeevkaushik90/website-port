import { useState } from "react"
import { IoHome } from "react-icons/io5";
import { FaMobileAlt, FaLaptopCode, FaTv } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import { FaMicroblog } from "react-icons/fa6";
import { IoIosContact } from "react-icons/io";
import { FaBars } from "react-icons/fa";




export default function Navbar() {

    const navMenu = [
        { name: 'Home', icon: <IoHome />, link: '/' },
        { name: 'Mobile', icon: <FaMobileAlt />, link: '/mobile' },
        { name: 'Laptop', icon: <FaLaptopCode />, link: '/laptop' },
        { name: 'TV', icon: <FaTv />, link: '/tv' },

    ]

    return (
        <header className="px-8 py-4 ">
            <nav className="flex items-center justify-between bg-blue-700 py-5 px-10 rounded-3xl shadow-2xl shadow-black ">


                <div>

                    <h1 className="text-4xl font-extrabold text-white">CLOUD</h1>

                </div>



                <ul className="hidden lg:flex items-center gap-5 text-white">

                    {
                        navMenu.map(({ icon, name, link }, key) => (
                            <a key={key} href={link}>
                                <li className="flex items-center gap-2 hover:bg-orange-400 p-2 text-lg rounded-lg duration-500 ">
                                    {icon}
                                    <h3>{name}</h3>
                                </li>
                            </a>
                        ))
                    }


                </ul>

                <div className="hidden lg:flex items-center gap-3 text-lg">
                    <button className="bg-amber-500 rounded-2xl text-white p-2">Sign in</button>
                    <button className="bg-gray-700 text-white rounded-2xl  p-2">Sign up</button>
                </div>

                <div className="flex lg:hidden">
                    <FaBars />
                </div>
            </nav>
        </header>
    )
}
