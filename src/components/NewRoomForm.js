import React, { useState } from 'react';

//functional component that takes props
export const NewRoomForm = (props) => {
    //use hooks, 
    const [name, setName] = useState('');
    const [area, setArea] = useState(undefined);

    //since area a number, validation so that it is a number
    const handleAreaInput = (e) => {
        //using parse to make sure it's an interger and round to 10
        const int = parseInt(e.target.value, 10)
        //if Area greater or = to 0 (? means true), then pass in. If not (:), then empty string
        setArea(int >= 0 ? int : '');
    }

    //need to define onSubmit
    const onSubmit = (e) => {
        e.preventDefault();
        //if name and area are true, have values
        if (name && area) {
            //calling addNewRoom method and passing in an object with name and area
            props.addNewRoom({name, area});
            //once passed, setting it back to empty
            setName('');
            setArea('');
        } else {
            console.log('invalid input');
        }
        
    }
    //create the JSX for the return value
    return (
        <div>
            <h5> Add a new room</h5>
            {/* creating a form */}
            <form onSubmit={onSubmit}>
                {/* when the text on the input changes, calling the setName method and setting it to the target value*/}
                <input
                    type='text'
                    placeholder='Room Name'
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />
                <br/>
                <input
                    type='text'
                    placeholder='Area in square feet'
                    onChange={handleAreaInput}
                    value={area}
                />
                <button className='addRoom' type='submit'>Add Room</button>
            </form>
        </div>
    )
};