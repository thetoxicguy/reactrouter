import { useEffect, useState } from 'react';
import './App.css';
import {Link} from 'react-router-dom'

function Shop() {
    // 2. Run fetchItems (below)
    useEffect(() => {
        fetchItems();
    // The brackets are used so this only runs when the component (Shop) mounts
    }, []);

    // 3. Set the state to save the data from "items" below
    const [items, setItems] = useState([])
    
    // 1. define the function "fetchItems" to fetch and store data
    const fetchItems = async () => {
        const data = await fetch(
            'https://fortnite-api.theapinetwork.com/upcoming/get'
            );

        // 4. Now convert "data" to json and store it in "items" (locally)
        const items = await data.json();
        // We observe that the data we need resides in the "data" children
        console.log(items.data);
        // 5. Save the items to "items" in the state (from 3.)
        setItems(items.data);
    };
  return (
    <div>
        <h1>Shop</h1>
        {items.map(
            // the data comes from items.data.item.name
            // (items.data is stored in item)
            //  The key is set to every mapped element, so we don't get a warning
            item =>
                <h3 key={item.itemId} >
                    <Link to = {`shop/${item.itemId}`}>
                        {item.item.name}
                    </Link>
                </h3>
            )}
    </div>
  );
}

export default Shop;
