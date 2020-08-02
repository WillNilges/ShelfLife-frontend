import axios from "axios";

// export type Project = {
//     name: string;
//     id: string;
//     age: number;
//     isPrivate: boolean;
// }

export type Project = {
    name: string;
    quantity: number;
}

const apiClient = axios.create({
    baseURL: 'http://127.0.0.1:3030',
    responseType: 'json',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    }
  });
// const axios = require('axios');

async function getProjects(): Promise<Project[]> {
    //TODO: Age, alphabetical, alphabetical by owner, (owned by admins or not)
    var builtResponse: Project = {name: "An ITEM!", quantity: 1332};
    console.log("this is running now!");
    // Make a request for a user with a given ID
    apiClient.post('/v1/groceries', {
        "name": "apple",
        "quantity": 3
    });
    
    apiClient.get('/v1/groceries')
        .then( (response) => {

            // handle success
            console.log("the api call worked");
            console.log(response.data);
            console.log(response.data.name);
            console.log(response.data.quantity);
            // return [{response}];
        })
        .catch((e) => {
            console.log(e);
            console.log("the api call didn't work!");
        }
    );
    return [builtResponse, ];



    // apiClient.get('/v1/groceries')
    //     .then( (response) => {
    //         // handle success
    //         console.log("the api call worked");
    //         console.log(response.data);
    //         // return [{response}];
    //     })
    //     .catch(() => {
    //         console.log("the api call didn't work!");
    //     }
    // );
        
}

export {getProjects}