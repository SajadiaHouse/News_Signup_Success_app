import React from 'react'
import { NewsLeft } from './NewsLeft'
import NewsRight from './NewsRight'

const News = () => {
  return (
    <>
    <div className='flex bg-blue-950  justify-center items-center h-screen'>
      <div className='w-[750px] inline-flex bg-white rounded-2xl p-4 '>
        <div className="w-[440px]"> <NewsLeft /></div>
        <div className="w-[260px]"> <NewsRight /></div>
      </div>
    </div>
   
   
    </>
  )
}

export default News