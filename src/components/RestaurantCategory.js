import MenuItemList from "./MenuItemList";

const RestaurantCategory = ({menuData, showItems, setShowIndex}) => {
    const handleClick = () => {
        setShowIndex();
    }

    // console.log("menudata",menuData);
    return (
        <div className="w-6/12 mx-auto my-4 shadow-lg bg-gray-50 p-4">
            {/* accordion header */}
            <div className="flex justify-between cursor-pointer"
                 onClick={handleClick}>
                <span className="font-bold text-lg">{menuData.title}({menuData.itemCards.length})</span>
                <span>⤵️</span>
            </div>
            {/* accordion Body */}
            <div>
                {
                    showItems && <MenuItemList items={menuData?.itemCards}/> 
                }
            </div>
        </div>
    );
};

export default RestaurantCategory;