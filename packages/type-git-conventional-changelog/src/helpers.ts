export const createTag = (tagPrefix?: string, tag?: string)=>`${tagPrefix? `${tagPrefix}-`:``}${tag}`;