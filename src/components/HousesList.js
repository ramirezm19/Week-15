import React from "react";
import { House } from './House';
import { houseApi, housesApi } from '../rest/HousesApi';
import { NewHouse } from "./NewHouse";

//making a class-based component
export class HousesList extends React.Component {
    //dont need a constructor for the state
    state = {
        //will start as empty array
        houses: []
    };

    componentDidMount () {
        this.fetchHouses();
    }
    fetchHouses = async () => {
        //using the GET method to make a request for the data
        const houses = await housesApi.get();
        //this sets the state of the houses array
        this.setState({ houses });
    };

    updateHouse = async (updatedHouse) => {
        await housesApi.put(updatedHouse);
        //calls the this.setState method to update the state of the houses (the empty array) after the current houses has been updated
        this.fetchHouses();
    };

    render() {
        return (
            //className to do CSS styling
            <div className="houselistmain">
                <div className="newhousearea">
                    <NewHouse />
                </div>
            
                <div className="house-list">
                    {this.state.houses.map((house) => (
                        <House
                            house = {house}
                            key={house._id}
                            updateHouse={this.updateHouse}
                            />
                    ))}
                </div>
            </div>
        )
    }
}

