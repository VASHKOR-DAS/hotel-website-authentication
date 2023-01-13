import React from 'react';
import couple from '../../assets/rooms/couple room.jpg'

const CoupleRoom = () => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={couple} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">Shoes!</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default CoupleRoom;