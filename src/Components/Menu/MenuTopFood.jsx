
const MenuTopFood = ({ data,refetch }) => {
    return (
        <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img className="w-full rounded-t-lg h-[200px] md:h-[200px] md:w-[300px] md:rounded-none md:rounded-s-lg" src={data?.food_image} alt="" />
            <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{data?.food_name}</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{data?.food_description}</p>
            </div>
        </div>

    );
};

export default MenuTopFood;