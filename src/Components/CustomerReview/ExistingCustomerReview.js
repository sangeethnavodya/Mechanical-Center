import axios from "axios";
import React, { useEffect, useState } from "react";

function ExisitngCustomerReview() {
    const [review, setReview] = useState([]);
    const [isReview, setIsReview] = useState(false);

    useEffect(() => {
        async function fetchReviews() {
            try {
                const response = await axios.get('http://localhost:4000/create/review/' + localStorage.getItem('shop_id'));
                setReview(response.data.users);
                console.log(response.data.users)
                setIsReview(response.data.users.length > 0);
            } catch (error) {
                console.error(error);
            }
        }
        fetchReviews();
    }, []);
    
    const cardViews = review?.map((review, index) => (
        <div className="card-review" key={index}>
            <div className="card-container-review">
                <h4 className="item-desc-review-name">{review.Customer_Name}</h4>
                <h5 className="item-desc-review">{review.Review}</h5>
            </div>
        </div>
    ));
    
    

    const noReviews =   <div className="card-review">
    <div className="card-container-review">
        <h4 className="item-desc-review-No">No Reviews Having</h4>
    </div>
</div>

    return (
        <div>
            {isReview ? (
                <div className="item-review">
                    {cardViews}
                </div>
            ) : (
                noReviews
            )}
        </div>
    );
}

export default ExisitngCustomerReview;
