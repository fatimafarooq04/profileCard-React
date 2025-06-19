import React, { useState } from 'react'

const Card = ({user}) => {
    // console.log(props);
    const [showMore,setShowMore]=useState(false);
    const toggleDetails=()=>{
        setShowMore(!showMore);
    };

    return (
        <div className="card">
            <div className="cardContent">

                <img src="/images/profile.jpg" alt="" />
                <div className="details">
                    <h3 className="name">{user.name}</h3>
                    <p className="experience">{user.experience}</p>
                    <button className="showmore" onClick={toggleDetails}>{showMore?"Show less":"Show More"}</button>
                    {showMore&&(
                        <div className="extra-details">
                            <p>{user.email}</p>
                            <p>{user.phone}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>)
}

export default Card