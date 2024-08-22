import axios from "axios";
import CommonBox from "../ReusableComponent/CommonBox";
import ForHeadingAndSubHeading from "../ReusableComponent/ForHeadingAndSubHeading";
import NavBar from "../WebHeading/NavBar";
import FoodCategorySlider from "./FoodCategorySlider";
import SliderPart from "./SliderPart";
import { useQuery, } from '@tanstack/react-query'
import CustomSpinner from "../MySpinner/CustomSpinner";
import MenuFood from "./MenuFood";
import { useNavigate } from "react-router-dom";
import OurHistory from "./OurHistory";
import ChefRecomandCard from "./ChefRecomandCard";
import Customer_Review from "./Customer_Review";

const Home = () => {
    const navigate = useNavigate();
    // For Menu
    const { data: menuFood = [], isLoading } = useQuery({
        queryKey: ['popularMenu'],
        queryFn: async () => {
            const { data } = await axios(`${import.meta.env.VITE_SERVER_URL}/home-menu`)
            return data
        }
    })
    // For Chef Recommend
    const { data: chefRecommend = [], isLoading: chefLoading } = useQuery({
        queryKey: ['popularFood'],
        queryFn: async () => {
            const { data } = await axios(`${import.meta.env.VITE_SERVER_URL}/home-chef-recommend`)
            return data
        }
    })



    const handleFullMenu = () => {
        navigate('/menu')
    }
    if (isLoading) return <CustomSpinner></CustomSpinner>
    if (chefLoading) return <CustomSpinner></CustomSpinner>
   
    return (
        <div>
            {/* Slider */}
            <SliderPart></SliderPart>
            {/* Online Payment Section */}
            <ForHeadingAndSubHeading title={'Convenient Online Orders'} subtitle={'Enjoy Your Meal with Just a Few Clicks'}></ForHeadingAndSubHeading>
            {/* Food Category */}
            <FoodCategorySlider></FoodCategorySlider>
            {/* I will add this part Later */}
            {/* Home Border */}
            <div className="max-w-screen-xl mx-auto my-5 md:my-10">
                <CommonBox pic={'home_1.jpg'} title={'Bite Bond'} subTitle={'Discover the perfect blend of taste and ambiance at Bite Bond, where every bite creates a lasting bond.'}></CommonBox>
            </div>
            {/* Our Menu */}
            <ForHeadingAndSubHeading title={'Our Menu'} subtitle={'Indulge in Culinary Excellence, Bite by Bite'}></ForHeadingAndSubHeading>
            <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
                {
                    menuFood?.map((x) => <MenuFood key={x._id} itemFood={x} />)
                }
            </div>
            <div className=" w-full flex justify-center items-center my-4">
                <button onClick={handleFullMenu} className="btn btn-outline btn-wide border-b-2">View Full Menu</button>
            </div>
            {/* Our History */}
            <OurHistory></OurHistory>
            {/* Chef Recomandation */}
            <ForHeadingAndSubHeading title={'Chef Recommends'} subtitle={'Curated with Passion, Crafted to Perfection'}></ForHeadingAndSubHeading>
            <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
                {
                    chefRecommend?.map((x) => <ChefRecomandCard key={x._id} itemfood={x} />)
                }
            </div>
            {/* <ForHeadingAndSubHeading title={'Testimonials'} subtitle={'Check What Our Customers Say'}></ForHeadingAndSubHeading> */}
            <Customer_Review></Customer_Review>

        </div>
    );
};

export default Home;