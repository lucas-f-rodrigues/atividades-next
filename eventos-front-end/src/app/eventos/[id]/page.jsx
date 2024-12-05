'use client'

import { use } from 'react'

export default function EventosByIdPage({ params }){

    const { id }  = use(params)
    
    return(
        <div>
        pagina com id: {id}
        </div>
    )
}