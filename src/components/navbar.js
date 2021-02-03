import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faBars, faBaby } from '@fortawesome/free-solid-svg-icons'

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
          sm:justify-around
          xs:w-full 
          xs:justify-around
          lg:w-6/12 md:text-white xs:text-red">
              <li>
                  Our Office
              </li>
              <li>
                  Services
              </li>
              <li>
                  Dr. Hulse
              </li>
              <li>
                  Contact Us
              </li>
          </ul>
        
      </nav>
    </>
  );
}