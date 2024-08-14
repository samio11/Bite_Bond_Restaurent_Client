import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";
import { ContextProvider } from '../../AllContext/ContextApi';
import toast from 'react-hot-toast';

const Login = () => {
    const {login,googleLogin} = useContext(ContextProvider)
    const navigate = useNavigate();

    const handleLogin = async e =>{
        e.preventDefault();
        const result = e.target;
        const email = result.email.value;
        const password = result.password.value;
        try{
            const {user} = await login(email, password)
            if(user)
            {
                toast.success(`${user.displayName}! Welcome`)
                navigate('/')
            }
        }
        catch(error){
            toast.error(error.message)
        }
    }

    const handleGoogle = async() =>{
        try{
            const {user} = await googleLogin()
            if(user)
            {
                toast.success(`${user.displayName}! Welcome`)
                navigate('/')
            }
        }
        catch(error){
            toast.error(error.message)
        }
    }
    return (
        <div className='w-auto md:w-screen h-auto md:h-screen flex justify-center items-center'>
            <div className='w-[80%] h-auto shadow-xl rounded-lg flex flex-col md:flex-row justify-center items-center p-5'>
                {/* left Part */}
                <div className='flex-1 flex justify-center items-center'>
                    <img className='w-[80%] lg:w-full h-[80%] lg:h-auto' src="login.svg" alt="login" />
                </div>
                {/* Right part */}
                <div className='flex-1 flex justify-center items-center'>
                    <div>
                        <h2 className='text-center text-2xl font-semibold italic my-3'>Login</h2>
                        <form onSubmit={handleLogin} className='space-y-3'>

                            <input type='email' name='email' className='w-full px-4 py-2 placeholder-gray-500 text-gray-900 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-blue-500' placeholder='Enter Email' />

                            <input type='password' name='password' className='w-full px-4 py-2 placeholder-gray-500 text-gray-900 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-blue-500' placeholder='Enter Password' />

                            <p className='text-xs'>Dont have an Account? <Link className='hover:underline' to={'/register'}>Sign Up</Link></p>
                            <div className='flex justify-center items-center'>
                                <input className='btn btn-outline btn-wide' type="submit" value="Login" />
                            </div>
                            <p className='text-center text-xs'>--OR--</p>
                            <div className='flex justify-center items-center'>
                                <button onClick={handleGoogle} className='btn btn-outline btn-wide'><FaGoogle /> Google Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;