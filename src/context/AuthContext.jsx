import { createContext, useEffect, useState } from "react";

export const Context = createContext()

export const AuthContext = ({children}) => {
    const useLocalStore = (key, defaultValue) => {
        const [value, setValue] = useState(() => {
            try{
                const valueData = localStorage.getItem(key)
                return valueData ? JSON.parse(valueData) ?? defaultValue : defaultValue
            }
            catch(err){
                console.log(err);
                return defaultValue
            }
        })
        useEffect(() => {
            localStorage.setItem(key, JSON.stringify(value))
        },[key,value])

        return [value,setValue]
    }

    const [user, setUser] = useLocalStore('user', [
        { id: 'admin', login: 'mohir', password: '123', role: 'admin' }
    ])
    const [token, setToken] = useLocalStore('token', null)
    const [isModal, setIsModal] = useState(false)
    return (
        <Context.Provider value={{token, setToken, user, setUser, isModal, setIsModal}}>
            {children}
        </Context.Provider>
    )
}