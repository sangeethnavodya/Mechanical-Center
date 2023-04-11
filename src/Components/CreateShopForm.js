import React, { useState } from 'react';
import './ComponentCss/signup.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function CreateShopForm() {
  const [title, settitle] = useState('')
  const [file, setfile] = useState('')

  const setTitle = (e) => {
    settitle(e.target.value);
  }
  
  const setImgFile=(e)=>{
    setfile(e.target.files[0])
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("photo",file)
    data.append("title",title)

    try {
      const response = await axios.post('http://localhost:4000/shop/create', data);
      console.log(response.massage);
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
          <input type="email" name="Email" className="FormControl" placeholder="Enter Name" onChange={setTitle} />
        </div>
        <label htmlFor="image" className='emaillabel' >Select an image:</label>
        <input type="file" className='FormControl' onChange={setImgFile} />
        <button className='signup' onClick={handleSubmit}>Create Shop</button>
      </div>
    </form>
  )
}

export default CreateShopForm;
