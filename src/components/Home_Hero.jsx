import React from 'react';
import BG from '../assets/bg_homepage.png';
import Logo from '../assets/logo.png';
import { HashLink } from 'react-router-hash-link';


const Hero = () => {
    
    return (
      <div className=" min-w-screen max-w-screen bg-cover bg-center bg-no-repeat h-screen items-center relative flex flex-col" style={{ backgroundImage: `url(${BG})`,}}>
        <img src={Logo} alt="Logo" className="absolute top-4 left-4 mt-6 ml-4 md:ml-10" style={{ width: '60px', height: 'auto' }} />
        <div className='text-white'>
         <ul className='md:text-xl flex space-x-20 text-sm text-white pb-4'>
            <li className='p-4'><HashLink smooth to='/#Subjects' >Home</HashLink></li>
            <li className='p-4 mx-8'><HashLink smooth to='/#Process' >Behandelingen </HashLink></li>
            <li className='p-4'><HashLink smooth to='/#Process' >Tarieven</HashLink></li>
            <li className='p-4 mx-8'><HashLink smooth to='/#Mission' >Contact</HashLink></li>
          </ul>
        </div>
      </div>
    );
  };
  
  export default Hero;