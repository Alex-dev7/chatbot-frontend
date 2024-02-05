"use client"
import  { useState, createContext, useContext } from "react"

type FileContextProviderProps = {
    children: React.ReactNode
}

type FileContextType = {
    file: File | null
    setFile: React.Dispatch<React.SetStateAction<File | null>>
}


export const FileContext = createContext<FileContextType | null>(null);



export default function FileContextProvider({children}: FileContextProviderProps) {
    const [file, setFile] = useState<File | null>(null)
    return (
        <FileContext.Provider value={{file, setFile}}>
            {children}
        </FileContext.Provider>
    )
}

// custom hook
export function useFileContext() {
    const context = useContext(FileContext)
    if (!context) {
        throw new Error('useFileContext must be used within a FileContextProvider')
    }
    return context
}