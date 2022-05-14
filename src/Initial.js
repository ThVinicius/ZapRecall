import React from 'react'
export default function TelaInicial({ setIniciar }) {
  return (
    <div className="telaInicial">
      <img src="./images/logo.png" alt="logo em formato de um relampago" />
      <h1>ZapRecall</h1>
      <div className="botaoIniciar" onClick={() => setIniciar(true)}>
        Iniciar Recall!
      </div>
    </div>
  )
}
