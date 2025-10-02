import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <header>
      <nav className="border-1 border-solid bg-[#f3f4f1] p-3">
        <div className="flex justify-between">
          <div className="logo-container ml-5">
            <span className="logo">RideNow</span>
          </div>
          <div className="links-container w-md ml-18">
            <ul className="flex ml-10 gap-10">
              <li className="border border-orange-600 pl-1.5 pr-1.5 ">
                <Link href="">Home</Link>
              </li>
              <li className="border border-orange-600 pl-1.5 pr-1.5">
                <Link href="">About Us</Link>
              </li>
              <li className="border border-orange-600 pl-1.5 pr-1.5">
                <Link href="">Blogs</Link>
              </li>
            </ul>
          </div>
          <div className="mr-10">
            <Link href="">Sign In</Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
