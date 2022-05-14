import react from 'react'

export default function Card({ num, pergunta, resposta, setArmazem, armazem }) {
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
  //spread
  function respondida(string, color, type) {
    setResponder(false)
    setIcon(string)
    setArmazem([...armazem, { name: string, color: color, score: type }])
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
          onClick={() => setValor(true)}
        />
      </div>
      <div className="backFace face">
        <div className="texto">{resposta}</div>
        <div className="opcoes">
          <div
            onClick={() =>
              respondida('close-circle', 'colorRed', 'disapproved')
            }
          >
            Não lembrei
          </div>
          <div onClick={() => respondida('help-circle', 'colorOrange', 'okay')}>
            Quase não lembrei
          </div>
          <div
            onClick={() => respondida('checkmark-circle', 'colorGreen', 'okay')}
          >
            Zap!
          </div>
        </div>
      </div>
    </div>
  )
}
