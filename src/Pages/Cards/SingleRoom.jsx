import React from 'react';
import Single from '../../assets/rooms/single room.jpg'


const SingleRoom = () => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={Single} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">Single Room</h2>
                <p>Lorem ipsum dolor sit amet.</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default SingleRoom;