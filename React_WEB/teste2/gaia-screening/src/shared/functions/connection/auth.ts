import { AUTHORIZARION_KEY } from "../../constants/authorizationConstants";
import { getItemStorage, removeItemStorage, setItemStorage } from "./storageProxy";

export const unsetAuthorizationToken = () => removeItemStorage(AUTHORIZARION_KEY);

export const setAuthorizationToken = (token: string) => {
    if(token){
        setItemStorage(AUTHORIZARION_KEY, token);
    }
}

export const getAuthorizationToken = () => getItemStorage(AUTHORIZARION_KEY);