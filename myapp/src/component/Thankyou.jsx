import React from 'react'

const Thankyou = ({email}) => {
  return (
    <>
        <div className='flex flex-col rounded-xl bg-white p-8 w-[330px] h-auto'>
            <img src="./images/icon-success.svg" className='w-12 h-12 mb-3' alt="" />
            <p className='text-4xl tracking-wider font-bold'> Thanks for subscribing!</p>
            <p className='text-xs my-4'>A Confirmation email has been sent to <b>{email}</b> Please open it and click the button inside to confirm your subscription</p>
            <button className='bg-blue-950 text-white rounded-md p-3 w-full'>Dissmiss message</button>
        </div>
    </>
  )
}

export default Thankyou