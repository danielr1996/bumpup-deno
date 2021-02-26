import {BumpupFunction} from "../deps.ts";

const determine: BumpupFunction = options => data => {
    // @ts-ignore
    const version: number = Number.parseInt(data.version);
    const newVersion = version+1;
    return {...data, newVersion: newVersion.toString()}
}

export default determine;