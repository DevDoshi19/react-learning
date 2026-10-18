import React from 'react'

const Navbar = () => {
  return (
    // <nav className='w-full border-b border-black bg-gray-900 shadow-sm backdrop-blur-sm'>
    //   <div className='mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8'>
    //     <a href='#' className='text-xl font-bold tracking-tight text-white-900'>
    //       Dev Doshi
    //     </a>

    //     <div className='hidden items-center gap-8 md:flex'>
    //       <a href='#home' className='text-sm font-medium text-grey-400 transition hover:text-blue-500'>
    //         Home
    //       </a>
    //       <a href='#about' className='text-sm font-medium text-grey-400 transition hover:text-blue-500'>
    //         About
    //       </a>
    //       <a href='#services' className='text-sm font-medium text-grey-400 transition hover:text-blue-500'>
    //         Services
    //       </a>
    //       <a href='#contact' className='text-sm font-medium text-grey-400 transition hover:text-blue-500'>
    //         Contact
    //       </a>
    //     </div>

    //     <a
    //       href='#contact'
    //       className='inline-flex items-center rounded-full bg-blue-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-gray-700'
    //     >
    //       Get Started
    //     </a>
    //   </div>
    // </nav>
    <div className='flex items-center justify-between py-8 px-18'>
      <h4 className='bg-black text-white uppercase px-6 py-2 rounded-full tracking-wider'>Target Audience</h4>
      <button className='bg-gray-200 px-6 py-2 rounded-full uppercase tracking-wider text-sm'>digital banking platform</button>
    </div>
  )
}

export default Navbar