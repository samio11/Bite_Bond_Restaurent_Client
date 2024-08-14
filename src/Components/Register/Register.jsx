import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ContextProvider } from '../../AllContext/ContextApi';
import { updateProfile } from 'firebase/auth';
import toast from 'react-hot-toast';

const Register = () => {
    const {registeredUser} = useContext(ContextProvider)
    const navigate = useNavigate();
    const handleRegister = async e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const image = form.image.files[0];
        const formData = new FormData();
        formData.append('image', image);
        console.log(name, email, password, image)
        try{
            const {data} = await axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API_KEY}`,formData)
            console.log(data.data.display_url)
            const {user} = await registeredUser(email,password)
            if(user)
            {
                updateProfile(user,{
                    displayName: name,
                    photoURL: data.data.display_url
                })
                toast.success("User Created Done")
                navigate('/login')
            }
            else{
                toast.error("User not created")
            }
        }
        catch(error){
            console.error(error.message)
        }

    }
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
                            <form onSubmit={handleRegister} className='space-y-3'>

                                <input type='text' name='name' className='w-full px-4 py-2 placeholder-gray-500 text-gray-900 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-blue-500' placeholder='Enter Name' />

                                <input type='email' name='email' className='w-full px-4 py-2 placeholder-gray-500 text-gray-900 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-blue-500' placeholder='Enter Email' />

                                <input type='password' name='password' className='w-full px-4 py-2 placeholder-gray-500 text-gray-900 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-blue-500' placeholder='Enter Password' />
                                {/* File is here */}

                                <div className="flex flex-col items-center justify-center w-full h-full p-4 bg-white rounded-lg shadow-md">
                                    <input
                                        type="file"
                                        id="file"
                                        name='image'
                                        accept="image/*"
                                        className="hidden"

                                    />
                                    <label
                                        htmlFor="file"
                                        className="flex flex-col items-center justify-center w-full h-full p-4 bg-gray-200 rounded-lg cursor-pointer hover:bg-gray-300"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6 text-gray-600"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                                            />
                                        </svg>

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