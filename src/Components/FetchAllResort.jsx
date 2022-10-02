import React from 'react'
import axios from 'axios'
import { useEffect, useState} from 'react' 
import {MdStar} from 'react-icons/md'
import {AiOutlineSmallDash} from 'react-icons/ai'
import {FaHeart} from 'react-icons/fa'


const FetchAllResort = () => {

  const [resort, setResort] = useState([])
 
  useEffect(()=>{
          const getData = async()=>{
            const store = await axios.get("https://sumit-sahni.github.io/Resort/data.json")
            console.log(store.data.data)
            setResort(store.data.data)
          }
          getData();      
  },[])
  return (
    <>
        <div className='w-full  grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 lg:p-12   py-6 gap-x-12'>
             
             {
               resort.map((item, index)=>{
                    return(
                       <div key={index} className='w-80 md:w-80 lg:w-72  h-auto rounded border-b-2 border-black-900 my-2 mx-auto flex flex-col'>
                              <div className='relative'>
                                <div className='absolute right-4 top-4 ' >
                                   <FaHeart className='text-slate-500' size={20} ></FaHeart>
                                   <div className='right-[7rem] top-[135px] absolute text-white' >
                                     <AiOutlineSmallDash size={50}/>
                                   </div>
                                 
                                </div>
                                  <img className='w-full h-48 rounded-xl' src={item.image} alt="name" />
                              </div>
                              <div className='p-2'>
                                   <div className='py-2 text-[12px] flex justify-between'>
                                       <div className='font-bold'>
                                         <h1>{item.name}</h1>
                                       </div>
                                      
                                       <div className=' flex items-center '>
                                        <MdStar/>
                                         <h1 className='mx-2'>4.3</h1>
                                      </div> 
                                    </div>

                                    <div className='w-full text-[12px]'>
                                      <div>
                                        <h1>{item.km} Kilometer</h1>
                                        <h1>8-9 Oct</h1>
                                        <h1 className='font-bold'>₹{item.price}<span className='mx-1  font-normal'>night</span></h1>
                                      </div>
                                       
                                   </div>
                                 
                              </div>
                              <div>
                                 
                              </div>
                       </div>
                    )
               })
             }
     </div>

    </>
  )
}


export  default FetchAllResort;