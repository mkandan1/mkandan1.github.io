import React, { useState } from 'react';
import { Header } from '../components/Header';
import manikandan from '../assets/manikandan.jpg'
import { Link } from 'react-router-dom';
import { Footer } from '../components/Footer';

export const Home = () => {
  const [topSkills, setTopSkills] = useState(['JavaScript', 'ReactJs', 'Express', 'Firebase'])
  return (
    <>
      <Header />

      <div className='w-screen pl-5 md:w-7/12 xl:w-2/5 md:pl-32 mt-36 flex items-center'>
        <div className='flex flex-col justify-start'>
          <div className='w-12'>
            <img src={manikandan} className='rounded-full' alt='manikandan p' />
          </div>
          <div className='grid gap-3 mt-3'>
            <h1 className='text-lg'>I'm Manikandan</h1>
            <p className='text-gray-700 w-11/12'>Full stack developer who develops dynamic websites.
              I am having strong foundation level experience in MERN Stack development. </p>
            <p className='text-gray-700'>Currently working <Link className='text-gray-100' target='_blank' to='https://www.github.com/mkandan1/reso'>Reso ERP Application ⚡</Link></p>
          </div>
          <div className='mt-5 w-11/12'>
            <h2>Top skills</h2>
            <div className='flex flex-wrap text-gray-600 mt-2'>
              {
                topSkills.map((skill, i) => {
                  return (
                    <>
                      <p key={i}>{skill}</p>
                      {i < topSkills.length - 1 ?
                        <p className='ml-1 mr-2'>·</p>
                        : <></>}
                    </>
                  )
                })
              }
            </div>
          </div>
          <div className='mt-10'>
            <Link to='mailto:maniusualsecrets@gmail.com' title='maniusualsecrets@gmail.com' className='bg-white text-black pl-10 pr-10 p-2 rounded-full tracking-tighter font-medium'>Say Hello</Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
