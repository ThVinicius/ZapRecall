import react from 'react'
import Footer from './Footer'

function Card({ pergunta, resposta }) {
  const [valor, setValor] = react.useState(false)
  const [responder, setResponder] = react.useState(false)
  return !responder ? (
    <div className="pergunta">
      <h2>Pergunta 1</h2>
      <img
        src="./images/Vector.png"
        alt="Seta"
        style={{ width: '5.33vw', height: '3.44vh' }}
        onClick={() => setResponder(true)}
      />
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
          <div>Não lembrei</div>
          <div>Quase não lembrei</div>
          <div>Zap!</div>
        </div>
      </div>
    </div>
  )
}

export default function Tela2() {
  const card = [
    {
      pergunta: 'O que é JSX?',
      resposta: 'JSX é uma sintaxe para escrever HTML dentro do JS'
    },
    {
      pergunta: 'O que é JSX?',
      resposta: 'JSX é uma sintaxe para escrever HTML dentro do JS'
    }
  ]
  return (
    <div className="tela2">
      <div className="topo">
        <img
          src="./images/logo-pequeno.png"
          alt="logo em formato de um relampago"
          style={{ width: '13.86vw', height: '8.99vh' }}
        />
        <h1>ZapRecall</h1>
      </div>
      <div className="conteudo">
        {card.map((item, index) => (
          <Card pergunta={item.pergunta} resposta={item.resposta} key={index} />
        ))}
      </div>
      <Footer />
    </div>
  )
}
