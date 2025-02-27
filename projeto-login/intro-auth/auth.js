import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { createCookie } from "@/actions/handleCookie"


export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
        credentials:{
            credencial:{},
            senha:{}
        },
        authorize: async (credentials) =>{
            let response = await fetch("https://frotas-api.app.fslab.dev/login", {
                method: "POST",
                headers: {
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify({
                    credencial: credentials.credencial,
                    senha: credentials.senha
                })
            })

            let data = await response.json()
            if(!data.error){
                await createCookie("access_token",data.data.token, data.data.payload.exp)
                await createCookie("permissoes",'{"testt":1234}', data.data.payload.exp, false)
                return { ...data.data.payload }
            }

            return null
        }
    })
  ],
})

