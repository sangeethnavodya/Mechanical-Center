import { isEditable } from "@testing-library/user-event/dist/utils";
import axios from "axios";
import React, { useEffect, useState } from "react";
import CountWise from "./CountWise";

function ShopCount() {
    const [owner, setOwner] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        async function fetch() {
            setIsLoading(true)
            await axios.get('http://localhost:4000/register/getAll').then(
                user => {
                    setOwner(user.data.massage);
                    //  for(let i=0;i<user.data.count;i++){
                    //     console.log(user.data.massage[i]._id)
                    //     setOwner(user.data.massage[i]._id);
                    //  }
                    setIsLoading(false)

                }
            )
        }
        fetch()
    }, [])
    if (isLoading) {
        return (<div>
            Loading
        </div>)
    }
    return (
        <div>
            {owner.map((key, index) => (
                <div><CountWise data={key._id}/></div>
            ))}
        </div>
    )

}

export default ShopCount