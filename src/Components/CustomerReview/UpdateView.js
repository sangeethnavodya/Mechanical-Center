import axios from "axios";
import React, { useState } from "react";

function UpdateView(Prop) {
    console.log(Prop)
  
    const [formData, setFormData] = useState({
        Review: "",
        Shop_id: localStorage.getItem('shop_id'),
        Customer_Name: localStorage.getItem('customer_name'),
        star: 0
    });
    const [nameValue, setnameValue] = useState('')
    const [reviewAdded, setReviewAdded] = useState(false)
    const [selectedOption, setSelectedOption] = useState("Rate this shop");
    
     async function handleSubmit(event) {
        event.preventDefault();
        console.log('e')
        await axios.put('http://localhost:4000/create/'+Prop.data._id,formData).then(u=>{
            console.log(u)
            Prop.onUpdate();
        })

    }
    function handleInputChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        if (name === 'Review') {
            setnameValue(e.target.value)
        }
        setFormData((prev) => {
            return { ...prev, [name]: value }
        })
    }
    function handleDropdownChange(event) {
        const provinceValue = event.target.value;
        setSelectedOption(provinceValue);

        setFormData((prev) => {
            return { ...prev, star: provinceValue };
        });
    }
    return (
        <div>
            <form className='main-review'>
                <div className='topic-review'>
                    <h3 className='head-review'>Update Review</h3>
                </div>
                <div>
                    <label className='labelHead-review'>Add A Review</label>
                    <input type="text" name='Review' onChange={handleInputChange} value={nameValue} placeholder={Prop.data.Review} />
                </div>
                <label htmlFor="dropdown" className='labelHead'>Rate this shop</label>
                <select id="dropdown" value={selectedOption} onChange={handleDropdownChange}>
                    <option value="">--Please choose an option--</option>
                    <option value="1">1 star</option>
                    <option value="2">2 star</option>
                    <option value="3">3 star</option>
                    <option value="4">4 star</option>
                    <option value="5">5 star</option>
                    <option value="6">6 star</option>
                </select>
                <div className='form--review'>
                    <button className='Add Station' onClick={handleSubmit}>Update Review</button>
                </div>
            </form>
        </div>
    )
}

export default UpdateView