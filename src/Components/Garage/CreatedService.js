import axios from "axios"
import { useEffect, useState } from "react"
import { Navigate, useNavigate } from "react-router-dom";
import './GarageCSS/garage.css'
import {Button} from "antd";
import UService from "./UpdateService";

function CreatedServices() {
    const navigate = useNavigate();
    const [update,setUpdate]=useState(false);
    function handleDelete(event) {
        console.log(event)
        axios.delete('http://localhost:4000/register/service/' + event._id).then(response => {
            console.log(response.data);
            window.location.reload(false);
            // Handle success response
        })
            .catch(error => {
                console.log(error);
                // Handle error response
            });
    }
    function handleUpdate(event){
       setUpdate(true)
    }
    const [services, setServices] = useState([])

    useEffect(() => {
        async function fetchStations() {
            const requese = await axios.get('http://localhost:4000/register/service/'+localStorage.getItem('owner_id'));
            console.log(requese.data)
            setServices(requese.data)
        }
        fetchStations()
    }, [])
    
    const cardList = services.map((service, index) => (
        <div key={index} className="card-services">
            <h3 className="card-sname">{service.SName}</h3>
            <p className="card-cname" >{service.CName}</p>
            <p className="card-service">{service.ServiceType}</p>
            {!update&&<Button onClick={()=>handleUpdate(service)}>Update</Button>}
            <Button onClick={()=>handleDelete(service)} style={{
                color:"red"
            }}>Delete</Button>
            {update &&<UService data={service}/> }
            <div className="card-actions">
            </div>
        </div>
    ));
    
    return (
        <div className="card-list">
            {cardList}
        </div>
    )

}

export default CreatedServices;
