import React from 'react';
import BG from '../assets/bg_homepage.jpg';
import Logo from '../assets/logo.png';
import { HashLink } from 'react-router-hash-link';
import Swal from 'sweetalert2';

const Hero = () => {
  const gradientStylePink = {
    background: 'linear-gradient(135deg, #AD4FC5, #FF00A8)',
    WebkitBackgroundClip: 'text', // For Webkit browsers
    backgroundClip: 'text',
    color: 'transparent', // Make the text transparent
  };
  const gradientStyleBlue = {
    background: 'linear-gradient(135deg, #054B8C, #00B0E4)',
    WebkitBackgroundClip: 'text', // For Webkit browsers
    backgroundClip: 'text',
    color: 'transparent', // Make the text transparent
  };

  const handleCareersClick = () => {
    Swal.fire({
      icon: 'info', 
      title: 'No Vacancies',
      text: 'Sorry, there are no vacancies open currently. Please check back later.',
      confirmButtonText: 'OK',
      confirmButtonColor: '#000000',
    });
  };
  const handleSignInClick = () => {
    Swal.fire({
      icon: 'info', 
      title: 'Coming Soon',
      text: 'The sign in dashboard is coming soon. Please check back later.',
      confirmButtonText: 'OK',
      confirmButtonColor: '#000000',
    });
  };


  return (
    <div className="bg-white min-w-screen max-w-screen bg-cover bg-center bg-no-repeat h-screen flex items-center relative flex flex-col" style={{ backgroundImage: `url(${BG})`,}}>
      <img src={Logo} alt="Logo" className="absolute top-4 left-4 mt-6 ml-4 md:ml-10" style={{ width: '150px', height: 'auto' }} />
      
      <div className='lg:flex hidden absolute top-1 left-0 right-0 justify-center items-center h-[114px] text-white'>
        <ul className='md:text-xl flex space-x-10 text-sm text-black pb-4'>
          <li className='p-4'><HashLink smooth to='/#Subjects' > Subjects </HashLink></li>
          <li className='p-4'><HashLink smooth to='/#Process' > Process </HashLink></li>
          <li className='p-4'><a onClick={handleCareersClick}>Careers</a></li>
          <li className='p-4'><HashLink smooth to='/#Mission' > Company </HashLink></li>
        </ul>
      </div>

      <div className="absolute top-0 right-8 justify-center items-center h-[114px] text-white">
        <button className="mt-8 bg-white text-black md:border border-black font-semibold py-2 px-4 rounded-full hover:underline">
          <a onClick={handleSignInClick}>Sign In </a>
        </button>
        <button className=" ml-4 bg-black text-white border font-semibold py-2 px-4 rounded-full hover:underline">
        <HashLink smooth to='/#Contact' > Contact Us </HashLink>
        </button>
      </div>
        
      <div className="w-full h-full flex items-center justify-center md:justify-start md:pl-20 mb-20 md:mb-0">
        <div className="text-black text-center md:text-left">
          <p className="text-md md:text-xl mb-2 text-gray-818283">THE FUTURE EDUCATION FOR STUDENTS</p>
          <h1 className="text-4xl md:text-6xl font-bold">Bridge the gap</h1>
          <h1 className="text-4xl md:text-6xl font-bold">between <span style={gradientStylePink}>Students</span></h1>
          <h1 className="text-4xl md:text-6xl font-bold">and <span style={gradientStyleBlue}>Society</span></h1>
          <p className="text-md md:text-xl mt-4">Together with schools we teach students the subjects</p>
          <p className="text-md md:text-xl">they should have learned in traditional education</p> 
         
            <button className="mt-8 bg-black text-white border font-semibold py-2 px-4 rounded-full hover:underline">
            <HashLink smooth to='/#Contact' > Contact Us </HashLink>
          </button>
          <button className="mt-4 ml-2 bg-white text-black border border-black font-semibold py-2 px-4 rounded-full hover:underline">
            <HashLink smooth to='/#Subjects' > Learn More </HashLink>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
