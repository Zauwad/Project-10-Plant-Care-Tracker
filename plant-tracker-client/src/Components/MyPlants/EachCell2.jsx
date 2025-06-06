import React from 'react';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const EachCell2 = ({ plant }) => {

    const handleDeleteUser = (userId) => {
        fetch(`https://plant-tracker-server-phi.vercel.app/allplants/${userId}`, {
            method: "DELETE",
        })
            .then(res => {
                res.json()
                Swal.fire({
                    title: "Successfully Deleted Plant",
                    icon: "success",
                    draggable: true
                });
                
            })
            .then(data => {
                console.log('after deletting', data)
            })

    }

    return (

        <tr>
            <th></th>
            <td>{plant.name}</td>
            <td>{plant.category}</td>
            <td>{plant.wateringFrequency}</td>
            <td className='btn bg-green-800 text-white'>
                <Link to={`/updateplant/${plant._id}`}>Update</Link>
            </td>
            <td onClick={() => handleDeleteUser(plant._id)} className='btn bg-green-800 text-white'>Delete</td>
        </tr>

    );
};

export default EachCell2;