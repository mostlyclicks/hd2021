import React, { useState } from "react";
import { Link } from 'gatsby';


export default function Navbar(props) {

  const [isExpanded, toggleExpansion] = useState(false)

  return (
    
    <nav
        className={
          (props.transparent
            ? "top-0 absolute z-50 w-full"
            : "relative shadow-lg bg-white shadow-lg") +
          " flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg"
        }
      >
      
      <div className="block lg:hidden">
        <button onClick={() => toggleExpansion(!isExpanded)} className="flex flex-end items-center px-3 py-2 border rounded text-white focus:outline-none">
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg> 
        </button>
      </div>
      <div className={`${ isExpanded ? `block` : `hidden` } w-full block flex-grow lg:flex lg:items-center `}>
        <div className="text-sm items-center mx-auto">
          <Link to="/" className="block mt-4 lg:inline-block lg:mt-0 text-white lg:p-4">
            Home
          </Link>
          <Link to="/our-office" href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 hover:text-white mr-4 text-white lg:p-4">
            Our Office
          </Link>
          <Link to="/services" className="block mt-4 lg:inline-block lg:mt-0 text-white mr-4 lg:p-4">
            Services
          </Link>
          <Link to="/our-team" className="block mt-4 lg:inline-block lg:mt-0 text-white lg:p-4">
            Our Team
          </Link>
          <Link to="/articles" className="block mt-4 lg:inline-block lg:mt-0 text-white lg:p-4">
            Articles
          </Link>
          <Link to="/contact-us" className="block mt-4 lg:inline-block lg:mt-0 text-white lg:p-4">
            Contact Us
          </Link>
          
        </div>
        
      </div>
    </nav>

  )
}