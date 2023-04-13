import React, { useState } from 'react';
import './ComponentCss/signup.css';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';

function CreateShopForm() {
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState(null)
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const formData = new FormData();
      formData.append('image', image);
      formData.append('title', title)
      await axios.post('http://localhost:4000/shop/create', formData);
      navigate('/ownerHome')
      setIsSuccess(true);

      setErrorMessage('');

    } catch (error) {
      setIsSuccess(false);
      setErrorMessage(error.response.data.message || 'Error creating shop');
    }
    setIsLoading(false);
  };

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };
  const handleTitleChange = (event) => {
    console.log(event.target.value)
    setTitle(event.target.value)
  }
  return (
    <form className='main'>
      <div className='topic'>
        <h3 className='create-shop-title'>Create Your Shop</h3>
      </div>
      <div className='form'>
        <div className='Email'>
          <label className='emaillabel'>Shop Name</label>
          <input type="email" name="Email" className="FormControl" placeholder="Enter Name" onChange={handleTitleChange} />
        </div>
        <label htmlFor="image" className='emaillabel' >Select an image:</label>
        <input type="file" className='FormControl' onChange={handleImageChange} />
        <button className='signup' onClick={handleSubmit}>Create Shop</button>
      </div>
    </form>
  )
}

export default CreateShopForm;
