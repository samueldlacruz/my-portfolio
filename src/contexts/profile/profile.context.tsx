import { ReactNode, createContext, useState, useEffect } from "react";
import i18n from "@config/i18n";
import profileEn from '@config/profile.en.json';
import profileEs from '@config/profile.es.json';
import { IProfile } from "@interfaces/common/Profile";

export const ProfileContext = createContext<IProfile | null>(null);

const ProfileProvider = ({ children }: { children: ReactNode }) => {
    const [profile, setProfile] = useState<IProfile>(profileEn as IProfile);

    useEffect(() => {
        const updateProfile = () => {
            const lang = i18n.language;
            setProfile(lang === 'es' ? profileEs as IProfile : profileEn as IProfile);
        };

        updateProfile();
        i18n.on('languageChanged', updateProfile);
        return () => { i18n.off('languageChanged', updateProfile); };
    }, []);

    return (
        <ProfileContext.Provider value={profile}>
            {children}
        </ProfileContext.Provider>
    );
};

export default ProfileProvider;
