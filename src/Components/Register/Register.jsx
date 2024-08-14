import React from 'react';
import { Link } from 'react-router-dom';
import './register.css'

const Register = () => {
    return (
        <div>
            <div className='w-auto md:w-screen h-auto md:h-screen flex justify-center items-center'>
                <div className='w-[80%] h-auto shadow-xl rounded-lg flex flex-col md:flex-row-reverse justify-center items-center p-5'>
                    {/* left Part */}
                    <div className='flex-1 flex justify-center items-center'>
                        <img className='w-[80%] lg:w-full h-[80%] lg:h-[400px]' src="register.svg" alt="login" />
                    </div>
                    {/* Right part */}
                    <div className='flex-1 flex justify-center items-center'>
                        <div>
                            <h2 className='text-center text-2xl font-semibold italic my-3'>Sign Up</h2>
                            <form className='space-y-3'>

                                <input type='text' name='name' className='w-full px-4 py-2 placeholder-gray-500 text-gray-900 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-blue-500' placeholder='Enter Name' />

                                <input type='email' name='email' className='w-full px-4 py-2 placeholder-gray-500 text-gray-900 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-blue-500' placeholder='Enter Email' />

                                <input type='password' name='password' className='w-full px-4 py-2 placeholder-gray-500 text-gray-900 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-blue-500' placeholder='Enter Password' />
                                {/* File is here */}


                                <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                                    <div className="mb-4">
                                        <h3 className="text-lg font-bold">Upload your picture Here</h3>
                                        <p className="text-gray-600 text-sm">Maximum file size 10mb</p>
                                    </div>
                                    <label className="block w-full text-center">
                                        <input type="file" className="hidden" />
                                        <div className="bg-blue-100 hover:bg-blue-200 cursor-pointer transition duration-300 ease-in-out py-4 px-6 rounded text-blue-500 font-bold">
                                            Select Picture
                                        </div>
                                    </label>
                                </div>




                                <p className='text-xs'>Already have an Account? <Link className='hover:underline' to={'/login'}>Sign In</Link></p>
                                <div className='flex justify-center items-center'>
                                    <input className='btn btn-outline btn-wide' type="submit" value="Register" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;