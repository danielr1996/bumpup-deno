import {BumpupFunction} from "../../cli/src/lib/types.ts";

export const log: BumpupFunction = options => data => {
    console.log(data);
    return data;
}
export default log;

export const logOptions: BumpupFunction = options => data => {
    console.log(options);
    return data;
}

export const trace: (fn: Function) => BumpupFunction = fn => options => data => {
    fn();
    return data;
}
