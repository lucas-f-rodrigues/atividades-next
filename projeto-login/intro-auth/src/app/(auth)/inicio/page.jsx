"use client"

import { AplicationContext } from "@/context/ApplicationContext"
import { signOut } from "next-auth/react"
import { useContext } from "react"

export default function InicioPage(){
    const {token, permissoes} = useContext(AplicationContext)
    return(
        <>
            <>{token}</>
            <h1>Página logada</h1>
            <>teste{permissoes}</>
            <button onClick={async () => {
                await signOut({
                    redirectTo: "/login"
                }) 
            }}>Logout</button>
        </>
    )
}