'use client';

import Link from 'next/link';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = ['Store', 'Mac', 'iPad', 'iPhone', 'Watch', 'Vision', 'AirPods', 'TV & Home', 'Entertainment', 'Accessories', 'Support'];

  return (
    <nav className="fixed w-full z-50 bg-[#1d1d1f]/90 backdrop-blur-md text-[#f5f5f7] h-11 transition-all duration-300 font-sans">
      <div className="max-w-[1024px] mx-auto px-4 h-full flex items-center justify-between text-xs font-light tracking-wide">
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
        </div>

        {/* Logo */}
        <Link href="/" className="hover:opacity-100 opacity-80 transition-opacity absolute left-1/2 transform -translate-x-1/2 md:static md:transform-none md:left-auto">
             <span className="font-semibold text-lg tracking-tight">Xiyar</span>
        </Link>
        
        {/* Desktop Links */}
        <div className="hidden md:flex items-center justify-between w-full ml-8">
            {links.map((item) => (
                <Link key={item} href="/" className="hover:opacity-100 opacity-80 transition-opacity whitespace-nowrap">
                    {item}
                </Link>
            ))}
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-8 ml-8 hover:opacity-100 opacity-80 transition-opacity absolute right-4 md:static">
            <Search size={14} className="cursor-pointer" />
            <ShoppingBag size={14} className="cursor-pointer" />
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
          <div className="fixed inset-0 top-11 bg-black z-40 flex flex-col px-10 py-4 space-y-4 md:hidden h-screen">
              {links.map((item) => (
                  <Link key={item} href="/" className="text-2xl font-semibold text-[#f5f5f7] py-2 border-b border-gray-800">
                      {item}
                  </Link>
              ))}
          </div>
      )}
    </nav>
  );
};

export default Navbar;
