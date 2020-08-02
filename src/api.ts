export type Project = {
    name: string;
    id: string;
    age: number;
    isPrivate: boolean;
}

async function getProjects(): Promise<Project[]> {
    //TODO: Age, alphabetical, alphabetical by owner, (owned by admins or not)
    return [{name: "SPEX Site", id: "spex-site", age: 10, isPrivate: true}, ];
}

export {getProjects}