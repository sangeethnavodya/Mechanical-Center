import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './ComponentCss/ShopList.css'; // import CSS file

const ShowExistingItemCC = () => {
    const [items, setItems] = useState([]);
    const [shops, setShop] = useState({})
    const navigate = useNavigate();
    const formData = new FormData();
    formData.append('shop_id', localStorage.getItem('shop_id'));
    useEffect(() => {
        // Fetch shop data from API on component mount
        const fetchData = async () => {
            axios.post('http://localhost:4000/item/shopWise', formData)
            .then((response) => {
                if (response) {
                    console.log(response.data.users)
                    setItems(response.data.users)

                }
            })
            .catch((error) => {
                console.log(error);
            });

            axios.get('http://localhost:4000/shop/findOne/'+localStorage.getItem('shop_id'))
            .then((response)=>{
                console.log(response.data)
                setShop(response.data)
                console.log(shops)
            })
        }
        fetchData()
    }, []);

    const cardViews = items.map((shop, index) => (
        <div className="card" key={index}>
            <img src={shop.image.url} alt="shop" className="item-img" />
            <div className="card-container">
                <h4 className="item-desc">{shop.Description}</h4>
                <h4 className="item-price">Rs. {shop.Price}</h4>
                <h4 className="item-name">{shop.Name}</h4>
                <button className='button'>Buy</button>
            </div>
        </div>
    ));
    return (
        <div>
            {/* <div>
            <img src={shops.image.url} alt="shop" className="item-img" />
            </div> */}
            <div className="item-grid"> {/* wrap cardViews in a container */}
                {cardViews}
            </div>
        </div>
    );
};

export default ShowExistingItemCC;
