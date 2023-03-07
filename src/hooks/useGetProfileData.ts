import getJSONProperty from "../utils/GetJSONProperty"
import profileDataJson from '../config/profile.json';

export const useGetProfileData = (properties: string | string[]) => getJSONProperty(profileDataJson, properties);