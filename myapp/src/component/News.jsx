import React from 'react'
import { NewsLeft } from './NewsLeft'
import NewsRight from './NewsRight'

const News = ({setemail, setisLoading,email,isLoading}) => {
  return (
    <>
      <div className='flex flex-col-reverse md:flex-row md:w-[730px] md:inline-flex bg-white md:rounded-2xl p-4 '>
        <div className="md:w-[440px]"> <NewsLeft setemail={setemail} setisLoading={setisLoading} eamil={email} isLoading={isLoading} /></div>
        <div className="md:w-[260px]"> <NewsRight /></div>
      </div>   
    </>
  )
}

export default News