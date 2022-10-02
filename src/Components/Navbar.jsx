import React from 'react'
import { useState } from 'react'
import {AiOutlineClose,AiOutlineMenu } from 'react-icons/ai'
import { HiOutlineSearch} from 'react-icons/hi'
import {BsGlobe} from 'react-icons/bs'
import {CgProfile} from 'react-icons/cg'
import {BiMenu} from 'react-icons/bi'
import Airbnb from "../photos/airbnb.png"

const Navbar = () => {

     const [nav, setNav] = useState(false)

     const handleNavbar = () =>{
        setNav(!nav)
     }
  return (
        <div className='w-screen h-[90px] py-5 z-10 bg-white fixed border-2 '>
          <div className='px-5 flex justify-between items-center w-full h-full'>
             <div className='flex items-center'>
              <div className='w-24'>
                 <img src={Airbnb} alt="airbnb"/>
              </div>
             </div>

              <div className='hidden md:flex text-black items-center  w-80 justify-between  px-4 py-1 rounded-full drop-shadow-2xl border-2 '>
                    <div className=' border-r-2 px-1'>
                       <h1>Anywhere</h1>
                    </div>
                    <div className=' border-r-2 px-1'>
                        <h1>Any week</h1>
                    </div>
                    <div>
                        <h1 className='font-light px-1'>Add guest</h1>
                    </div>
                    <div className='bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center'>
                       <HiOutlineSearch size={20}/>
                    </div>
              </div>
              <div className='hidden md:flex text-black items-center    w-64 justify-between p-2 rounded-full'>
                    <div>
                       <h1>Become a host</h1>
                    </div>
                           <BsGlobe size={20}/>
                    <div className='flex border-2 w-20 items-center rounded-full px-3 py-3 justify-between flex-row'>
                       <AiOutlineMenu/>
                       <CgProfile size={23}/>
                    </div>
                    <div>
                        <div>
                            
                        </div>
                    </div>
              </div>

              <div className='md:hidden' onClick={handleNavbar}>
                {!nav ? <AiOutlineClose size={30} className="cursor-pointer"/> :<AiOutlineMenu size={30} className="cursor-pointer"/> }
            
              </div>
          </div>
         
          <div className={nav ? "hidden" : "absolute bg-white w-full h-[100vh] px-8 md:hidden " }>

                 <div className='p-4 w-full text-2xl font-cba my-5 text-left'>
                       <h1>Anywhere</h1>
                    </div>
                    <div className='p-4 w-full text-2xl font-cba my-5 text-left'>
                    <h1>Any week</h1>
                    </div>
              
                    <div className='p-4 w-full text-2xl font-cba my-5 text-left flex items-center '>
                     <h1 className='font-light'>Add guest</h1>
                     <div className='bg-pink-500 text-white rounded-full w-8 h-8 flex items-center justify-center mx-8'>
                       <HiOutlineSearch size={20}/>
                    </div>
                    </div>

              </div>
        
        </div>
  )
}

export default Navbar;