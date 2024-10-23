
'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })
    const router = useRouter()

    // Handle form submission
    const handleSubmit = async (e) => {
        // Prevent default form submission
        e.preventDefault()
        // Destructure email and password from formData
        const { email, password } = formData

        try {
            // Send a POST request to the /api/login endpoint
            const response = await fetch('/api/login', {
                // Set the method to POST
                method: 'POST',
                // Set the headers to 'Content-Type': 'application/json'
                headers: { 'Content-Type': 'application/json' },
                // Set the body to the JSON stringified formData
                body: JSON.stringify({ email, password })
            })
    
            // Parse the JSON response
            const data = await response.json()
    
            // If the response is ok
            if (response.ok) {
                // Store the token in local storage
                localStorage.setItem('token', data.token)
                // Alert the user that login was successful
                alert('Login successful')
                // Redirect the user to the homepage
                router.push('/')
            } else {
                alert(data.message || 'An error occurred. Please try again')
            }
        } catch (error) {
            console.error('An error occurred', error)
            alert('An error occurred. Please try again')
        }
    }

    const handleChange = async (e) => {
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
                    <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white' >Sign into your account</h1>
                    <form className='space-y-4 md:space-y-6' onSubmit={handleSubmit}>
                        <div>
                            <label className='mb-2 text-sm font-medium text-gray-900 dark:text-white'>Your email</label>
                            <input type='email' name='email' value={formData.email} onChange={handleChange} placeholder='name@company.com' className='bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'/>
                        </div>
                        <div>
                            <label className='mb-2 text-sm font-medium text-gray-900 dark:text-white'>Password</label>
                            <input type='password' name='password' value={formData.password} onChange={handleChange} placeholder="••••••••" className='bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'/>
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
                        <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                            Don’t have an account yet? <Link href={`/join`} className="font-medium text-primary-600 hover:underline dark:text-primary-500" >Sign up</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Login