import React, { Component, useState } from 'react'
import './ComponentCss/signup.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function CreateShopForm() {
    const [formData, setFormData] = useState({
        Email: "", Password: ""
    });
    const [image, setImage] = useState(null);

    const handleImageChange = (event) => {
        const selectedImage = event.target.files[0];
        setImage(selectedImage);
    };
    const [selectedOption, setselectedOption] = useState('')
    const navigate = useNavigate();
    function handleInputChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        setFormData((prev) => {
            return { ...prev, [name]: value }
        })
    }
    function handleRadioButton(event) {
        setselectedOption(event.target.value)
    }
    function handleUser(event) {
        event.preventDefault();
        if (selectedOption === 'Owner') {
            axios.post('http://localhost:4000/register/login', formData)
                .then(response => {
                    console.log(response.data);
                    if (response.data.message === 'owner')
                        navigate('/ownerHome')
                })
                .catch(error => {
                    console.log(error);
                    // Handle error response
                });
            console.log(formData)
        }
        if (selectedOption === 'Admin') {
            axios.post('http://localhost:4000/register/adminLogin', formData)
                .then(response => {
                    if (response.data.message === 'Login successful') {
                        navigate('/adminHome')
                    }
                })
                .catch(error => {
                    console.log(error);
                    // Handle error response
                });
            console.log(formData)

        }
        if (selectedOption === 'Customer') {
            axios.post('http://localhost:4000/register/customerLogin', formData)
                .then(response => {
                    console.log(response.data);
                    // Handle success response
                })
                .catch(error => {
                    console.log(error);
                    // Handle error response
                });
            console.log(formData)

        }
    }
    return (
        <form className='main'>
            <div className='topic'>
                <h3>Create Your Shop</h3>
            </div>
            <div className='form'>
                <div className='Email'>
                    <label className='emaillabel'>Shop Name</label>
                    <input type="email" name="Email" className="FormControl" placeholder="Enter Name" onChange={handleInputChange} />
                </div>
                <label htmlFor="image" className='emaillabel' >Select an image:</label>
                <input
                    type="file"
                    id="image"
                    name="image"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="FormControl"
                />
                <button className='signup' onClick={handleUser}>Create Shop</button>
            </div>
        </form>
    )
}
export default CreateShopForm;