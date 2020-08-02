import axios from "axios";

export type Project = {
    namespace: string;
    admins: string[];
    discovery_date: string;
    last_update: string;
    cause: string;
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
    var builtResponse: Project = {namespace: "we FAILED!", admins: ["someone", "someone_else"], discovery_date: "2020", last_update: "2019", cause: "deployment"};
    console.log("this is running now!");
    // Make a request for a user with a given ID
    apiClient.post('/v1/greylist', {
        "namespace": "apple",
        "admins": ["rachel", "manny"],
        "discovery_date": "3333",
        "last_update": "3334",
        "cause": "creation"
    });

    apiClient.post('/v1/greylist', {
        "namespace": "orang",
        "admins": ["rachel", "manny"],
        "discovery_date": "2233",
        "last_update": "3314",
        "cause": "deployment"
    });

    apiClient.post('/v1/greylist', {
        "namespace": "banna",
        "admins": ["rachel", "manny"],
        "discovery_date": "3311133",
        "last_update": "111111111111222",
        "cause": "yeetus"
    });
    
    var yeet = apiClient.get('/v1/greylist')
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
}

export {getProjects}