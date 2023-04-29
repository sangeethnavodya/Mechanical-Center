import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../Components/ComponentCss/existingShop.css'

const ShopList = (Prop) => {
  const [shops, setShops] = useState([]);
  const navigate = useNavigate();
  console.log(Prop)
  useEffect(() => {
    // Fetch shop data from API on component mount
    axios.get('http://localhost:4000/shop/type/'+Prop.data)
      .then((response) => {
        console.log(response)
        setShops(response.data.result)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function handleOnclick(e) {
    localStorage.setItem('shop_id', e._id);
    navigate('/itemAddingForm')
  }
  function handleOnclick(e) {
    localStorage.setItem('shop_id', e._id);
    navigate('/itemAddingForm')
  }
  function handleOnclickShop(e) {
    localStorage.setItem('shop_id', e._id);
    const formData = new FormData();
    formData.append('shop_id', localStorage.getItem('shop_id'));

    // Fetch shop data from API on component mount
    axios.post('http://localhost:4000/item/shopWise', formData)
      .then((response) => {
        if (response) {
          if (response.data.message !== 'no users with the same name found')
            navigate('/shopView')

        }
      })
      .catch((error) => {
        console.log(error);
      });

  }

  const tableRows = shops.map((row, index) => (
    <tr key={index} className='shop-table-rows'>
      <td className='table-shop-td'>
        <img src={row.image.url} alt="product" width="100" height="100" />
      </td>
      <td className='table-shop-td-name' >{row.title}</td>
      <td className='table-shop-td'><button className='button-shop' onClick={() => handleOnclick(row)}>Add item to shop</button></td>
      <td className='table-shop-td'><button  className='button-shop' onClick={() => handleOnclickShop(row)}>Show shop</button></td>

    </tr>
  ));
  console.log(shops)
  return (
    <div className='shop-main-div'>
      <table className='shop-main-table' >
        <thead className='shop-main-head'>
          <tr className='shop-tr'>
            <th className='shop-th'>Logo</th>
            <th className='shop-th'>Shop Name</th>
          </tr >
        </thead>

        <tbody>
          {tableRows}
        </tbody>

      </table>
    </div>
  );
};

export default ShopList;
