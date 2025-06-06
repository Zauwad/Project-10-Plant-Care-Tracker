import React, { use } from 'react';
import { AuthContext } from '../../Contexts/AuthContext';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router';

const AddPlants = () => {

    const { user } = use(AuthContext)
    console.log(user)
    const navigate = useNavigate()

    const handleFormSubmit = (e) => {
        e.preventDefault()
        const name = e.target.name.value
        const image = e.target.image.value
        const category = e.target.category.value
        const description = e.target.description.value
        const careLevel = e.target.careLevel.value
        const wateringFrequency = e.target.wateringFrequency.value
        const lastWateredDate = e.target.lastWateredDate.value
        const nextWateringDate = e.target.nextWateringDate.value
        const healthStatus = e.target.healthStatus.value

        const newPlant = {
            name, image, category, description, careLevel, wateringFrequency, lastWateredDate, nextWateringDate, healthStatus,
            userEmail: user.email,
            userName: user.displayName
        }


        console.log(newPlant)

        if (name, image, category, description, careLevel, wateringFrequency, lastWateredDate, nextWateringDate, healthStatus) {
            fetch('https://plant-tracker-server-phi.vercel.app/allplants', {
                method: "POST",
                headers: {
                    "content-type": 'application/json'
                },
                body: JSON.stringify(newPlant)
            })
                .then(res => {
                    Swal.fire({
                        title: "Successfully Added Plant",
                        icon: "success",
                        draggable: true
                    });
                    navigate('/home')
                    res.json()
                })
                .then(data => console.log('after adding', data))
        }
        else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Fillup All Credentials!",
                footer: '<a href="#">Why do I have this issue?</a>'
            });
        }


    }

    return (
        <div>
            <h1 className='text-4xl text-center mt-10 mb-10'> Plant Info</h1>

            <form onSubmit={handleFormSubmit}>
                <div className='grid grid-cols-1 md:grid-cols-2 px-4 md:px-20 gap-4'>
                    <fieldset className="fieldset rounded-box w-full p-4">

                        <label className="label">Image</label>
                        <input type="text" name='image' className="input w-full" placeholder="Image Url" />

                        <label className="label">Plant Name</label>
                        <input type="text" name='name' className="input w-full" placeholder="Plant Name" />

                        <label className="label">Category</label>
                        <select type="text" name='category' className="input w-full" placeholder="Category">
                            <option>succulent</option>
                            <option>fern</option>
                            <option>flowering</option>
                        </select>

                    </fieldset>

                    <fieldset className="fieldset rounded-box w-full p-4">

                        <label className="label">Description</label>
                        <input type="text" name='description' className="input w-full" placeholder="Description" />

                        <label className="label">Care Level</label>
                        <select type="text" name='careLevel' className="input w-full" placeholder="care-level">
                            <option>easy</option>
                            <option>moderate</option>
                            <option>difficult</option>
                        </select>

                        <label className="label">Watering Frequency</label>
                        <input type="text" name='wateringFrequency' className="input w-full" placeholder="Watering Frequency" />
                    </fieldset>

                    <fieldset className="fieldset rounded-box w-full p-4">

                        <label className="label">Last Watered Date</label>
                        <input type="date" name='lastWateredDate' className="input w-full" placeholder="Last Watered Date" />

                        <label className="label">Next Watering Date</label>
                        <input type="date" name='nextWateringDate' className="input w-full" placeholder="Next Watering Date" />

                        <label className="label">Health Status</label>
                        <input type="text" name='healthStatus' className="input w-full" placeholder="Health Status" />
                    </fieldset>
                </div>
                <input type="submit" className='btn mx-auto block w-[90%] md:w-[80%] mt-6' />
            </form>
        </div>
    );
};

export default AddPlants;
