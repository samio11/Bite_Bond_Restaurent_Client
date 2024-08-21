import React from 'react';
import ForFoodComponent from '../ReusableComponent/ForFoodComponent';

const FoodCategorySlider = () => {
    return (
        <div className="max-w-screen-xl mx-auto flex gap-3 my-4 overflow-x-auto sm:grid sm:grid-cols-3 md:grid-cols-5">
            <ForFoodComponent pic={'salad.jpg'} text={'Salad'} />
            <ForFoodComponent pic={'soup.jpg'} text={'Soup'} />
            <ForFoodComponent pic={'pizza.jpg'} text={'Pizza'} />
            <ForFoodComponent pic={'cake.jpeg'} text={'Cake'} />
            <ForFoodComponent pic={'drinks.jpeg'} text={'Drinks'} />
        </div>

    );
};

export default FoodCategorySlider;