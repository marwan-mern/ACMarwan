import React from 'react'
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <div>
            <nav className="bg-white px-2 sm:px-4  dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
                <div className="container flex flex-row items-center justify-around mx-auto">
                    <Link to={`/`} className="flex items-center">
                        <img alt='Air-Cairo-logo' src='./air-cairo.png' className="h-6 mr-3 sm:h-9 " />
                    </Link>
                    <div className="items-center justify-between mt-4 w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                        <ul className="flex flex-row   border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <button className="relative inline-flex items-center justify-center p-0.5  mr-2 mb-3 text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-[#470d67] to-[#fd8503] group-hover:from-[#fd8503] group-hover:to-[#470d67] hover:text-white dark:text-white ">
                                    <span className="relative px-2 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                        <Link to={`/`}>Line Training Form </Link>
                                    </span>
                                </button>
                            </li>
                            <li>
                                <button className="relative inline-flex items-center justify-center p-0.5  mr-2 mb-3 text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-[#470d67] to-[#fd8503] group-hover:from-[#fd8503] group-hover:to-[#470d67] hover:text-white dark:text-white ">
                                    <span className="relative px-2 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                        <Link to={`/Details`}>Flight Details</Link>
                                    </span>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Navbar
