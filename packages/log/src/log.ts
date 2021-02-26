import {BumpupFunction} from "../deps.ts";

export const log: BumpupFunction = options => data => {
    console.log(data);
    return data;
}

export const logOptions: BumpupFunction = options => data => {
    console.log(options);
    return data;
}

export const trace: (fn: Function) => BumpupFunction = fn => options => data => {
    fn();
    return data;
}
