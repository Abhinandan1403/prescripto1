import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className='flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-10 lg:px-20'>

      {/* LEFT SECTION */}
      <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]'>

        <p className='text-3xl md:text-5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight'>
          Book Appointment <br /> with Trusted Doctors
        </p>

        <div className='flex items-center gap-3 text-white text-sm font-light'>
          <img className='w-8/12 max-w-[80px]' src={assets.group_profiles} alt="Profiles" />
          <p>
            Simply browse through our extensive list of trusted doctors,<br className='hidden sm:block'/> schedule your appointment hassle-free.
          </p>
        </div>

        {/* 🔽 Button moved below */}
        <a
          href="#speciality"
          className='flex items-center gap-2 bg-white px-8 py-3 rounded-full text-gray-600 font-medium hover:scale-105 transition-all duration-300'
        >
          Book appointment <img className='w-3' src={assets.arrow_icon} alt="" />
        </a>

      </div>

      {/* RIGHT SECTION */}
      <div className='md:w-1/2 relative'>
        <img className='w-full md:absolute bottom-0 h-auto rounded-lg' src={assets.header_img} alt="Doctor group" />
      </div>

    </div>
  )
}

export default Header
