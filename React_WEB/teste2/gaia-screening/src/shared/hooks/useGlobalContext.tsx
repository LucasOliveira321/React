import { createContext, useContext, useState } from "react";
import { setAuthorizationToken } from "../functions/connection/auth";



interface GlobalData{
    accessToken?: string;
}

interface GlobalContextProps {
    globalData: GlobalData;
    setGlobalData: (globalData: GlobalData) => void
}

const GlobalContext = createContext({} as GlobalContextProps);

interface GlobalProviderProps{
    children: React.ReactNode;
}

export const GlobalProvider = ({children}: GlobalProviderProps) => {
    const [globalData, setGlobalData] = useState<GlobalData>({});
    return(
        <GlobalContext.Provider value={{globalData, setGlobalData}}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => {
    const { globalData, setGlobalData } = useContext(GlobalContext);

    const setAccessToken = (accessToken: string) => {
        setAuthorizationToken(accessToken);
        setGlobalData({
            ...globalData,
            accessToken
        })
    }

    return {
        accessToken: globalData?.accessToken,
        setAccessToken,
    }
}