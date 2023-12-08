import { REST_IMG_CDN_LINK } from "../utils/constants";

const RestaurantCard = (props) => {
    const {resData }=props;
    const {
        cloudinaryImageId,
        locality,
        name,
        cuisines,
        avgRating,
        costForTwo,
        deliveryTime
    } = resData?.info;

    return (
        <div className="m-2 p-2 w-[200px] rounded-lg bg-gray-100 hover:bg-gray-200">
            <img 
                className="rest-logo rounded-lg" 
                alt="Rest-logo"
                src={ REST_IMG_CDN_LINK + cloudinaryImageId} 
            />
            <h3 className="font-bold py-4 text-lg">{name}</h3>
            <h3>{locality}</h3>
            <h3>{cuisines.join(", ")}</h3>
            <h3>{avgRating}</h3>
            <h3>{costForTwo}</h3>
        </div>
        
    );
};

//Higher Order Component
// input - RestaurantCard ==> RestaurantCardPromoted

export const withPromotedLabel = (RestaurantCard) => {
    return(props) => {
        return (
            <div>
                <label className="absolute bg-black text-white m-2 p-2 rounded-md">Promoted</label>
                < RestaurantCard {...props} />
            </div>
        )
    }
}

export default RestaurantCard;
