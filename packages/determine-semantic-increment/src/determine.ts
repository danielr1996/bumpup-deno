import {BumpupFunction, log, semver} from "../deps.ts";

const determine: BumpupFunction = options => data => {
    if (!('version' in data)) {
        log.error(`version doesn't exist in data`)
        return data;
    }
    const releaseIdentifier = options.pre ? `prerelease` : 'patch';
    log.debug(`releaseIdentifier: ${releaseIdentifier}`)
    const returnData = {
        ...data,
        // @ts-ignore
        newVersion: semver.inc(data.version as string, releaseIdentifier as semver.ReleaseType, options.preid) as string
    };
    log.info(`${returnData.newVersion !== returnData.version ? `new version is ${returnData.newVersion}` : `no new version`}`)
    return returnData;
}

export default determine;