import React from 'react';
import Family from '../../assets/rooms/family room.jpg'

const FamilyRoom = () => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={Family} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">Family Room</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default FamilyRoom;