import React from 'react';
import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'
import { HashLink } from 'react-router-hash-link';

const Abbos = () => {
  return (
    <div className='mx-auto w-full bg-white'>
                <h1 className='text-4xl py-16 font-bold text-center text-black'>Pricing Lesmodules</h1>
    <div id = 'Abbos' className='w-full px-4 py-8 bg-white'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Single} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>1 persoon</h2>
              <p className='text-center text-4xl font-bold'>€424.99 pp</p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>Voor studenten</p>
                  <p className='py-2 border-b mx-8'>12 lessen in groep van 4</p>
                  <p className='py-2 border-b mx-8'>6 modules, 20 opdrachten</p>
                  <p className='py-2 border-b mx-8'>Wekelijks 1 online les van 1.5 uur</p>
              </div>
              <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'><HashLink smooth to='/support/#Contact' >Start</HashLink></button>
          </div>
          <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={Double} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Samen met een vriend(in)</h2>
              <p className='text-center text-4xl font-bold'>€394.99 pp</p>
              <div className='text-center font-medium'>
              <p className='py-2 border-b mx-8 mt-8'>Voor studenten</p>
                  <p className='py-2 border-b mx-8'>12 lessen in groep van 4</p>
                  <p className='py-2 border-b mx-8'>6 modules, 20 opdrachten</p>
                  <p className='py-2 border-b mx-8'>Wekelijks 1 online les van 1.5 uur</p>
              </div>
              <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'><HashLink smooth to='/support/#Contact' >Start</HashLink></button>
          </div>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Triple} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Met een klas of leerjaar</h2>
              <p className='text-center text-4xl font-bold'>€Bespreekbaar</p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>Voor scholen</p>
                  <p className='py-2 border-b mx-8'>Stof voor een half of heel jaar</p>
                  <p className='py-2 border-b mx-8'>Modules en opdrachten naar wens</p>
                  <p className='py-2 border-b mx-8'>Vormgeving naar wens</p>
              </div>
              <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'><HashLink smooth to='/support/#Contact' >Meer info</HashLink></button>
          </div>
      </div>
    </div>
    </div>
  );
};

export default Abbos;