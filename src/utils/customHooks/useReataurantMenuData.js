import { useEffect, useState } from 'react'
import { MENU_LINK } from '../constants';

const useReataurantMenuData = (resId) => {
    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchResData();
    }, []);

    const fetchResData = async () => {
        const data = await fetch(MENU_LINK + resId);
        const json = await data.json();
        // console.log(json.data)
        setResInfo(json.data);
    }
  return resInfo;
}

export default useReataurantMenuData