import axios from "axios";

type ProjectListResponse = Project[];

export type Project = {
    name: string;
    admins: string[];
    discovery_date: string;
    last_update: string;
    cause: string;
}

const apiClient = axios.create({
    baseURL: 'http://129.21.50.5:3030',
    responseType: 'json',
    headers: {
      'Content-Type': 'application/json',
    }
  });
// const axios = require('axios');

async function getGraylist(): Promise<Project[]> {
    //TODO: Age, alphabetical, alphabetical by owner, (owned by admins or not)
    const builtResponse: Project = {name: "Failed", admins: ["N/a"], discovery_date: "N/A", last_update: "N/A", cause: "N/A"};
    try {
        const response = await apiClient.get<ProjectListResponse>('/v1/graylist');
        return response.data;
    } catch (err) {
        console.log(err);
        console.log("the api call didn't work!");
        return [builtResponse];
    }
}

async function getWhitelist(): Promise<Project[]> {
    //TODO: Age, alphabetical, alphabetical by owner, (owned by admins or not)
    const builtResponse: Project = {name: "Failed", admins: ["N/a"], discovery_date: "N/A", last_update: "N/A", cause: "N/A"};
    try {
        const response = await apiClient.get<ProjectListResponse>('/v1/whitelist');
        return response.data;
    } catch (err) {
        console.log(err);
        console.log("the api call didn't work!");
        return [builtResponse];
    }
}

export {getGraylist, getWhitelist}

    
    // apiClient.post('/v1/graylist', {
    //     "namespace": "apple",
    //     "admins": ["rachel", "manny"],
    //     "discovery_date": "3333",
    //     "last_update": "3334",
    //     "cause": "creation"
    // });
    