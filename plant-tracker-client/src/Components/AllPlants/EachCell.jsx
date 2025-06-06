import React from 'react';
import { Link } from 'react-router';

const EachCell = ({ plant }) => {
    console.log(plant)
    const plants = plant[0];
    const index = plant[1];



    return (
        <tr>
            <th>{index + 1}</th>
            <td className="text-sm md:text-base">{plants.name}</td>
            <td className="text-sm md:text-base">{plants.category}</td>
            <td className="text-sm md:text-base">{plants.wateringFrequency}</td>
            <td className="text-sm md:text-base">{plants.nextWateringDate}</td>
            <td>
                <Link
                    to={`/plantdetails/${plants._id}`}
                    className='btn btn-sm md:btn-md bg-green-700 text-white whitespace-nowrap'
                >
                    Details
                </Link>
            </td>
        </tr>
    );
};

export default EachCell;
