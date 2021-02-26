import {BumpupFunction, BumpupPlugin} from "../../cli/src/lib/types.ts";

const determine: BumpupFunction = options => data => {
    // @ts-ignore
    const version: number = Number.parseInt(data.version.replace('1.0.0-',''));
    const newVersion = version+1;
    return {...data, newVersion: '1.0.0-'+newVersion.toString()}
}

export default determine;