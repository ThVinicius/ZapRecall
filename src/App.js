import react from 'react'
export default function App() {
  const [valor, setValor] = react.useState(true)

  return (
    <div className="app">
      <div className="telaInicial escondido">
        <img
          src="./images/logo.png"
          alt="logo em formato de um relampago"
          style={{ width: '36.26vw', height: '24.13vh' }}
        />
        <h1>ZapRecall</h1>
        <div className="botaoIniciar">Iniciar Recall!</div>
      </div>
      <div className="tela2">
        <div className="topo">
          <img
            src="./images/logo-pequeno.png"
            alt="logo em formato de um relampago"
            style={{ width: '13.86vw', height: '8.99vh' }}
          />
          <h1>ZapRecall</h1>
        </div>
        <div className="pergunta">
          <h2>Pergunta 1</h2>
          <img
            src="./images/Vector.png"
            alt="Seta"
            style={{ width: '5.33vw', height: '3.44vh' }}
          />
        </div>
        <div className={valor ? 'card' : 'card virar'}>
          <div className="face">
            <div className="texto">O que é JSX?</div>
            <img
              src="./images/setinha.png"
              alt="setinha"
              style={{ width: '8vw', height: '3vh' }}
              onClick={() => setValor(false)}
            />
          </div>
          <div className="backFace face">
            <div className="texto">
              JSX é uma sintaxe para escrever HTML dentro do JS
            </div>
            <div className="opcoes">
              <div>Não lembrei</div>
              <div>Quase não lembrei</div>
              <div>Zap!</div>
            </div>
          </div>
        </div>
        <div className="concluidos">0/4 CONCLUÍDOS</div>
      </div>
    </div>
  )
}
