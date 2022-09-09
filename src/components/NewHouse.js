import React, { useState } from 'react';
import { houseApi, housesApi } from '../rest/HousesApi';

//functional component that takes props
export const NewHouse = () => {
    //use hooks, 
    const [name, setName] = useState('');    

    //need to define onSubmit
    const onSubmit = (e) => {
        e.preventDefault();
        //if name and area are true, have values
        console.log(name)
        housesApi.post(name);
        // e.target.value;
        setName('');
        
    }
    //create the JSX for the return value
    return (
        <div className='newhouse'>
            <h2> Add a new House</h2>
            {/* creating a form */}
            <form onSubmit={onSubmit}>
                {/* when the text on the input changes, calling the setName method and setting it to the target value*/}
                <input
                    type='text'
                    placeholder='Name of your new house'
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    name={name}
                />
                <button className='addRoom' type='submit'>Add House</button>
            </form>
        </div>
    )
};