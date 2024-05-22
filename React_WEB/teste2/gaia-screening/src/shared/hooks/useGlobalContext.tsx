import { createContext, useContext, useState } from "react";

type NotificationType = 'success' | 'info' | 'warning' | 'error';

interface NotificationProps{
    message: string;
    type: NotificationType;
}

interface GlobalData{
    notification?: NotificationProps;
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

    const setNotification = (message: string, type: NotificationType) => {
        setGlobalData({
            ...globalData,
            notification: {
                message,
                type
            }
        })
    }

    return {
        notification: globalData?.notification,
        setNotification
    }
}