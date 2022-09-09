import React, { useState } from 'react';
import { houseApi, housesApi } from '../rest/HousesApi';

//functional component that takes props
export const NewHouse = () => {
    //use hooks, 
    const [name, setName] = useState('');
    // const [area, setArea] = useState(undefined);

    //since area a number, validation so that it is a number
    // const handleAreaInput = (e) => {
    //     //using parse to make sure it's an interger and round to 10
    //     const int = parseInt(e.target.value, 10)
    //     //if Area greater or = to 0 (? means true), then pass in. If not (:), then empty string
    //     setArea(int >= 0 ? int : '');
    

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
                    placeholder='name'
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    name={name}
                />
                <button className='addRoom' type='submit'>Add House</button>
            </form>
        </div>
    )
};