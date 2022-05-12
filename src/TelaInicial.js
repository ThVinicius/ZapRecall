import React from 'react'
export default function TelaInicial({ setIniciar }) {
  return (
    <div className="telaInicial">
      <img
        src="./images/logo.png"
        alt="logo em formato de um relampago"
        style={{ width: '36.26vw', height: '24.13vh' }}
      />
      <h1>ZapRecall</h1>
      <div className="botaoIniciar" onClick={() => setIniciar(true)}>
        Iniciar Recall!
      </div>
    </div>
  )
}
