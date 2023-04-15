import axios from "axios";
import React, { useState, useEffect } from "react";
import './CustomerReviewCSS/review.css'
import ExisitngCustomerReview from "./ExistingCustomerReview";

function AddReview() {
    const [formData, setFormData] = useState({
        Review: "",
        Shop_id: localStorage.getItem('shop_id'),
        Customer_Name:localStorage.getItem('customer_name')
    });
    const [nameValue, setnameValue] = useState('')
    const [reviewAdded, setReviewAdded] = useState(false)

    useEffect(() => {
        if (reviewAdded) {
            setReviewAdded(false)
        }
    }, [reviewAdded])

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

    function handleSubmit(event) {
        event.preventDefault();
        axios.post('http://localhost:4000/create/review', formData)
            .then(response => {
                console.log(response.data);
                // Handle success response
                setReviewAdded(true)
            })
            .catch(error => {
                console.log(error);
                // Handle error response
            });
        setnameValue('')
    }

    return (
        <div>
            <ExisitngCustomerReview key={reviewAdded}/>
            <form className='main-review'>
                <div className='topic-review'>
                    <h3 className='head-review'>Customer Review</h3>
                </div>
                <div>
                    <label className='labelHead-review'>Add A Review</label>
                    <input type="text" name='Review' onChange={handleInputChange} value={nameValue} />
                </div>
                <div className='form--review'>
                    <button className='Add Station' onClick={handleSubmit}>Add Review</button>
                </div>
            </form>
        </div>
    )
}

export default AddReview
