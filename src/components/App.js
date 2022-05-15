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
  },
  {
    name: 'HTML',
    deck: [
      {
        question: 'O que significa HTML?',
        answer:
          'É a sigla para HyperText Markup Language, em português, Linguagem para marcação de hipertexto.'
      },
      {
        question: 'O que é hipertexto?',
        answer:
          'É todo o texto de um documento web que pode se interligar a outros documentos web por meio de um link.'
      },
      {
        question: 'O que é renderização?',
        answer:
          'É a ação de transformar uma marcação HTML em algo legível para o usuário.'
      },
      {
        question: 'O que é o elemento title?',
        answer: 'É o elemento que determina o título do documento.'
      },
      {
        question: 'O que é a utf-8?',
        answer: 'É a codificação padrão a ser utilizada em um documento html.'
      },
      {
        question: 'O que é o elemento body?',
        answer:
          'É a seção do documento que contém tudo o que será exibido ao usuário após a renderização.'
      }
    ]
  },
  {
    name: 'CSS',
    deck: [
      {
        question: 'O que é o seletor de uma regra CSS?',
        answer:
          'É o elemento ou elementos da marcação HTML nos quais a regra CSS será aplicada.'
      },
      {
        question: 'O que é a propriedade de uma declaração?',
        answer:
          'A propriedade é a característica do seletor que será estilizada, por exemplo: cor, tamanho.'
      },
      {
        question: 'O que é um seletor universal?',
        answer:
          'Representado pelo símbolo *. É um seletor que altera todos os elementos da marcação.'
      },
      {
        question: 'O que significa RGB?',
        answer: 'Red, green, blue.'
      },
      {
        question: 'O que é o valor initial?',
        answer:
          'É o valor inicial de uma propriedade, todas as propriedades CSS admitem esse valor.'
      },
      {
        question: 'O que é a CSS reset?',
        answer:
          'É uma folha de estilo mundialmente conhecida que padroniza os valores iniciais das propriedades CSS. Foi criada por Eric Meyer.'
      }
    ]
  }
]

function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}

export default function App() {
  const [start, setStart] = React.useState(false)
  const [zapGoal, setZapGoal] = React.useState('')
  const [deck, setDeck] = React.useState('defauld')

  if (deck !== 'defauld') {
    console.log(cards[Number(deck)].deck)
    shuffleArray(cards[Number(deck)].deck)
  }

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
