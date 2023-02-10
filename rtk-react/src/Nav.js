import React from 'react'


export default function Nav() {

  return (
    <>
      <nav id="navbar" className="relative flex items-center justify-between px-2 py-2 bg-teal-500 mb-3">
        <div className="container sticky top-0 px-4 mx-auto flex items-center justify-between">
          <div className="flex items-center">
          <img 
              src="/images/dahlaklogo.png"
              alt=""
              width="90"
              height="20"
            /> 
          </div>
          <ul className="flex">
            <li className="nav-item">
              <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="#logo">
                <i className=" text-lg leading-lg text-black opacity-75"></i>
                <span className="ml-2">LOGO</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="#about">
                <i className=" text-lg leading-lg text-white opacity-75"></i>
                <span className="ml-2">ABOUT</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="#about">
                <i className=" text-lg leading-lg text-white opacity-75"></i>
                <span className="ml-2">Tech</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="#form">
                <i className=" text-lg leading-lg text-white opacity-75"></i>
                <span className="ml-2">FORM</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}


