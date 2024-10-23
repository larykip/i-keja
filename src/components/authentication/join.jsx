'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const Join = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''

  })

  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, phone, password, confirmPassword } = formData;

    if (password !== confirmPassword) {
      alert('Passwords do not match')
      return
    }

    try {
      const response = await fetch('/api/join', { 
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }, 
        body: JSON.stringify({ name, email, phone, password }) })

        const data = await response.json()

        if (response.ok) {
          alert('Account created successfully')
          //window.location.href = '/login'
          router.push('/login')
        } else {
          alert(data.message || 'An error occurred. Please try again')
        }

    } catch(error){
      console.error('An error occurred', error)
      alert('An error occurred. Please try again')
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }
  return (
    <section className='bg-gray-50 dark:bg-gray-900'>
        <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0'>
            <a className='flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white'>
                <img className='w-8 h-8 mr-2' src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt='logo'/>
                iKeja
            </a>
            <div className='w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700'>
                <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
                    <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white' >Get Started into your account</h1>
                    <form className='space-y-4 md:space-y-6' onSubmit={handleSubmit} >
                        <div>
                          <label className='mb-2 text-sm font-medium text-gray-900 dark:text-white'>Your full name</label>
                          <input type='text' name='name' value={formData.name} onChange={handleChange} placeholder='John Doe' className='bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'/>
                        </div>
                        <div>
                          <label className='mb-2 text-sm font-medium text-gray-900 dark:text-white'>Your email</label>
                          <input type='email' name='email' value={formData.email} onChange={handleChange} placeholder='name@company.com' className='bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'/>
                        </div>
                        <div>
                          <label className='mb-2 text-sm font-medium text-gray-900 dark:text-white'>Your phone number</label>
                          <input type='text' name='phone' value={formData.phone} onChange={handleChange} placeholder='+254123456789' className='bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'/>
                        </div>
                        <div>
                          <label className='mb-2 text-sm font-medium text-gray-900 dark:text-white'>Password</label>
                          <input type='password' name='password' value={formData.password} onChange={handleChange} placeholder="••••••••" className='bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'/>
                        </div>
                        <div>
                          <label className='mb-2 text-sm font-medium text-gray-900 dark:text-white'>Confirm Password</label>
                          <input type='password' name='confirmPassword' value={formData.confirmPassword} onChange={handleChange} placeholder="••••••••" className='bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'/>
                        </div>
                        <div className='flex items-center justify-between'>
                          <div className='flex items-start'>
                            <div className='flex items-center h-5'>
                              <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"/>
                            </div>
                            <div className='ml-3 text-sm'>
                              <label className="text-gray-500 dark:text-gray-300">Remember me</label>
                            </div>
                          </div>
                           <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                        </div>
                        <button type="submit" className="w-full uppercase text-black bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign up</button>
                        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                            Have an account? <Link href={`/login`} className="font-medium text-primary-600 hover:underline dark:text-primary-500" >Sign in</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Join