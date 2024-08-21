import axios from "axios";
import CommonBox from "../ReusableComponent/CommonBox";
import ForHeadingAndSubHeading from "../ReusableComponent/ForHeadingAndSubHeading";
import NavBar from "../WebHeading/NavBar";
import FoodCategorySlider from "./FoodCategorySlider";
import SliderPart from "./SliderPart";
import { useQuery, } from '@tanstack/react-query'
import CustomSpinner from "../MySpinner/CustomSpinner";
import MenuFood from "./MenuFood";

const Home = () => {

    const { data: menuFood = [], isLoading } = useQuery({
        queryKey: ['popularMenu'],
        queryFn: async () => {
            const { data } = await axios(`${import.meta.env.VITE_SERVER_URL}/home-menu`)
            return data
        }
    })
    if (isLoading) return <CustomSpinner></CustomSpinner>
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
                <button className="btn btn-outline btn-wide border-b-2">View Full Menu</button>
            </div>
        </div>
    );
};

export default Home;