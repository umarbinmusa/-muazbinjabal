import React from 'react'
//import { Link } from 'react-router-dom';


 function NavBar() {
  return (
    <div className=''>
    <nav className="flex items-center justify-between mt-6 ">
    <div className="pt-2 font-bold ml-2.5 ">
    <img src="./images/logo.png"alt='' className="w-15  h-"/>
      
            </div>
          
        <ul className=" md:flex space-x-16 mt-2 font-bold">
            <li className="hover:text-green-400">Home</li>
            <li className="hover:text-green-400">About</li>
            <li className="hover:text-green-400">Contact</li>
            <li className="hover:text-green-400">Mission</li>
            <li className="hover:text-green-400">Services</li>
            <li className="hover:text-green-400">Update</li>
           
            
        </ul>
        
        <a href="get started" className=" hidden md:block p-3 px-6 pt-2 text-white rounded-full baseline hover: bg-black">
            E-Learning
        </a>
    </nav>
    </div>
        
  );
}
export default NavBar;