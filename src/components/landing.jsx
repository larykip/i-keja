import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Landing = () => {
  return (
    <div className='flex flex-col'>
      <div className='bg-pink-500 min-h-screen'>
        <div className='flex items-center px-6 sm:px-10 md:px-20 h-20 sm:h-28'>
          <div className='flex items-center h-16 w-full justify-between'>
            <div>
              <Image src='/images/logo.jpg' width={150} height={150} alt='logo' className='w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24' />
            </div>
            <div className='flex text-white font-bold space-x-4 sm:space-x-6 md:space-x-8'>
              <Link href={``}>
                About
              </Link>
              <Link href={``}>
                Contact
              </Link>
            </div>
          </div>
        </div>
        <div className='flex flex-col-reverse lg:flex-row mt-10 sm:mt-14 lg:h-3/4'>
          <div className='flex justify-center flex-1 lg:ml-14'>
            <div className='flex flex-col items-center justify-center text-center px-6 sm:px-10'>
              <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white'>
                Welcome to iKeja
              </h1>
              <p className='text-xl sm:text-2xl md:text-3xl mt-4 sm:mt-8'>
                Find the perfect home for you and your family
              </p>
              <div className='flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 md:space-x-12 mt-8'>
                <Link href={`/join`}>
                  <button className='bg-black text-white text-lg sm:text-xl md:text-2xl rounded-xl py-2 w-48 sm:w-52'>
                    Get Started
                  </button>
                </Link>
                <Link href={`/login`}>
                  <button className='bg-black text-white text-lg sm:text-xl md:text-2xl rounded-xl py-2 w-48 sm:w-52'>
                    Sign In
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className='flex bg-yellow-400 justify-center items-center w-full lg:w-[40%] xl:w-[50%] relative h-52 sm:h-72 md:h-96 lg:h-full'>
            <Image 
              src='/images/apartment.jpg' 
              alt="Apartment Image" 
              fill 
              style={{ objectFit: 'cover' }} 
            />
          </div>
        </div>
      </div>

      <div>
        <div className='flex flex-col items-center mt-16 sm:mt-20'>
          <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold'>Our Services</h1>
          <div className='flex flex-col sm:flex-row space-y-8 sm:space-y-0 sm:space-x-8 mt-8 px-4 sm:px-0'>
            <div className='flex flex-col items-center'>
              <Image src='/images/house.jpg' width={210} height={200} className='w-40 h-40 md:w-52 md:h-52' />
              <h1 className='text-lg sm:text-xl md:text-2xl font-bold mt-4'>House Rentals</h1>
            </div>
            <div className='flex flex-col items-center'>
              <Image src='/images/land.jpg' width={178} height={200} className='w-36 h-40 md:w-48 md:h-52' />
              <h1 className='text-lg sm:text-xl md:text-2xl font-bold mt-4'>Land Sales</h1>
            </div>
            <div className='flex flex-col items-center'>
              <Image src='/images/office.jpg' width={200} height={200} className='w-40 h-40 md:w-52 md:h-52' />
              <h1 className='text-lg sm:text-xl md:text-2xl font-bold mt-4'>Office Space</h1>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Landing
