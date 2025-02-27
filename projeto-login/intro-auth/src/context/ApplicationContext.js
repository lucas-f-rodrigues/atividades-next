"use client"

import { createContext, useState } from "react" 

export const AplicationContext = createContext({})

export function AplicationProvider({token, permissoes, children}){
    const [tokenState, setTokenState] = useState(token)

    return(
        <AplicationContext
        value={{token:tokenState, permissoes:permissoes}}
        >
            {children}
        </AplicationContext>
    )
} 