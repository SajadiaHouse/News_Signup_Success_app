import React from 'react'

export const NewsLeft = ({setemail, setisLoading,email,isLoading}) => {
  const handleclick=(e)=>{
    e.preventDefault();
   setisLoading(!isLoading);

  }
  return (
    <>
        <div className='p-6'>
          <h1 className='text-3xl font-bold'>Stay updated!</h1>
          <p className='my-3'>Join 60,000+ product manageer receiving monthly updates on:</p>

          <ul>
            <li className='inline-flex '><img src="./images/icon-success.svg" className='w-4 h-4 mr-2 my-2 self-center' alt="" /><span className='self-center'>Product discovery and building what matters</span></li>
            <li className='inline-flex '><img src="./images/icon-success.svg" className='w-4 h-4 mr-2 my-2 self-center' alt="" /><span className='self-center'>Measuring to ensure updates are a suceess</span></li>
            <li className='inline-flex '><img src="./images/icon-success.svg" className='w-4 h-4 mr-2 my-2 self-center' alt="" /><span className='self-center'>And much more!</span></li>
          </ul>
          <div className='mt-6'>
            <label htmlFor="">Email Addrss</label>
            <input type="email" value={email} onChange={e=>setemail(e.target.value)} className='w-full p-2.5 border border-slate-600 text-black rounded-md' />
          </div>
          <button onClick={handleclick} className='text-white bg-blue-950 my-4 p-3 rounded-md w-full hover:from-pink-500 hover:to-yellow-500 hover:bg-gradient-to-r'>Subscribe to monthly newsletter</button>
        </div>
    </>
  )
}
