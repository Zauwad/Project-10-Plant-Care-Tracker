import React, { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthContext';
import EachCell2 from './EachCell2';

const MyPlants = () => {

    const { plantData, user } = useContext(AuthContext);
    console.log(plantData);

    const userPlants = plantData?.filter(plant => {
        return plant.userEmail === user?.email;
    });
    console.log(userPlants);

    return (
        <div className='p-4 md:p-20 overflow-x-auto'>
            <div className="min-w-[600px] md:min-w-0 rounded-box border border-base-content/5 bg-base-100">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Plant Name</th>
                            <th>category</th>
                            <th>Watering Frequency</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* rows */}
                        {
                            userPlants?.map((plant, idx) => (
                                <EachCell2 key={plant._id || idx} plant={plant} />
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyPlants;
