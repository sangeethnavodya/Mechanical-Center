import {Button, Input} from "antd";
import FormItemLabel from "antd/es/form/FormItemLabel";
import axios from "axios";
import React, {useState} from "react";
import {Select} from 'antd';

function UService(props) {
    console.log(props)

    const [comment1, setComment] = useState({
        SName: props.data.SName,
        CName: props.data.CName,
        ServiceType: props.data.ServiceType
    })

    const onChange = (event) => {
        setComment({...comment1, "ServiceType": event})
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        window.location.reload()
        console.log(comment1)
        try {
            axios.put('http://localhost:4000/register/service/' + props.data._id, comment1)
                .then(response => {
                    console.log(response.data);

                })
                .catch(error => {
                    console.error(error);
                });
        } catch (error) {
            console.error(error);
        }
    }
    const onSearch = (value) => {
        console.log('search:', value);
    };

    function handleCaption(event) {
        const value = event.target.value;
        console.log(value);
        // use the value for further processing
        setComment({...comment1, "SName": event.target.value})

    }

    function handleCompany(event) {
        const value = event.target.value;
        console.log(value);
        // use the value for further processing
        setComment({...comment1, "CName": event.target.value})
    }

    return (
        <div style={{
            marginLeft: "30px",
            marginRight: "10px"
        }}>
            <Input placeholder="Enter Your New Service Name" className="comment-input" onChange={handleCaption}/>
            <Input placeholder="Enter Your New Company Name" className="comment-input" onChange={handleCompany}/>
            <div>

                <Select
                    showSearch
                    placeholder="Select a person"
                    optionFilterProp="children"
                    onChange={onChange}
                    onSearch={onSearch}
                    filterOption={(input, option) =>
                        (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                    }
                    options={[
                        {
                            value: 'cut and polish',
                            label: 'cut and polish',
                        },
                        {
                            value: 'repairs',
                            label: 'repairs',
                        },
                        {
                            value: ' painting',
                            label: ' painting',
                        },
                    ]}
                style={{
                    width:"100%"
                }}/>
            </div>
            <Button onClick={handleSubmit} className='table-shop-td'>Update</Button>
        </div>
    )

}

export default UService