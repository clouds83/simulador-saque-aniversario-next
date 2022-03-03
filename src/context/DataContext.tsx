import { createContext, ReactNode, useContext, useState } from 'react'

type dataContextType = {
    birthMonth: number;
    balance: number;
    installment: number;
    setBirthMonth: any;
    setBalance: any;
    setInstallment: any;
}

const dataContextDefault: dataContextType = {
    birthMonth: 1,
    balance: 0,
    installment: 0,
    setBirthMonth: () => {},
    setBalance: () => {},
    setInstallment: () => {},
}

const DataContext = createContext<dataContextType>(dataContextDefault);

export function useData() {
    return useContext(DataContext);
}

type ProviderProps = {
    children: ReactNode;
}

export function DataProvider ({ children }: ProviderProps) {
    
    let [birthMonth, setBirthMonth] = useState(1)
    const [balance, setBalance] = useState(0)
    const [installment, setInstallment] = useState(0)

    const value = { birthMonth, balance , installment, setBirthMonth, setBalance, setInstallment }

    return <DataContext.Provider value= {value} >{ children }</DataContext.Provider>

}