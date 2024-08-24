import React, { useContext, useState } from 'react';
import { ContextProvider } from '../../AllContext/ContextApi';
import { useMutation, useQueries, useQuery } from '@tanstack/react-query';
import axios from 'axios';
import toast from 'react-hot-toast';
import CustomSpinner from '../MySpinner/CustomSpinner';

const Contact = () => {
    const { user } = useContext(ContextProvider)
    console.log(user)
    const { mutateAsync: sendReview } = useMutation({
        mutationFn: async reviewData => {
            const { data } = await axios.post(`${import.meta.env.VITE_SERVER_URL}/rating`, reviewData)
            return data;
        },
        onSuccess: s1 => {
            console.log(s1)
            toast.success(`Review Send Done!`)
        },
        onError: e => {
            console.log(e)
            toast.error(`Error while sending Review!`)
        }
    })
    const handleReview =async e => {
        e.preventDefault();
        const form = e.target;
        const rating_given_name = form.name.value;
        const rating_given_email = form.email.value;
        const rating_given_image = form.photo.value;
        const rating_given_desc = form.desc.value;
        const rating = parseInt(form.rating.value);
        const reviewData = { rating_given_name, rating_given_email, rating_given_image, rating_given_desc, rating }
        console.log(reviewData)
        await sendReview(reviewData)

    }
    return (
        <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
            <h1 className="text-3xl font-bold mb-4">Leave a Review</h1>
            <form onSubmit={handleReview} className="max-w-md mx-auto p-4 pt-6 pb-8 mb-4 bg-white rounded shadow-md">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
                    <input name='name' disabled defaultValue={user?.displayName} className="w-full px-3 py-2 text-gray-700 border border-gray-300 rounded" id="name" type="text" placeholder="Your Name" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                    <input name='email' disabled defaultValue={user?.email} className="w-full px-3 py-2 text-gray-700 border border-gray-300 rounded" id="email" type="email" placeholder="your@email.com" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Image Url</label>
                    <input name='photo' disabled defaultValue={user?.photoURL} className="w-full px-3 py-2 text-gray-700 border border-gray-300 rounded" id="image" type="text" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Description</label>
                    <textarea name='desc' className="w-full px-3 py-2 text-gray-700 border border-gray-300 rounded" id="description" placeholder="Write your review..." />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" >Rating</label>
                    <select name='rating' className="w-full px-3 py-2 text-gray-700 border border-gray-300 rounded" id="rating">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
                <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">Submit Review</button>
            </form>
        </div>
    );
};

export default Contact;