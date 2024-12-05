'use client'

import { useEffect, useState } from "react"

export default function CadastrarEventosPage(){

    const [titulo, setTitulo] = useState("")
    const [data, setData] = useState("")
    const [isLoading, setIsLoading] = useState(true)
    const [error, SetError] = useState(null)
    const [mensagem, setMensagem] = useState(null)

    async function handleSubmit(event){
        event.preventDefault()
        try{
            let evento = {
                titulo: titulo,
                data: data
            }
            const response = await fetch('http://localhost:3000/eventos', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body:
                    JSON.stringify(evento)
            })

            if (!response.ok) throw new Error('Erro ao cadastrar o evento')
            setMensagem("Evento Cadastrado com sucesso!")
            setData('')
            setTitulo('')
        }catch(e){
            SetError(e.mensagemb)
        }
    }

    return(
        <>
            <h1>Cadastro de eventos</h1>
            <div>{mensagem && mensagem}</div>
            <div>{error && error}</div>
            <form onSubmit={handleSubmit}>
                <div className="m-2">
                    <label htmlFor="titulo" className="m-2">Título</label>
                    <input type="text" 
                            id="titulo" 
                            value={titulo}
                            onChange={e => setTitulo(e.target.value)}
                            className="text-white p-2 bg-gray-800"/>
                </div>
                <div className="m-2">
                    <label htmlFor="data" className="m-2">Data</label>
                    <input type="date"
                            id="data" 
                            value={data}
                            onChange={e => setData(e.target.value)}
                            className="text-white p-2  bg-gray-800"/>
                </div>
                <div className="m-2">
                    <input type="submit" value="Cadastrar" className="p-2 bg-blue-700 text-white"/>
                </div>
            </form> 
        </>
    )
}