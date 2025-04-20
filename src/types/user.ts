import { StoreInfo, storeInfos } from "./store";

export default interface UserProfile {
  id: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  city: string;
  isActive: boolean;
  shops: StoreInfo[];
}

export const userMock: UserProfile = {
  id: "1",
  firstName: "Kenges",
  lastName: "Nurmukhamet",
  dateOfBirth: "07-09-2005",
  city: "Almaty",
  isActive: true,
  shops: storeInfos,
};
