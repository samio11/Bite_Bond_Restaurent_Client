import CommonBox from "../ReusableComponent/CommonBox";
import ForHeadingAndSubHeading from "../ReusableComponent/ForHeadingAndSubHeading";
import NavBar from "../WebHeading/NavBar";
import FoodCategorySlider from "./FoodCategorySlider";
import SliderPart from "./SliderPart";

const Home = () => {
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
        </div>
    );
};

export default Home;