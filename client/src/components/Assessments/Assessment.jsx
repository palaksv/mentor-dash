import React from 'react';
import { assessments } from './dummydata.js';

export default function Assessment() {
  return (
   <>
      <section className='online text-center'>
        <div className='container'>
        <div id='heading'>
        <h2>ASSESSMENTS </h2>
        <h1 className='font-medium text-xl leading-[30px] mx-0 my-5'>Take our assessments to know your score </h1>
      </div>
          <div className='content grid3  grid grid-cols-[repeat(3,1fr)] gap-2.5 '>
            {assessments.map((val) => (
              <div className='box  flex flex-col shadow-[0_5px_25px_-2px_rgb(0_0_0_/_6%)] bg-white transition-[0.5s] px-5 py-[30px] hover:bg-[#1eb2a6] cursor-pointer rounded-[5px] flex-1'>
                <div className='img w-20 h-20 relative m-auto'>
                  <img src={val.cover} className=' w-full h-full object-cover '/>
                  <img src={val.hoverCover} alt='' className='show opacity-0  w-full h-full object-cover hover:opacity-100 absolute left-0 top-0' />
                </div>
                <h1 className='font-medium text-xl leading-[30px] mx-0 my-5 hover:text-white'>{val.courseName}</h1>
                <span className='bg-[#f8f8f8] font-medium text-[15px] text-[#1eb2a6] px-5 py-[5px] rounded-[5px]'>{val.course}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
   </>
  )
}
