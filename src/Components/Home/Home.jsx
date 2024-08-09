import React, { useEffect, useRef } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';

const Home = () => {
    const cRef = useRef(null)
    useEffect(()=>{
        loadCaptchaEnginge(6)
    },[])
    const validateCaptchar = () => {
        const valueCome = cRef.current.value;
        if (validateCaptcha(valueCome)) {
            alert('Done')
        }
        else {
            alert('Invalid captcha')
        }
    }
    return (
        <div>
            <label htmlFor="">
                <LoadCanvasTemplateNoReload />
            </label>
            <input type="text" className='border-red-300' ref={cRef} name="captcha" id="" />
            <button onClick={validateCaptchar}>Submit</button>
        </div>
    );
};

export default Home;