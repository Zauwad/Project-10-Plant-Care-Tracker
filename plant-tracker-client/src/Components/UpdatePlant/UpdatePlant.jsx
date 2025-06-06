import React, { use } from 'react';
import { AuthContext } from '../../Contexts/AuthContext';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const UpdatePlants = () => {
    const { user } = use(AuthContext);
    const plantData = useLoaderData();
    console.log(plantData);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const image = e.target.image.value;
        const category = e.target.category.value;
        const description = e.target.description.value;
        const careLevel = e.target.careLevel.value;
        const wateringFrequency = e.target.wateringFrequency.value;
        const lastWateredDate = e.target.lastWateredDate.value;
        const nextWateringDate = e.target.nextWateringDate.value;
        const healthStatus = e.target.healthStatus.value;

        const updatedPlant = {
            name, image, category, description, careLevel, wateringFrequency, lastWateredDate, nextWateringDate, healthStatus,
            userEmail: user.email,
            userName: user.displayName
        };

        fetch(`https://plant-tracker-server-phi.vercel.app/allplants/${plantData._id}`, {
            method: "PUT",
            headers: {
                "content-type": 'application/json'
            },
            body: JSON.stringify(updatedPlant)
        })
            .then(res => res.json())
            .then(data => {
                Swal.fire({
                    title: "Updated Successfully!",
                    icon: "success",
                    draggable: true
                });
                console.log('after updating', data);
            });
    };

    return (
        <div className="px-4 py-8">
            <h1 className='text-3xl md:text-4xl text-center mt-4 mb-10'>Update Plant Info</h1>

            <form onSubmit={handleFormSubmit}>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    <fieldset className="rounded-box p-4 bg-base-200">
                        <label className="label">Image</label>
                        <input type="text" name='image' className="input w-full" placeholder="Image Url" defaultValue={plantData.image} />

                        <label className="label">Plant Name</label>
                        <input type="text" name='name' className="input w-full" placeholder="Plant Name" defaultValue={plantData.name} />

                        <label className="label">Category</label>
                        <select name='category' className="input w-full" defaultValue={plantData.category}>
                            <option>succulent</option>
                            <option>fern</option>
                            <option>flowering</option>
                        </select>
                    </fieldset>

                    <fieldset className="rounded-box p-4 bg-base-200">
                        <label className="label">Description</label>
                        <input type="text" name='description' className="input w-full" placeholder="Description" defaultValue={plantData.description} />

                        <label className="label">Care Level</label>
                        <select name='careLevel' className="input w-full" defaultValue={plantData.careLevel}>
                            <option>easy</option>
                            <option>moderate</option>
                            <option>difficult</option>
                        </select>

                        <label className="label">Watering Frequency</label>
                        <input type="text" name='wateringFrequency' className="input w-full" placeholder="Watering Frequency" defaultValue={plantData.wateringFrequency} />
                    </fieldset>

                    <fieldset className="rounded-box p-4 bg-base-200">
                        <label className="label">Last Watered Date</label>
                        <input type="date" name='lastWateredDate' className="input w-full" defaultValue={plantData.lastWateringDate} />

                        <label className="label">Next Watering Date</label>
                        <input type="date" name='nextWateringDate' className="input w-full" defaultValue={plantData.nextWateringDate} />

                        <label className="label">Health Status</label>
                        <input type="text" name='healthStatus' className="input w-full" placeholder="Health Status" defaultValue={plantData.healthStatus} />
                    </fieldset>
                </div>

                <div className="flex justify-center mt-8">
                    <input type="submit" className='btn btn-primary w-full md:w-1/2 lg:w-1/3' value="Update Plant" />
                </div>
            </form>
        </div>
    );
};

export default UpdatePlants;
