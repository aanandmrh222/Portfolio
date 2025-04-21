"use client"

import { useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa"

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const links = [
    { id: 1, link: "Home" },
    { id: 2, link: "About" },
    { id: 3, link: "Skills" },
    { id: 4, link: "Projects" },
    { id: 5, link: "Certifications" },
    { id: 6, link: "Contact" },
  ]

  const handleClick = (link) => {
    const element = document.getElementById(link)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setNav(false)
  }

  return (
    <nav className="flex justify-between items-center w-full h-20 px-6 md:px-12 text-white bg-black fixed z-50">
      <div>
        <h1 className="text-4xl md:text-5xl font-signature ml-2">Aanand.dev</h1>
      </div>

      <ul className="hidden md:flex space-x-8">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="cursor-pointer capitalize font-medium text-gray-500 hover:text-white hover:scale-105 duration-200"
          >
            <button onClick={() => handleClick(link)}>{link}</button>
          </li>
        ))}
      </ul>

      <div onClick={() => setNav(!nav)} className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden">
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500 space-y-8">
          {links.map(({ id, link }) => (
            <li key={id} className="cursor-pointer capitalize py-4 text-4xl">
              <button onClick={() => handleClick(link)}>{link}</button>
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}

export default Navbar

