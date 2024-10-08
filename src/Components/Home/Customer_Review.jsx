import { useQuery } from '@tanstack/react-query';
import CustomSpinner from '../MySpinner/CustomSpinner';
import axios from 'axios';
import Review_Card from './Review_Card';


const Customer_Review = () => {
    // For Load Review
    const { data: reviews = [], isLoading: loadReview } = useQuery({
        queryKey: ['loadReviews'],
        queryFn: async () => {
            const { data } = await axios(`${import.meta.env.VITE_SERVER_URL}/food-rating`)
            return data
        }
    })
    if (loadReview) return <CustomSpinner></CustomSpinner>
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                <div>
                    <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                        Testimonial
                    </p>
                </div>
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                    <span className="relative inline-block">
                        <svg
                            viewBox="0 0 52 24"
                            fill="currentColor"
                            className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                        >
                            <defs>
                                <pattern
                                    id="1d4040f3-9f3e-4ac7-b117-7d4009658ced"
                                    x="0"
                                    y="0"
                                    width=".135"
                                    height=".30"
                                >
                                    <circle cx="1" cy="1" r=".7" />
                                </pattern>
                            </defs>
                            <rect
                                fill="url(#1d4040f3-9f3e-4ac7-b117-7d4009658ced)"
                                width="52"
                                height="24"
                            />
                        </svg>
                        <span className="relative">Welcome</span>
                    </span>{' '}
                    our Precious customer Review
                </h2>
                <p className="text-base text-gray-700 md:text-lg">
                    Discover what makes Bite Bond special through the voices of those who matter most—our customers.
                </p>
            </div>
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                {
                    reviews?.map(x=><Review_Card key={x._id} data={x}></Review_Card>)
                }

            </div>
        </div>
    );
};

export default Customer_Review;