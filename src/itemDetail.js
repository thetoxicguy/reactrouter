import React, { useEffect, useState } from 'react';
import './App.css';

// Curly brackets are IMPORTANT to use "match" (don't know why)
function ItemDetail({match}) {
    // 2. Run fetchItems (below)
    useEffect(() => {
        fetchItem();
        console.log(match)
        console.log(match.params.id)
    }, []);

    const [item, setItem] = useState({
        data: {
            item: {
                images: {},
                // name: {}
            }
        }
    })
    
    const fetchItem = async () => {
        const fItem = await fetch(
            `https://fortnite-api.theapinetwork.com/item/get?id=${match.params.id}`
        );
        const item = await fItem.json();
        setItem(item)
        console.log(item)
    };
  return (
    <div>
        <h1>{item.data.item.name}</h1>
        <img src={item.data.item.images.information}/>
    </div>
  );
}

export default ItemDetail;
