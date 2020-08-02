import axios from "axios";

export type Project = {
    name: string;
    id: string;
    age: number;
    isPrivate: boolean;
}

// export type Project = {
//     name: string;
//     quantity: number;
// }

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
    var builtResponse: Project = {name: "An ITEM!", id: "1332", age: 289, isPrivate: true};
    console.log("this is running now!");
    // Make a request for a user with a given ID
    apiClient.post('/v1/groceries', {
        "name": "apple",
        "id": "apple287189211",
        "age": 3,
        "isPrivate": false
    });

    apiClient.post('/v1/groceries', {
        "name": "orang",
        "id": "99999",
        "age": 3,
        "isPrivate": false    });

    apiClient.post('/v1/groceries', {
        "name": "one",
        "id": "8181881",
        "age": 3,
        "isPrivate": false
    });
    
    var yeet = apiClient.get('/v1/groceries')
        .then( (response) => {

            // handle success
            console.log("the api call worked");
            console.log(response.data);
            console.log(response.data[Object.keys(response.data)[0]].name);
            // console.log(response.data.apple);
            // console.log(response.data.quantity);
            return [response.data[Object.keys(response.data)[0]], response.data[Object.keys(response.data)[1]], response.data[Object.keys(response.data)[2]]];
        })
        .catch((e) => {
            console.log(e);
            console.log("the api call didn't work!");
                return [builtResponse, ];

        }
    );
    return yeet;

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