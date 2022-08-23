import {createContext, Dispatch, SetStateAction} from 'react';

export interface IAppContext {
    isAuth: boolean;
    isLoading: boolean;
    setIsAuth: Dispatch<SetStateAction<boolean>>
}

export const LogContext = createContext<IAppContext> ({isAuth: false, isLoading: true, setIsAuth: () => false});