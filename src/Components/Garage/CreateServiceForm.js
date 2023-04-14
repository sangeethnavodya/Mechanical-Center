import React, { useRef, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import ExisitngFuelStation from '../ExistingFuelStation';

function CreateServiceForm() {
    const [selectedOption, setSelectedOption] = useState("Please choose an option");
    const [selectedOptionDistrict,setSelectedOptionDistrict]=useState("Please choose an option")
    const [formData, setFormData] = useState({
        owner_id: localStorage.getItem('owner_id'),
        owner_email:localStorage.getItem('owner_email'),
        SName: "",
        CName: "",
        ServiceType:""
    });
    const navigate = useNavigate();
    const [nameValue, setnameValue] = useState('')
    const [CompanyNameValue, setCompanyNameValue] = useState('')
    const [existing, setexisting] = useState(false)
    const fuelStationAddFormRef = useRef(null);

    function handleInputChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        if (name === 'SName') {
            setnameValue(e.target.value)
        }
        if (name === 'CName') {
            setCompanyNameValue(e.target.value)
        }

        setFormData((prev) => {
            return { ...prev, [name]: value }
        })
    }

    function handleDropdownChange(event) {
        const provinceValue = event.target.value;
        setSelectedOption(provinceValue);

        setFormData((prev) => {
            return { ...prev, ServiceType: provinceValue };
        });
    }

    function handleProvince(event){
        const DistrictValue=event.target.value
        setSelectedOptionDistrict(DistrictValue);

        setFormData((prev) => {
            return { ...prev, District: DistrictValue };
        });
    }

    function handleSubmit(event) {
        event.preventDefault();
        const { Name, CompanyName, Province } = formData;
        console.log(formData)
        axios.post('http://localhost:4000/register/serviceRegister', formData)
            .then(response => {
                console.log(response.data);
                // Handle success response
                if(response.data.massage==='Service added'){
                    navigate('/ownerHome')
                }
            })
            .catch(error => {
                console.log(error);
                // Handle error response
            });
        setnameValue('')
        setCompanyNameValue('')
        setSelectedOptionDistrict('Please choose an option')

    }
    function handleExisting(event) {
        event.preventDefault()
        setexisting(true)
        fuelStationAddFormRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    return (
        <div>
            <form className='main'>
                <div className='topic'>
                    <h3 className='head'>Add Your Service Hear</h3>
                </div>
                <div>
                    <label className='labelHead'>Service Provider Name</label>
                    <input type="text" name='SName' onChange={handleInputChange} value={nameValue} />
                </div>
                <div>
                    <label className='labelHead'>Company Name</label>
                    <input type="text" name='CName' onChange={handleInputChange} value={CompanyNameValue} />
                </div>
                <label htmlFor="dropdown" className='labelHead'>Service Type</label>
                <select id="dropdown" value={selectedOption} onChange={handleDropdownChange}>
                    <option value="">--Please choose an option--</option>
                    <option value="cut and polish">cut and polish</option>
                    <option value="repairs">repairs</option>
                    <option value=" painting">painting</option>
                </select>
                <div className='form'>
                    <button className='Add Station' onClick={handleSubmit}>Add Service</button>
                </div>
            </form>
            <div ref={fuelStationAddFormRef}>
                {existing && <ExisitngFuelStation />}
            </div>
        </div>

    )
}

export default CreateServiceForm;
