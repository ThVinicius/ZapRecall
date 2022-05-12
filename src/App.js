import React from 'react'
import TelaInicial from './TelaInicial'
import Tela2 from './Tela2'

export default function App() {
  const [iniciar, setIniciar] = React.useState(false)
  return (
    <div className="app">
      {iniciar ? <Tela2 /> : <TelaInicial setIniciar={setIniciar} />}
    </div>
  )
}
