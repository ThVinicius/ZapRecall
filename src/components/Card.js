import react from 'react'
import setinha from '../assets/images/setinha.png'

export default function Card({ num, question, answer, setStorage, storage }) {
  const [value, setValue] = react.useState(false)
  const [reply, setReply] = react.useState(false)
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
  function answered(string, color, type) {
    setReply(false)
    setIcon(string)
    setStorage([...storage, { name: string, color: color, score: type }])
  }

  return !reply ? (
    <div className="question">
      <h2 className={icon === '' ? '' : `scratched ${color}`}>
        Pergunta {num}
      </h2>
      {icon === '' ? (
        <ion-icon name="play-outline" onClick={() => setReply(true)}></ion-icon>
      ) : (
        <ion-icon name={`${icon}`} class={color}></ion-icon>
      )}
    </div>
  ) : (
    <div className={`card ${value ? 'turn' : ''}`}>
      <div className="face">
        <div className="text">{question}</div>
        <img src={setinha} alt="setinha" onClick={() => setValue(true)} />
      </div>
      <div className="backFace face">
        <div className="text">{answer}</div>
        <div className="options">
          <div
            onClick={() => answered('close-circle', 'colorRed', 'disapproved')}
          >
            Não lembrei
          </div>
          <div onClick={() => answered('help-circle', 'colorOrange', 'okay')}>
            Quase não lembrei
          </div>
          <div
            onClick={() => answered('checkmark-circle', 'colorGreen', 'zap')}
          >
            Zap!
          </div>
        </div>
      </div>
    </div>
  )
}
