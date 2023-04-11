import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ShopList = () => {
  const [shops, setShops] = useState([]);

  useEffect(() => {
    // Fetch shop data from API on component mount
    axios.get('http://localhost:4000/shop/create')
      .then((response) => {
       console.log(response)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
    
    </div>
  );
};

export default ShopList;
