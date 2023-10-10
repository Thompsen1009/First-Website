import React from 'react';
import MissionImage from '../assets/bg_mission.png'; // Import the mission image

const Mission = () => {
    const gradientStylePink = {
        background: 'linear-gradient(45deg, #FFFFFF, #F69BF4, #FFFFFF)',
        WebkitBackgroundClip: 'text', // For Webkit browsers
        backgroundClip: 'text',
        color: 'transparent', // Make the text transparent
      };

  return (
    <div id= 'Mission' className="bg-white min-w-screen max-w-screen bg-cover bg-center bg-no-repeat h-[400px] flex items-center justify-center relative" style={{ backgroundImage: `url(${MissionImage})`,}}>
        <div className='max-w-screen-xl mx-auto py-20 px-4 text-center'>
        <p className='text-white text-2xl md:text-3xl' style={gradientStylePink}>
            “Our primary mission is to better prepare students for their
        </p>
        <p className='text-white text-2xl md:text-3xl mt-2' style={gradientStylePink}>
            transition into society, addressing the critical skills they
        </p>
        <p className='text-white text-2xl md:text-3xl mt-2' style={gradientStylePink}>
            often don't acquire in traditional educational settings.”
        </p>
      </div>
    </div>
  );
};

export default Mission;
