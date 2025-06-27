import './App.css'

function App() {

  return (
    <>
      <div className='container'>
        <h1>Buscar CEP</h1>

        <div className='containerInput'>
          <input className='inputCep' type="text" placeholder='Digite o CEP' />
          <button className='buttonCep'>Buscar</button>
        </div>

        <div className='containerInfo'>
          <h2>CEP: </h2>
          <p>Rua:</p>
          <p>Complemento:</p>
          <p>Bairro:</p>
          <p>Localidade:</p>
        </div>

      </div>
    </>
  )
}

export default App
