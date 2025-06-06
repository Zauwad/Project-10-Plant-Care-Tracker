import React from 'react';
import { useLoaderData } from 'react-router';

const PlantDetails = () => {
    const plant = useLoaderData();
    console.log(plant);

    const {
        careLevel,
        category,
        description,
        healthStatus,
        image,
        lastWateredDate,
        name,
        nextWateringDate,
        wateringFrequency
    } = plant;

    return (
        <div className="card flex flex-col lg:flex-row p-6 md:p-10 bg-base-100 shadow-sm gap-6">
            <figure className="w-full lg:w-1/2">
                <img
                    src={image}
                    className="w-full h-auto rounded-2xl shadow-2xl object-cover"
                    alt={name}
                />
            </figure>
            <div className="card-body w-full lg:w-1/2">
                <h2 className="text-3xl md:text-4xl font-bold mb-2">{name}</h2>
                <p className="text-gray-700 mb-4">{description}</p>

                <p><span className="font-semibold">Category:</span> {category}</p>
                <p><span className="font-semibold">Care Level:</span> {careLevel}</p>
                <p><span className="font-semibold">Health Status:</span> {healthStatus}</p>
                <p><span className="font-semibold">Watering Frequency:</span> {wateringFrequency}</p>
                <p><span className="font-semibold">Last Watered:</span> {lastWateredDate}</p>
                <p><span className="font-semibold">Next Watering:</span> {nextWateringDate}</p>
            </div>
        </div>
    );
};

export default PlantDetails;
