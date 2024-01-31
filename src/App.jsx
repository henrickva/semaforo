import desligado from './img/desligado.png'
import vermelho from './img/vermelho.png'
import amarelo from './img/amarelo.png'
import verde from './img/verde.png'
import './App.css'
import { useEffect, useState } from 'react'

function App() {

  const [imagemAtual, setImagemAtual] = useState(0)
  const [funciona, setFunciona] = useState(false)
  const cores = [desligado,vermelho, amarelo, verde]

  function proximaImagem(){
    setImagemAtual((imagemAtual + 1)% cores.length)
  }

  function inicia(){
    setFunciona(true)
  }

  function para(){
    setFunciona(false)
  }

  useEffect(() =>{
    let intervalo 
    if (funciona){
      intervalo = setTimeout(proximaImagem, 1000)
    }

    return() => clearTimeout(intervalo)
  },[funciona,imagemAtual])
 

  return (
    <div className='container'>
      <h1>Semáforo</h1>

      <img src={cores[imagemAtual]} alt='semaforo ligado ou desligado'/>

      <button 
        onClick={inicia}
        className='btn'
      >
        Iniciar Semáforo
      </button>

      <button 
        onClick={para}
        className='btn'
      >
        Parar Semáforo
      </button>
    </div>
  )
}

export default App
