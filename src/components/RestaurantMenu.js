import React, {useState }from 'react';
import ShimmerUi from './ShimmerUI';
import { useParams } from 'react-router-dom';
import useReataurantMenuData from '../utils/customHooks/useReataurantMenuData';
import RestaurantCategory from './RestaurantCategory'

const RestaurantMenu = () => {
    const [showIndex, setShowIndex] = useState(null);
    const {resId} = useParams();
    //we created custom hook to fetch rest. menu details and give us the menu of the specified redId
    const resInfo = useReataurantMenuData(resId);
    // console.log(resInfo);

    if(resInfo === null) return <ShimmerUi/>;

    const {
        name,
        avgRating,
        costForTwoMessage,
        cuisines,
        id,
    } = resInfo?.cards[0]?.card?.card?.info ?? { };

    const { itemCards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter( 
        (c) => 
          c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
          );
    console.log("Menu categories",categories);
    return (
        <div className='text-center'>
            <h1 className='font-bold m-6 text-2xl'> {name} </h1>
            <h2> Rating : {avgRating} </h2>
            <h2> CostForTwo : {costForTwoMessage} </h2>
            <h2> Cuisines : {cuisines.join(', ')} </h2>
            {
                categories.map((category, index) => (
                    < RestaurantCategory 
                        key={category?.card?.card?.title} 
                        menuData={category?.card?.card} 
                        showItems={index === showIndex ? true : false}
                        setShowIndex = {() => setShowIndex(index)}
                    />
                ))
            }
        </div>
    )
}

export default RestaurantMenu;