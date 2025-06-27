import { useState } from 'react'
import './App.css'
import api from './services/api'
import {ToastContainer, toast} from 'react-toastify'

function App() {

  const [input, setInput] = useState('')
  const [cep, setCep] = useState({})

  async function CepSearch() {
    if(input.trim() === ''){
      toast.warn("Digite um CEP")
      return
    }
    try{
      const response = await api.get(`${input}/json`)
      setCep(response.data)
      setInput("")

    }catch{
      toast.error("Erro ao buscar CEP")
      setInput("")
    }
  }

  return (
    <>
      <div className='container'>
        <h1>Buscar CEP</h1>

        <div className='containerInput'>
          <input className='inputCep' type="text" placeholder='Digite o CEP' value={input} onChange={(event)=> setInput(event.target.value)}/>
          <button className='buttonCep' onClick={CepSearch}>Buscar</button>
        </div>

        {Object.keys(cep).length > 0 && (
          <div className='containerInfo'>
            <h2>CEP: {cep.cep} </h2>
            <p>{cep.logradouro}</p>
            <p>{cep.bairro}</p>
            <p>{cep.localidade} - {cep.uf}:</p>
          </div>
        )}

        <ToastContainer/>
      </div>
    </>
  )
}

export default App
