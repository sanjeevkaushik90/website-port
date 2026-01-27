import { useState } from "react"
import { IoCloseCircleSharp, IoHome } from "react-icons/io5";
import { FaMobileAlt, FaLaptopCode, FaTv, FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";


export default function Navbar() {

    const [show, setshow] = useState(true)

    const changeValue = () => {

        setshow(!show)
    }

    const navMenu = [
        { name: 'Home', icon: <IoHome />, link: '/' },
        { name: 'Mobile', icon: <FaMobileAlt />, link: '/mobile' },
        { name: 'Laptop', icon: <FaLaptopCode />, link: '/laptop' },
        { name: 'TV', icon: <FaTv />, link: '/tv' },

    ]

    return (
        <header className="px-8 py-4 ">
            <nav className="flex items-center justify-between bg-blue-700 py-5 px-10 rounded-3xl shadow-2xl shadow-black ">

                {/* logo */}
                <div>

                    <h1 className="text-4xl font-extrabold text-white">CLOUD</h1>

                </div>

                {/* navbar list */}

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
                {/* auth */}
                <div className="hidden lg:flex items-center gap-3 text-lg">
                    <button className="bg-amber-500 rounded-2xl text-white p-2">Sign in</button>
                    <button className="bg-gray-700 text-white rounded-2xl  p-2">Sign up</button>
                </div>

                <div onClick={changeValue} className="lg:hidden">
                    {show ?   <ImCross /> : <FaBars />}
                </div>



            </nav>

            {/* Mobile Menu */}
            <div className="lg:hidden">
                {show && (
                    <div className="absolute top-24 left-0 right-0 mx-8 bg-blue-700 rounded-3xl shadow-2xl shadow-black z-50 py-6 px-8 animate-fade-in">
                        {/* Mobile Navigation Links */}
                        <ul className="flex flex-col items-center gap-4 text-white">
                            {navMenu.map(({ icon, name, link }, key) => (
                                <a
                                    key={key}
                                    href={link}
                                    className="w-full"
                                   
                                >
                                    <li className="flex items-center gap-3 hover:bg-orange-400 p-3 text-lg rounded-xl duration-300 w-full">
                                        <span className="text-xl">{icon}</span>
                                        <h3 className="font-medium">{name}</h3>
                                    </li>
                                </a>
                            ))}
                        </ul>

                        {/* Divider */}
                        <div className="my-6 border-t border-blue-500"></div>

                        {/* Mobile Auth Buttons */}
                        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
                            <button
                                className="bg-amber-500 hover:bg-amber-600 rounded-2xl text-white px-6 py-3 w-full sm:w-auto text-center transition-colors duration-300"
                               
                            >
                                Sign in
                            </button>
                            <button
                                className="bg-gray-700 hover:bg-gray-800 text-white rounded-2xl px-6 py-3 w-full sm:w-auto text-center transition-colors duration-300"
                                
                            >
                                Sign up
                            </button>
                        </div>

        
                    </div>
                )}
            </div>
        </header>
    )
}
