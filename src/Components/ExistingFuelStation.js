import axios from "axios"
import { useEffect, useState } from "react"
import '../Components/ComponentCss/existingFuel.css'

function ExisitngFuelStation() {
    function handleDelete(event) {
        console.log(event)
        axios.delete('http://localhost:4000/register/fuelStation/' + event.id).then(response => {
            console.log(response.data);
            // Handle success response
        })
            .catch(error => {
                console.log(error);
                // Handle error response
            });
    }
    const [fuelStations, setfuelStations] = useState([])
    const tableRows = fuelStations.map((row, index) => (
        <tr key={index}>
            <td>{row.Name}</td>
            <td>{row.CompanyName}</td>
            <td>{row.Province}</td>
            <td><button onClick={() => handleDelete(row)}>Delete</button></td>
            <td><button>Update</button></td>
        </tr>
    ));

    useEffect(() => {
        async function fetchStations() {
            const requese = await axios.get('http://localhost:4000/register/fuelStation');
            console.log(requese.data.massage)
            setfuelStations(requese.data.massage)

        }
        fetchStations()
    }, [])
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Location</th>
                        <th>Delete</th>
                        <th>Update</th>
                    </tr>
                </thead>
                <tbody>
                    {tableRows}
                </tbody>
            </table>
        </div>
    )

}

export default ExisitngFuelStation