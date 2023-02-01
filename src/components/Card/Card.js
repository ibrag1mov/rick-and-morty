import React from "react";
import { Link } from "react-router-dom";

export const Card = ({ image, name, location }) => {
    return (
        <div className="card" style={{ width: '18rem' }}>
            <img src={image} className="card-img-top" alt={name} />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text m-0 fs-5">Last location</p>
                <p className="card-text fs-6">{location}</p>
                <Link to='/' className="btn btn-primary">More</Link>
            </div>
        </div>
    )
}