import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";


export const UpdateComponent = ({cid}) => {

    const {store, actions} = useContext (Context)


    const [formData, setFormData] = useState({
        name: store.selected?.name || '',
        email: store.selected?.email  || '',
        address: store.selected?.address  || '',
        phone: store.selected?.phone  || ''
    })

    const handleChange = e =>{
        const {name, value} = e.target
        setFormData({...formData, [name]: value})
        }

    const handleSubmit = e => {
        e.preventDefault();
        actions.updateContact(cid, formData);
    }

    return (
        <div>
            <form className= "form-control" onSubmit={handleSubmit}>
                <input name='name' value={formData.name} onChange={handleChange} requirted className= "form-control" type="text" placeholder= "Name" />
                <input name='email'  value={formData.email} onChange={handleChange} requirted className= "form-control" type="email" placeholder= "E-Mail" />
                <input name='address' value={formData.address} onChange={handleChange} requirted className= "form-control" type="text" placeholder= "Address" />
                <input name= 'phone' value={formData.phone} onChange={handleChange} requirted className= "form-control" type="number" placeholder= "Phone" />
                <input type="submit" value="add"></input>

            </form>
        </div>
    )


}