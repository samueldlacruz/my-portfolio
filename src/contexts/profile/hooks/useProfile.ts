import { useContext } from "react";
import { ProfileContext } from "../profile.context";
import { IProfile } from "../../../interfaces/common/Profile";

export const useProfile = () => {
  const data: IProfile | null = useContext(ProfileContext);
  return { ...data };
};
