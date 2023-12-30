
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from 'react';

export default function Navbar() {
    const [IsDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!IsDropdownOpen);
    };

    return(
        <nav className="bg-gray-900 flex flex-grow justify-between items-center h-16 px-4 sm:px-6 lg:px-8">
             <span className="flex items-center text-white text-2xl ml-4 font-extralight hover:text-slate-200">
                <a href='#' className='ml-4'>Effatha Modelos</a>
            </span>
            <div className="md:hidden">
                <button onClick={toggleDropdown}>
                    <RxHamburgerMenu className="text-white" />
                </button>
            </div>
            {IsDropdownOpen && (
                <div className="bg-gray-700 text-white w-full fixed top-16 right-0 py-3 space-y-1 z-20 md:hidden">
                    <a href="/" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-600">Menu</a>
                    <a href="/about" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-600">Sobre</a>
                    <a href="/contact" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-600">Contato</a>
                    <a href="/curriculum" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-600">Produtos</a>
                </div>
            )}
            <div className="space-x-4 hidden md:flex">
                <a href="/" className="text-gray-300  md:hover:text-white px-3 py-2 rounded-md text-sm font-medium">Menu</a>
                <a href="/about" className="text-gray-300  md:hover:text-white px-3 py-2 rounded-md text-sm font-medium">Sobre</a>
                <a href="/contact" className="text-gray-300  md:hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contato</a>
                <a href="/curriculum" className="text-gray-300  md:hover:text-white px-3 py-2 rounded-md text-sm font-medium">Produtos</a>
            </div>
        </nav>
    );
}