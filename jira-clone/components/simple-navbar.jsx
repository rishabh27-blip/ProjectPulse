// components/simple-navbar.jsx
"use client";

import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { useState } from "react";

export default function SimpleNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-blue-600 text-xl font-bold">
              TaskFlow
            </Link>
            <div className="hidden md:flex md:ml-6 space-x-4">
              <Link href="/" className="px-3 py-2 text-gray-700 hover:text-blue-600">
                Dashboard
              </Link>
              <Link href="/projects" className="px-3 py-2 text-gray-700 hover:text-blue-600">
                Projects
              </Link>
              <Link href="/issues" className="px-3 py-2 text-gray-700 hover:text-blue-600">
                Issues
              </Link>
            </div>
          </div>
          
          <div className="flex items-center">
            <UserButton afterSignOutUrl="/" />
            <button 
              className="ml-4 md:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link 
              href="/" 
              className="block px-3 py-2 text-gray-700 hover:bg-gray-50"
              onClick={() => setMenuOpen(false)}
            >
              Dashboard
            </Link>
            <Link 
              href="/projects" 
              className="block px-3 py-2 text-gray-700 hover:bg-gray-50"
              onClick={() => setMenuOpen(false)}
            >
              Projects
            </Link>
            <Link 
              href="/issues" 
              className="block px-3 py-2 text-gray-700 hover:bg-gray-50"
              onClick={() => setMenuOpen(false)}
            >
              Issues
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}