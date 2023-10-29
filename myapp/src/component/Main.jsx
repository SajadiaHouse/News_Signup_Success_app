import React, { useState } from 'react'
import News from './News'
import Thankyou from './Thankyou'
const Main = () => {
  const [isLoading, setisLoading] = useState(false)
  const [email, setemail] = useState("")
  return (
    <>
      <div className='flex md:bg-blue-950  justify-center items-center h-screen'>
      {isLoading ? <Thankyou email={email} /> : <News setemail={setemail} setisLoading={setisLoading} email={email} isLoading={isLoading} />}
      </div>
    </>
  )
}

export default Main