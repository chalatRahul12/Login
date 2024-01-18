import React from 'react'
import ButtonComponent from './Button'
import { useNavigate } from 'react-router-dom'

function Navbar() {
    const navigate = useNavigate()
    function nav() {
        localStorage.clear()
        navigate('/')

    }
    return (
        <nav className='flex items-center justify-between p-[20px]'>
            <h1 className='text-3xl text-black tracking-widest'>DashBoard</h1>
            <ul className='flex items-center gap-[10px]  '>
                <li className='text-l font-bold tracking-wide cursor-pointer' onClick={()=>navigate('/about') } >About</li>
                <li className='text-l font-bold tracking-wide cursor-pointer' onClick={() => navigate('/contact')}>Contact</li>
                <li className='text-l font-bold tracking-wide cursor-pointer' onClick={() => navigate('/service')}>Service</li>
                <ButtonComponent func={ nav} text='Sign Out' />
                
                </ul>
            </nav>
        )
}

export default Navbar;