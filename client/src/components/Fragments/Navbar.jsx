import React, { useState } from 'react';
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="bg-white flex flex-row h-[50px] bg-gradient-to-r from-[#081C87] to-[#27B2DD] fixed top-0 w-full z-20 ">
        <p className="text-black py-[15px] px-[15px] mr-[275px]"><img className="size-5" src="../../../public/images/Logo.png" alt="" /></p>
        <button onClick={toggleMenu} className="block md:hidden"><p className="text-black p-[10px] "><img className="size-5 p-[3px] bg-white rounded" src="../../../public/images/Vector.png" alt="" /></p></button>
      </div>
      <div className={`${isOpen ? 'block' : 'hidden'} md:block w-[180px] h-[400px] bg-white ml-[195px] border-2 rounded-lg fixed z-20 `} >
        <nav className="w-[180px] h-[170px]">
          <ul className="flex flex-col">
            <li className="text-black text-base px-[40px] py-[30px] font-semibold mx-auto"><a href="#"> <img className="mt-7 mx-auto w-[90px] bg-gray-300 rounded-full" src="https://cdn1.iconfinder.com/data/icons/basic-ui-set-v5-user-outline/64/Account_profile_user_avatar_rounded-512.png" alt="" /></a></li>
            <li className="text-black text-base px-[25px] py-[10px] font-semibold"><Link to="/"> Dashboard </Link></li>
            {/* tambahkan link nya di to, sesuaikan dengan path yang sudah di atur di main.jsx */}
            <li className="text-black text-base px-[25px] py-[10px] font-semibold"><Link to="/searchMentor"> Search Mentors </Link></li>
            <li className="text-black text-base px-[25px] py-[10px] font-semibold"><Link to="/becomeAMentor"> Be a Mentor </Link></li>
            <li className="text-[#081C87] text-base px-[25px] py-[10px] font-semibold"><Link to="/loginUser"> Log In</Link></li>
          </ul>
        </nav>
      </div>
      <div className="mb-[50px]"></div>
      
    </>
  );
}

export default Navbar;