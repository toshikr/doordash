import { useEffect, useState } from "react";
import RestaurantCard , {withPromotedLabel} from "./RestaurantCards";
import { useState } from "react";
import ShimmerUI from "./ShimmerUI";
import { Link } from "react-router-dom";
import { GET_ALL_REST_LINK } from "../utils/constants";
import useOnlineStatus from "../utils/customHooks/useOnlineStatus";

const Body = () => {
    const [listOfRest,setListOfRest] = useState([]);
    //to maintain a different filtered list for all the filter logics and other variations to the main rest list
    const [filteredRestList, setFilteredRestList] = useState([]); 
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchData();
    },[]);

    const fetchData = async () => {
        //will fetch our data from swiggy api and awaits till response comes
        const response = await fetch(GET_ALL_REST_LINK);
        //wait for the above promise to resolve and return the response then convert data into valid json
        const jsonData = await response.json();
        //check exactly what data came in json
        // console.log("json data of all rest",jsonData);
        setListOfRest(jsonData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestList(jsonData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    // console.log("list of rest",listOfRest);
    const onlineStatus = useOnlineStatus();
    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

    if(onlineStatus === false)
    return (
    <h3> Looks like you're Offline, check your connection</h3> 
    );

    // If this if is satisfied then, only this return inside the if() will be executed and the below return won't
    if( listOfRest.length === 0)
    {
        return <ShimmerUI />
    };
    return (
        <div className="body">
            <div className="filter-container flex">
                <div className="search m-4 p-4 rounded-lg">
                    <input 
                        type="value" 
                        className="border border-solid border-black rounded-lg" 
                        value={searchText} 
                        onChange={(e) =>{
                        setSearchText(e.target.value);
                        }}
                    />
                    <button 
                        className="px-4 py-2 bg-green-300 m-4 rounded-lg" 
                        onClick={() => {
                            searchedRest = listOfRest.filter((res) => 
                            res.info.name.toLowerCase().includes(searchText.toLocaleLowerCase())
                            )
                            setFilteredRestList(searchedRest);
                    }}>Search</button>
                </div>

                {/* filtering top rated restaurants */}
                <div className="p-4 m-4 flex items-center">
                    <button 
                        className="px-4 py-3 bg-gray-300 rounded-lg" 
                        onClick={ () => 
                            {
                                const filteredList = listOfRest.filter(
                                    (res) => res.info.avgRating > 4
                                );
                                setFilteredRestList(filteredList);
                            }}>
                        Top Rated Rest
                    </button>
                </div>
            </div>
            <div className="m-2 p-2 flex flex-wrap">
                {filteredRestList.map((restaurant) => (
                    <Link to={"/restaurants/"+restaurant.info.id} 
                          key={restaurant.info.id}>
                          {restaurant.info.isOpen ? (
                            < RestaurantCardPromoted resData={restaurant} />
                          ) : ( <RestaurantCard  resData={restaurant} /> ) 
                          }
                    </Link>
                ))
                }
            </div>
        </div>
    );
};

export default Body;
