import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

            {/* ----- left ----- */}
            <div>
                <img className='mb-5 w-40' src={assets.logo} alt="" />
                <p className='w-full md:w-2/3 text-gray-600 leading-6'>Prescripto simplifies your healthcare journey by connecting patients with doctors seamlessly. Book appointments, manage records, and access care with ease. Trusted, secure, and built for convenience. Your health, our priority — anytime, anywhere.</p>
            </div>

            {/* ----- mid ----- */}
            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>

            {/* ----- right ----- */}
            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>+0-000-000-000</li>
                    <li>developer@gmail.com</li>
                </ul>
            </div>
        </div>
        {/*cpyryt text */}
        <div>
            <hr />
            <p className='py-5 text-sm text-center'>Copyright 2025 - All Right Reserved.</p>
        </div>
    </div>
  )
}

export default Footer