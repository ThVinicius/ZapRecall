import react from 'react'
import Footer from './Footer'
import Card from './Card'

export default function Contents({ setIniciar }) {
  const [armazem, setArmazem] = react.useState([])
  const [add, setAdd] = react.useState(false)

  const card = [
    {
      pergunta: 'O que é JSX?',
      resposta: 'JSX é uma sintaxe para escrever HTML dentro do JS'
    },
    {
      pergunta: 'O React é __',
      resposta: 'uma biblioteca JavaScript para construção de interfaces'
    },
    {
      pergunta: 'Componentes devem iniciar com __',
      resposta: 'letra maiúscula'
    },
    {
      pergunta: 'Podemos colocar __ dentro do JSX',
      resposta: 'expressões'
    },
    {
      pergunta: 'O ReactDOM nos ajuda __',
      resposta: 'interagindo com a DOM para colocar componentes React na mesma'
    },
    {
      pergunta: 'Usamos o npm para __',
      resposta: 'gerenciar os pacotes necessários e suas dependências'
    },
    {
      pergunta: 'Usamos props para __',
      resposta: 'passar diferentes informações para componentes'
    },
    {
      pergunta: 'Usamos estado (state) para __',
      resposta:
        'dizer para o React quais informações quando atualizadas devem renderizar a tela novamente'
    }
  ]
  return (
    <>
      <div className={add ? 'tela2 resultadoFinal' : 'tela2'}>
        <header>
          <img
            src="./images/logo-pequeno.png"
            alt="logo em formato de um relampago"
          />
          <h1>ZapRecall</h1>
        </header>
        <div className="conteudo">
          {card.map((item, index) => (
            <Card
              pergunta={item.pergunta}
              resposta={item.resposta}
              num={index + 1}
              key={index}
              armazem={armazem}
              setArmazem={setArmazem}
            />
          ))}
        </div>
      </div>
      <Footer
        card={card}
        armazem={armazem}
        setAdd={setAdd}
        setIniciar={setIniciar}
      />
    </>
  )
}
