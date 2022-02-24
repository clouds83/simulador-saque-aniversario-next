import { createContext, ReactNode, useContext, useState } from 'react'

type dataContextType = {
    birthMonth: string;
    saldo: string;
    parcela: string;
    setBirthMonth: any;
    setSaldo: any;
    setParcela: any;
}

const dataContextDefault: dataContextType = {
    birthMonth: '1',
    saldo: '0',
    parcela: '0',
    setBirthMonth: () => {},
    setSaldo: () => {},
    setParcela: () => {},
}

const DataContext = createContext<dataContextType>(dataContextDefault);

export function useData() {
    return useContext(DataContext);
}

type ProviderProps = {
    children: ReactNode;
}

export function DataProvider ({ children }: ProviderProps) {
    
    const [birthMonth, setBirthMonth] = useState(1)
    const [saldo, setSaldo] = useState(0)
    const [parcela, setParcela] = useState(0)

    const value = { birthMonth, saldo, parcela, setBirthMonth, setSaldo, setParcela }

    return <DataContext.Provider value= {value} >{ children }</DataContext.Provider>

}