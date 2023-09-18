import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <div className='w-screen flex justify-center md:justify-end pl-5 pr-5'>
        <ul className='w-screen md:w-auto flex justify-between pt-5 md:pr-10'>
            <li className='text-gray-600 md:ml-10 text-sm'><Link to="https://mkandan1.medium.com/" target='_blank'>Blog</Link></li>
            {/* <li className='text-gray-600 md:ml-10 text-sm'><Link to="/projects">Projects</Link></li> */}
            <li className='text-gray-600 md:ml-10 text-sm'><Link to="https://www.linkedin.com/in/mkandan1" target='_blank'>LinkedIn</Link></li>
            <li className='text-gray-600 md:ml-10 text-sm'><Link to="https://www.github.com/mkandan1" target='_blank'>GitHub</Link></li>
            <li className='text-gray-600 md:ml-10 text-sm'><Link to="https://www.instagram.com/__.manii_" target='_blank'>Instagram</Link></li>
        </ul>
    </div>
  )
}
