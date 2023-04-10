import React, { useState } from 'react';
import './ComponentCss/signup.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function CreateShopForm() {
  const [formData, setFormData] = useState({});
  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    for (let key in formData) {
      data.append(key, formData[key]);
    }
    data.append('image', file);

    try {
      const response = await axios.post('/shop/create', data);
      console.log(response.data);
      // display success message or redirect to success page
    } catch (error) {
      console.log(error);
      // display error message or handle error
    }
    console.log(data);
  };

  return (
    <form className='main'>
      <div className='topic'>
        <h3>Create Your Shop</h3>
      </div>
      <div className='form'>
        <div className='Email'>
          <label className='emaillabel'>Shop Name</label>
          <input type="email" name="Email" className="FormControl" placeholder="Enter Name" onChange={handleChange} />
        </div>
        <label htmlFor="image" className='emaillabel' >Select an image:</label>
        <input type="file" className='FormControl' onChange={handleFileChange} />
        <button className='signup' onClick={handleSubmit}>Create Shop</button>
      </div>
    </form>
  )
}

export default CreateShopForm;
