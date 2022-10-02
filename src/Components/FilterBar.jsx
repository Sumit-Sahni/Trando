import React from 'react'
import {GiUfo} from 'react-icons/gi'
import {GiHighGrass} from 'react-icons/gi'
import {BiHomeAlt} from 'react-icons/bi'
import {MdOutlineHomeWork} from 'react-icons/md'
import {FcHome} from 'react-icons/fc'
import {GiIsland} from 'react-icons/gi'
import {FaCaravan} from 'react-icons/fa'
import {IoSnowOutline} from 'react-icons/io5'
import {FaSwimmingPool} from 'react-icons/fa'
import {GiWaterfall} from 'react-icons/gi'
import {MdKitesurfing} from 'react-icons/md'
import {GiTreehouse} from 'react-icons/gi'
import {GiPalmTree} from 'react-icons/gi'
import {AiOutlineRightCircle} from 'react-icons/ai'
import {FiFilter} from 'react-icons/fi'




 const FilterBar = () => {
  return (
   <section className='w-full h-[60vh] lg:h-auto flex-col items-center sm:flex-col lg:flex-row relative top-[100px] flex justify-around py-6'>
       <div className=' flex w-3/5    md:w-96 lg:w-60 md:justify-between  items-center justify-between '>
          <div className='flex flex-col justify-center items-center py-1 w-10 lg:w-20 '>
             <GiUfo size={22}/>
             <h1 className='font-normal text-[12px] my-2 '>OMG!</h1>
             <hr className='w-8 border-black '></hr>
           </div>
           <div className='flex flex-col justify-center items-center py-1 w-10 lg:w-20'>
              <BiHomeAlt size={22}/>
              <h1 className='font-light text-[12px] my-2'>National Park</h1>
           </div>
           <div className='flex flex-col justify-center items-center py-1 w-10 lg:w-20'>
               <MdOutlineHomeWork size={22}/>
               <h1 className='font-light text-[12px] my-2'>Cabin</h1>
           </div>
           
       </div>
       

          <div className=' flex w-3/5  md:w-96  lg:w-60  md:justify-between  items-center justify-between '>
                <div className='flex flex-col justify-center items-center py-1 w-10 lg:w-20'>
                    <FcHome size={22}/>
                    <h1 className='font-light text-[12px] my-2'>Country Side</h1>
              </div>
              <div className='flex flex-col justify-center items-center py-1 w-10 lg:w-20'>
                   <GiIsland size={22}/>
                   <h1 className='font-light text-[12px] my-2'>Island</h1>
              </div>
              <div className='flex flex-col justify-center items-center py-1 w-10 lg:w-20'>
                    <FaCaravan size={22}/>
                    <h1 className='font-light text-[12px] my-2'>Campervans</h1>
              </div>
          </div>
        
         <div className=' flex w-3/5   md:w-96  lg:w-60  md:justify-between  items-center justify-between '>
             <div className='flex flex-col justify-center items-center py-1 w-10 lg:w-20'>
                <BiHomeAlt size={22}/>
                <h1 className='font-light text-[12px] my-2'>Tiny homes</h1>
            </div>
            <div className='flex flex-col justify-center items-center py-1 w-10 lg:w-20'>
                 <BiHomeAlt size={22}/>
                 <h1 className='font-light text-[12px] my-2'>Design</h1>
            </div>
            <div className='flex flex-col justify-center items-center py-1 w-10 lg:w-20'>
                  <IoSnowOutline size={22}/>
                  <h1 className='font-light text-[12px] my-2'>Artics</h1>
            </div>

         </div>

          <div className=' flex w-3/5    md:w-96  lg:w-60  md:justify-between  items-center justify-between '>
                <div className='flex flex-col justify-center items-center py-1 w-10 lg:w-20'>
                     <FaSwimmingPool size={22}/>
                     <h1 className='font-light text-[12px] my-2'>Amazing pools</h1>
              </div>
              <div className='flex flex-col justify-center items-center py-1 w-10 lg:w-20'>
                   <GiWaterfall size={22}/>
                   <h1 className='font-light text-[12px] my-2'>Lakefront</h1>
              </div>
              <div className='flex flex-col justify-center items-center py-1 w-10 lg:w-20'>
                     <MdKitesurfing size={22}/>
                     <h1 className='font-light text-[12px] my-2'>Surfing</h1>
              </div>
          </div>
       
          <div className=' flex w-3/5    md:w-96  lg:w-60  md:justify-between  items-center justify-between '>
               <div className='flex flex-col justify-center items-center py-1 w-10 lg:w-20'>
                  <GiTreehouse  size={22}/>
                  <h1 className='font-light text-[12px] my-2'>A-frame</h1>
             </div>
             <div className='flex flex-col justify-center items-center py-1 w-10 lg:w-20'>
                   <GiPalmTree size={22}/>
                   <h1 className='font-light text-[12px] my-2'>Treehouses</h1>
             </div>
             <div className='flex flex-col justify-center items-center py-1 w-10 lg:w-20'>
                <BiHomeAlt size={22}/>
                <h1 className='font-light text-[12px] my-2'>tropical</h1>
             </div>
          </div>
 
          <div className=' flex w-2/3 px-1  md:w-96 md:justify-between  lg:w-60   items-center justify-between '>
               <div className='flex flex-col justify-center items-center py-1 w-10 lg:w-20   '>
                    <BiHomeAlt size={22}/>
                    <h1 className='font-light text-[12px] my-2'>Bed</h1>
             </div>
             <div className='flex flex-col justify-center items-center py-1 w-10 lg:w-20 '>
                   <AiOutlineRightCircle size={22}/>
             </div>
               <div className='flex w-24 items-center p-4 border-gray-300 border-2 h-10 rounded-lg justify-between '>
                   <FiFilter/>
                   <h1>Filter</h1>
               </div>
          </div>
      
   </section>
  )
}


export default FilterBar;