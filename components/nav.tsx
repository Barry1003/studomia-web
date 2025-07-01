import React from 'react'; 

 
const Header = () => {
  return (
    <header className='w-full p-4 flex justify-between items-center  text-white'>
      <div className="div">
        <img src="../Public/logo.png" alt="website logo" />
      </div>
      <div className="rounded-full">
        <h1 className="text-xl font-semibold text-white rounded-full px-6 py-2 bg-[#2BF388]">Join Free</h1>
      </div>
    </header>
  )
}

export default Header
