import React from 'react';
import { Link } from 'react-router'; // ✅ Fixed incorrect import

const PlantCard = ({ plant }) => {
    const { name, image, healthStatus, _id } = plant;

    return (
        <div className='rounded-xl shadow-lg border border-gray-200 overflow-hidden transition-transform duration-300 hover:scale-105'>
            <img src={image} alt={name} className='w-full h-52 object-cover' />

            <div className='text-center p-4 bg-white'>
                <h3 className='text-xl font-semibold'>{name}</h3>
                <p className='text-sm text-gray-600 mt-1'>Health: {healthStatus}</p>

                <Link to={`/plantdetails/${_id}`}>
                    <button className='mt-4 px-4 py-2 bg-green-800 text-white rounded-md hover:bg-green-700'>
                        Details
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default PlantCard;
