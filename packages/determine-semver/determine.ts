import {semver} from './deps.ts'
import {BumpupPlugin} from "../cli/src/lib/types.ts";

export const determine: BumpupPlugin = options => data => {
    if(!('version' in data)){
        throw new Error(`version doesn't exist`)
    }if(!('type' in data)){
        throw new Error(`version doesn't exist`)
    }
    let returnData;
    if (data.type === 'none') {
        returnData = {...data, newVersion: data.version};
    } else {
        const releaseIdentifier = options.pre ? `pre${data.type}` : data.type;
        // @ts-ignore
        returnData = {...data, newVersion: semver.inc(data.version as string, releaseIdentifier as semver.ReleaseType, options.preid) as string};
    }
    // logger.info(`${symbols.info} ${returnData.newVersion !== returnData.version ? `new version is ${returnData.newVersion}` : `no new version`}`)

    return returnData;
};

export default determine;