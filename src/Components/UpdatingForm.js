import React, { Component, useEffect, useRef, useState } from 'react'
import './ComponentCss/signup.css'
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';

function UpdatingForm() {
    const [selectedOption, setSelectedOption] = useState("Please choose an option");
    const [formData, setFormData] = useState({
        Name: "",
        CompanyName: "",
        Province: ""
    });
    const navigate = useNavigate();
    const [nameValue, setNameValue] = useState('');
    const [companyNameValue, setCompanyNameValue] = useState('');
    const fuelStationAddFormRef = useRef(null);
    useEffect(() => {
        async function fetchStations() {
            const requese = await axios.get('http://localhost:4000/register/fuelStationGetOne/' + localStorage.getItem('myUpdatingId'));
            console.log(requese.data.Name)
            setNameValue(requese.data.Name)
            setCompanyNameValue(requese.data.CompanyName)
            setSelectedOption(requese.data.Province)
        }
        fetchStations()
    }, [])


    function handleDropdownChange(event) {
        const provinceValue = event.target.value;
        setSelectedOption(provinceValue);

        setFormData((prev) => {
            return { ...prev, Province: provinceValue };
        });
    }

    useEffect(() => {
        setFormData(prevState => ({
          ...prevState,
          Name: nameValue,
          CompanyName: companyNameValue,
          Province:selectedOption
        }));
      }, [nameValue, companyNameValue]);
      
      // Update nameValue and companyNameValue when the user enters input
      const handleNameInputChange = (event) => {
        setNameValue(event.target.value);
      };
      
      const handleCompanyNameInputChange = (event) => {
        setCompanyNameValue(event.target.value);
      };
      
    function handleUpdate(event) {
        event.preventDefault();
        console.log(formData)
        axios.put('http://localhost:4000/register/fuelStationGetOne/'+localStorage.getItem('myUpdatingId'),formData).then(response => {
            console.log(response.data);
            // Handle success response
        })
        .catch(error => {
            console.log(error);
            // Handle error response
        });
        navigate('/adminHome')
    }

    return (
        <form className='main-current-loc' style={{
            marginTop:"120px"
        }}>
            <div className='topic'>
                <h3 className='fuel-add-home-update'>Fuel Station Adding Form</h3>
            </div>
            <div>
                <label style={{color:"white"}}>Fuel Station Name</label>
                <input type="text" name='Name' onChange={handleNameInputChange} value={nameValue} />
            </div>
            <div>
                <label style={{color:"white"}}>Company Name</label>
                <input type="text" name='CompanyName' onChange={handleCompanyNameInputChange} value={companyNameValue} />
            </div>
            <label htmlFor="dropdown" style={{color:"white"}}>Province</label>
            <select id="dropdown" value={selectedOption} onChange={handleDropdownChange}>
                <option value="">--Please choose an option--</option>
                <option value="Western Province">Western Province</option>
                <option value="Southern Province">Southern Province</option>
                <option value="Central Province">Central Province</option>
                <option value="Uva Province">Uva Province</option>
                <option value="Sabaragamuwa Province">Sabaragamuwa Province</option>
                <option value="Nothern Province">Nothern Province</option>
            </select>
            <div className='form'>
                <button className='Add Station' onClick={handleUpdate}>Update Station</button>
            </div>
        </form>
    )
}
export default UpdatingForm