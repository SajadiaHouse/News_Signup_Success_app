import React from 'react'

export const NewsLeft = () => {
  return (
    <>
        <div className='p-6'>
          <h1 className='text-3xl font-bold'>Stay updated!</h1>
          <p className='my-3'>Join 60,000+ product manageer receiving monthly updates on:</p>

          <ul>
            <li className='inline-flex'><img src="./images/icon-success.svg" className='w-4 h-4 mr-2 my-2 self-center' alt="" /><span>Product discovery and building what matters</span></li>
            <li className='inline-flex'><img src="./images/icon-success.svg" className='w-4 h-4 mr-2 my-2 self-center' alt="" /><span>Measuring to ensure updates are a suceess</span></li>
            <li className='inline-flex'><img src="./images/icon-success.svg" className='w-4 h-4 mr-2 my-2 self-center' alt="" /><span>And much more!</span></li>
          </ul>
          <div className='mt-6'>
            <label htmlFor="">Email Addrss</label>
            <input type="email" className='w-full p-2.5 border border-slate-600 text-black' />
          </div>
          <button className='text-white bg-blue-950 font-semibold my-4 p-3 rounded-md w-full'>Subscribe to monthly newsletter</button>
        </div>
    </>
  )
}
