import { useState } from 'react'
import './App.css'

function App() {
  const [dado1, setDado1] = useState ("6")
  const [dado2, setDado2] = useState ("6")
  const [resultado, setResultado] = useState ("")
  const [soma1, setSoma1] = useState(0)
  const [desabilitar, setDesabilitar] = useState(false)
  const [pontos, setPontos] = useState(0)

  function jogarDado() {
    let resp = ""
   
    if (soma1 == 0) {
     const dadoE = Math.ceil(Math.random()*6)
     const dadoD = Math.ceil(Math.random()*6)
    let soma = dadoE + dadoD
    if (( soma == 7) || (soma == 11) ){
      resp = "Você Venceu"
      setDesabilitar(true)
    } else if((soma == 2) || (soma == 3) || (soma == 12)){
      resp = "Você Perdeu"
      setDesabilitar(true)
    } else {
      resp = "Jogo Continua"  
    }
    setDado1(dadoE)
    setDado2(dadoD) 
    setResultado(resp)
    setSoma1(soma)
    setPontos(soma)
    }else {
      const dadoE = Math.ceil(Math.random()*6)
      const dadoD = Math.ceil(Math.random()*6)
      let soma = dadoE + dadoD
      if (soma == soma1) {
        resp = "Você Venceu"
        setDesabilitar(true)
      } 
      else if (soma == 7) {
        resp = "Você Perdeu"
        setDesabilitar(true)
      } else {
        resp = "Jogo Continua"
      }
      setDado1(dadoE)
      setDado2(dadoD) 
      setResultado(resp)
      setPontos(soma)
    }
  }

  return(
    <>
     <div className='cabecalho'>
        <img className='imagenLogo' src="craps-table1.png"  alt="" />
        <h1>Craps Game</h1>
        <img className='imagenLogo' src="logo_dados.jpg" alt="" />
     </div>
     <hr/>
     <div className="jogada">
       <img src={`dado${dado1}.png`} alt="" />
       <img src={`dado${dado2}.png`} alt="" />
       <h2>{pontos} pontos !!!     </h2>
     </div>
     <div className='botao'>
       <button className="btn" onClick={jogarDado} disabled={desabilitar}>Jogar Dados</button>
       <h2>{resultado}</h2>
     </div>
    <div className="regra">
      <h4>Regras :</h4>
      <div style={{display: soma1 == 0 ?"block": "none"}}>
      <p> 7 ou 11: Você Vence</p>
      <p> 2, 3 ou 12: Você Perde</p>
      </div>
      <div style={{display: soma1 > 0 ? "block" : "none"}}>
      <p>{soma1} novamente : Você Vence</p>
      <p> 7 : Você Perde</p>
      </div>
      <p> Outro Valor: Jogo Continua</p>
    </div>
    </>
  )
}
export default App