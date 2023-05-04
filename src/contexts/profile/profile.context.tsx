import { ReactNode, createContext } from "react";
import profileDataJson from '@config/profile.json';
import { IProfile } from "@interfaces/common/Profile";

export const ProfileContext = createContext<IProfile | null>(null)

const ProfileProvider = ({ children }: { children: ReactNode }) => {

    return (
        <ProfileContext.Provider value={profileDataJson as IProfile}>
            {children}
        </ProfileContext.Provider>
    )
}

export default ProfileProvider