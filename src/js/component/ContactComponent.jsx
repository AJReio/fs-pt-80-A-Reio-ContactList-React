import React, { useContext, useState } from "react";
import { Context } from "../store/appContext"
import { useNavigate } from "react-router";

export const ContactComponent = ({id, name, address, email, phone }) => {

const { store, actions } = useContext(Context);
const navigate = useNavigate()

const handleUpdate = () => {
    actions.selectContact(id, name, address, email, phone);
    navigate('/edicion/' +id)
}

const handleDelete = (id) =>{
    actions.delContact(id)

}

    return (
        <article className="card">
            <div className="d-flex">
                <figure>
                    <img
                        className="rounded img-fluid"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtuphMb4mq-EcVWhMVT8FCkv5dqZGgvn_QiA&s"
                        alt={name}
                        width={'200px'}
                        height={'200px'}
                    />
                </figure>
                <div className="container">
                    <p className="fs-4">
                        {name}
                    </p>
                    <p>
                        {address}
                    </p>
                    <p>
                        {email}
                    </p>
                    <p>
                        {phone}
                    </p>
                </div>
                <div>
                    <button className="btn btn-danger" onClick={() => handleDelete(id)}>Delete</button>
                    <button className="btn btn-primary" onClick={handleUpdate}>Update</button>
                </div>
            </div>
        </article>
    );
}


