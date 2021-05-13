import React from "react";
import { Link } from 'gatsby';

export default function Navbar(props) {

  const [navbarOpen, setNavbarOpen] = React.useState(false);

  return (
    <>
      <nav
        className={
          (props.transparent
            ? "top-0 absolute z-50 w-full"
            : "relative shadow-lg bg-white shadow-lg") +
          " flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg"
        }
      >
          <ul 
          className="
            text-white 
            flex 
            m-auto 
            mt-6 
            w-full 
            justify-around
            lg:w-6/12 md:text-white text-sm md:text-base
          ">
              <li>
                  <Link to="/our-office">Our Office</Link>
              </li>
              <li>
                  <Link to="/services">Services</Link>
              </li>
              <li>
                  <Link to="/our-team">Our Team</Link>
              </li>
              <li>
                  <a href="/articles">Articles</a>
              </li>
              <li>
                  <Link to="/contact-us">Contact Us</Link>
              </li>
          </ul>
        
      </nav>
    </>
  );
}