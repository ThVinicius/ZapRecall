import react from 'react'
import Footer from './Footer'

function Card({ pergunta, resposta, num }) {
  const [valor, setValor] = react.useState(false)
  const [responder, setResponder] = react.useState(false)
  const [icon, setIcon] = react.useState('')

  let color = ''
  switch (icon) {
    case 'close-circle':
      color = 'colorRed'
      break
    case 'help-circle':
      color = 'colorOrange'
      break
    case 'checkmark-circle':
      color = 'colorGreen'
      break
    default:
      color = ''
  }

  function respondida(string) {
    setResponder(false)
    setIcon(string)
  }

  return !responder ? (
    <div className="pergunta">
      <h2 className={icon === '' ? '' : `riscado ${color}`}>Pergunta {num}</h2>
      {icon === '' ? (
        <ion-icon
          name="play-outline"
          onClick={() => setResponder(true)}
        ></ion-icon>
      ) : (
        <ion-icon name={`${icon}`} class={color}></ion-icon>
      )}
    </div>
  ) : (
    <div className={`card ${valor ? 'virar' : ''}`}>
      <div className="face">
        <div className="texto">{pergunta}</div>
        <img
          src="./images/setinha.png"
          alt="setinha"
          style={{ width: '8vw', height: '3vh' }}
          onClick={() => setValor(true)}
        />
      </div>
      <div className="backFace face">
        <div className="texto">{resposta}</div>
        <div className="opcoes">
          <div onClick={() => respondida('close-circle')}>Não lembrei</div>
          <div onClick={() => respondida('help-circle')}>Quase não lembrei</div>
          <div onClick={() => respondida('checkmark-circle')}>Zap!</div>
        </div>
      </div>
    </div>
  )
}

export default function Contents() {
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
    <div className="tela2">
      <header>
        <img
          src="./images/logo-pequeno.png"
          alt="logo em formato de um relampago"
          style={{ width: '13.86vw', height: '8.99vh' }}
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
          />
        ))}
      </div>
      <Footer />
    </div>
  )
}
