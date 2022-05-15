import React from 'react'
import HomeScreen from './HomeScreen'
import MainScreen from './MainScreen'
import '../assets/css/reset.css'
import '../assets/css/style.css'

const cards = [
  {
    name: 'React',
    deck: [
      {
        question: 'O que é JSX?',
        answer: 'JSX é uma sintaxe para escrever HTML dentro do JS'
      },
      {
        question: 'O React é __',
        answer: 'uma biblioteca JavaScript para construção de interfaces'
      },
      {
        question: 'Componentes devem iniciar com __',
        answer: 'letra maiúscula'
      },
      {
        question: 'Podemos colocar __ dentro do JSX',
        answer: 'expressões'
      },
      {
        question: 'O ReactDOM nos ajuda __',
        answer: 'interagindo com a DOM para colocar componentes React na mesma'
      },
      {
        question: 'Usamos o npm para __',
        answer: 'gerenciar os pacotes necessários e suas dependências'
      },
      {
        question: 'Usamos props para __',
        answer: 'passar diferentes informações para componentes'
      },
      {
        question: 'Usamos estado (state) para __',
        answer:
          'dizer para o React quais informações quando atualizadas devem renderizar a tela novamente'
      }
    ]
  }
]

export default function App() {
  const [start, setStart] = React.useState(false)
  const [zapGoal, setZapGoal] = React.useState('')
  const [deck, setDeck] = React.useState('defauld')

  return (
    <div className="app">
      {start ? (
        <MainScreen
          setStart={setStart}
          zapGoal={zapGoal}
          card={cards[Number(deck)].deck}
          setDeck={setDeck}
          setZapGoal={setZapGoal}
        />
      ) : (
        <HomeScreen
          setStart={setStart}
          zapGoal={zapGoal}
          setZapGoal={setZapGoal}
          deck={deck}
          setDeck={setDeck}
          cards={cards}
        />
      )}
    </div>
  )
}
