import React, { use, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthContext';
import EachCell from './EachCell';
import { FaArrowDown } from "react-icons/fa";


const AllPlants = () => {

    const [sorted, setSorted] = useState(false)
    const [sortedData, setSortedData] = useState([])

    const { plantData } = use(AuthContext);
    console.log(plantData);

    const handleSorting = () => {
        setSorted(!sorted)
        fetch('https://plant-tracker-server-phi.vercel.app/allplants/sorted')
            .then(res => res.json())
            .then(data => setSortedData(data))
    }

    return (
        <div className='p-4 md:p-20'>
            <div className='flex justify-between'>
                <h1 className='mb-6 text-2xl md:text-3xl font-semibold'>All Plant Details</h1>

                <div className="dropdown dropdown-left dropdown-end">
                    <div tabIndex={0} role="button" className="btn m-1">Sort</div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li><button onClick={handleSorting} className=''>Next Watering Date</button></li>
                    </ul>
                </div>
            </div>

            <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
                <table className="table w-full text-sm md:text-base">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Plant Name</th>
                            <th>Category</th>
                            <th>Watering Frequency</th>
                            {
                                sorted && <th className='flex items-center gap-3'>
                                    Next Watering Date
                                    <FaArrowDown />
                                </th>
                            }
                            {
                                !sorted && <th className='flex items-center gap-3'>
                                    Next Watering Date
                                </th>
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            !sorted && plantData?.map((plant, index) => (
                                <EachCell key={index} plant={[plant, index]} />
                            ))
                        }
                        {
                            sorted && sortedData?.map((plant, index) => (
                                <EachCell key={index} plant={[plant, index]} />
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllPlants;
