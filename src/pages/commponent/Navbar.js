import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"

const NavbarSc = () => {
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false)

  const goToLogin = () => {
    navigate("/Login")
  }

  return (
    <nav className="bg-white border-gray-200 fixed w-full z-50 shadow-sm">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        
        {/* Logo */}
        <span className="text-2xl font-semibold">SlyBuild</span>

        {/* Right Side */}
        <div className="flex items-center gap-3 md:order-2">
          
          {/* Login Button */}
          <button
            onClick={goToLogin}
            className="text-white bg-blue-700 hover:bg-blue-800 rounded-lg text-sm px-4 py-2 transition"
          >
            Login
          </button>

          {/* Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Menu */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } w-full md:flex md:w-auto md:items-center md:order-1`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-8 mt-4 md:mt-0 p-4 md:p-0 bg-gray-50 md:bg-transparent rounded-lg">
            
            <li>
              <a href="#" className="block py-2 text-blue-700 font-medium">
                Home
              </a>
            </li>

            <li>
              <a href="#" className="block py-2 text-gray-700 hover:text-blue-700">
                About
              </a>
            </li>

            <li>
              <a href="#" className="block py-2 text-gray-700 hover:text-blue-700">
                Services
              </a>
            </li>

            <li>
              <a href="#" className="block py-2 text-gray-700 hover:text-blue-700">
                Contact
              </a>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  )
}

export default NavbarSc