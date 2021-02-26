import {semver} from '../deps.ts'
import {BumpupFunction} from "../deps.ts";
import * as log from "https://deno.land/std@0.84.0/log/mod.ts";

const determine: BumpupFunction = options => data => {
    if(!('version' in data)){
        log.error(`version doesn't exist in data`)
        return data;
    }if(!('type' in data)){
        log.error(`type doesn't exist in data`)
        return data;
    }
    let returnData;
    if (data.type === 'none') {
        log.debug('type was none, therefore newVersion = version')
        returnData = {...data, newVersion: data.version};
    } else {
        const releaseIdentifier = options.pre ? `pre${data.type}` : data.type;
        log.debug(`releaseIdentifier: ${releaseIdentifier}`)
        // @ts-ignore
        returnData = {...data, newVersion: semver.inc(data.version as string, releaseIdentifier as semver.ReleaseType, options.preid) as string};
    }
    log.info(`${returnData.newVersion !== returnData.version ? `new version is ${returnData.newVersion}` : `no new version`}`)

    return returnData;
};

export default determine;