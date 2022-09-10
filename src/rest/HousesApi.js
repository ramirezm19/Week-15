//Where logic to make network call for the Houses_ENDPOINT. It's own component so that other components can use it when need to make an API call. (in other method, had it tied to the App.js component) - Reusable

//The two methods used to get request and update request (update = add/delete new rooms)

const HOUSES_ENDPOINT = 'https://ancient-taiga-31359.herokuapp.com/api/houses';

//normal class to house a functions/methods for fetch.
class HousesApi {
    get = async () => {
        //using a try/catch in case something goes wrong
        try {
        //makes the call for data
        const resp = await fetch(HOUSES_ENDPOINT);
        //have data returned into json
        const data = await resp.json();
            if (data.length > 3) {
                data.reverse().length = 3;
            }
        return data;
        //(3) is the exception, what went wrong
        } catch(e) {
            console.log('Ooops, fetch is being a bitch', e);
        } 
    }
    //method for PUT (Update), takes a parameter, House, to update it
    put = async (house) => {
        try {
            //want the id from the house to identify it from the other houses in the array, with 2nd object from the request data
            const resp = await fetch(`${HOUSES_ENDPOINT}/${house._id}`, {
                method:'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(house)
            });
            return await resp.json();
         } catch(e) {
            console.log('Ooops, looks like updating the houses has an issue', e);
         }

    }

    post = async (housename) => {
        try {
            //want the id from the house to identify it from the other houses in the array, with 2nd object from the request data
            const resp = await fetch(`${HOUSES_ENDPOINT}`, {
                method:'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({name: housename})
            });
            return await resp.json();
         } catch(e) {
            console.log('Ooops, looks like updating the houses has an issue', e);
         }

    }
}


//putting the HousesApi method into another variable to use in other components.
export const housesApi = new HousesApi();