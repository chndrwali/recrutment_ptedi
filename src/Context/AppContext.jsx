/* eslint-disable react-refresh/only-export-components */
import { createContext, useEffect, useState } from "react";

export const AppContext = createContext()

export default function AppProvider({children}) {
    const [token, setToken] = useState(localStorage.getItem('token'))
    const [user, setUser] = useState(null)
    const [role, setRole] = useState('guest')

    async function getUser() {
        const res = await fetch('/api/user', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        if(res.ok) {
            const data = await res.json();   
            setUser(data)
            setRole(data.role || 'guest')
        } else {
            setUser(null);
            setRole('guest')
        }
    }

    useEffect(() => {
        if(token) {
            getUser()
        }
    }, [token])

    return (
        <AppContext.Provider value={{token, setToken, user, setUser, role}}>
            {children}
        </AppContext.Provider>
    )
}