import { ReactNode, createContext } from "react";
import { IProfile } from "../../interfaces/common/Profile";
import profileDataJson from '../../config/profile.json';

export const ProfileContext = createContext<IProfile | null>(null)

export const ProfileProvider = ({ children }: { children: ReactNode }) => {

    return (
        <ProfileContext.Provider value={profileDataJson as IProfile}>
            {children}
        </ProfileContext.Provider>
    )
}