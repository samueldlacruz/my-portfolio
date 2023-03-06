import getJSONProperty from "../utils/GetJSONProperty"
import profileDataJson from '../data/profile.json';

export const useGetProfileData = (properties: string | string[]) => {
    return getJSONProperty(profileDataJson, properties);
}