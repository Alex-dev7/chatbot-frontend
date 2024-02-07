"use client"
import  { useState, createContext, useContext } from "react"

type DataContextProviderProps = {
    children: React.ReactNode
}

type Annotation = {}; // Assuming annotations is an empty object for now

interface Text {
 value: string;
 annotations: Annotation[];
}

interface Message {
 type: string;
 text: Text;
}

interface Data {
 messages: Message[][];
}

type DataContextType = {
 data: Data | null;
 setData: React.Dispatch<React.SetStateAction<Data | null>>;
};

export const DataContext = createContext<DataContextType | null>(null);



export default function DataContextProvider({children}: DataContextProviderProps) {
    const [data, setData] = useState<Data | null>(null)
    return (
        <DataContext.Provider value={{data, setData}}>
            {children}
        </DataContext.Provider>
    )
}

// custom hook
export function useDataContext() {
    const contextD = useContext(DataContext)
    if (!contextD) {
        throw new Error('useDataContext must be used within a DataContextProvider')
    }
    return contextD
}