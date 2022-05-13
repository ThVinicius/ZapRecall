import React from 'react'
import Initial from './Initial'
import Contents from './Contents'

export default function App() {
  const [iniciar, setIniciar] = React.useState(false)
  return (
    <div className="app">
      {iniciar ? <Contents /> : <Initial setIniciar={setIniciar} />}
    </div>
  )
}
