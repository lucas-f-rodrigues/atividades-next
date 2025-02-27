"use client"

import { useState } from "react"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"

export default function LoginPage(){

    const router = useRouter()

    const [credencial, setCredencial] = useState("")
    const [senha, setSenha] = useState("")

    async function login(e) {
        e.preventDefault()

    const response = await signIn("credentials",{
        credencial: credencial,
        senha: senha,
        redirect: false
    })

    if (response.ok && !response.error){
        router.replace("/inicio")
        console.log(response)
    }else{
        alert("Login ou senha inválidos")
        console.log(response)
    }


    }

    return(
        <>
            <h1>Login</h1>
            <form onSubmit={login}>
                <div>
                    <label htmlFor="credencial">Credencial</label>
                    <input 
                    className="border-"
                    type="text" 
                    id="credencial" 
                    value={credencial}
                    onChange={(e) => setCredencial(e.target.value)}/>

                </div>
                <div>
                    <label htmlFor="senha">senha</label>
                    <input 
                    type="password" 
                    id="senha" 
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}/>
                </div>
                <div>
                    <input type="submit" value="Login" />
                </div>
            </form>
        </>
    )
}