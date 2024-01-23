import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <header className='flex justify-between items-center sm:px-16 px-8 py-4 max-w-5xl mx-auto absolute top-0 bg-transparent z-10 right-0 left-0'>
      <NavLink to='/' className='w-10 h-10 rounded-lg bg-[#451162] flex items-center justify-center font-bold shadow-md'>
        <p className='bg-gradient-to-r from-[#E205FF] to-[#59144f] bg-clip-text text-transparent'>JS</p>
      </NavLink>
      <nav className='flex text-lg gap-7 font-medium'>
      <NavLink to='/about' className={({ isActive }) => isActive ? 'text-[#E205FF]' : 'text-slate-100'}>
        About
      </NavLink>
      <NavLink to='/projects' className={({ isActive }) => isActive ? 'text-[#E205FF]' : 'text-slate-100'}>
        Projects
      </NavLink>
      </nav>
    </header>
  )
}

export default Nav