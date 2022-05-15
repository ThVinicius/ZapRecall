import sad from '../assets/images/sad.png'
import party from '../assets/images/party.png'

export default function Footer({
  card,
  storage,
  add,
  setAdd,
  setStart,
  zapGoal,
  setZapGoal,
  setDeck
}) {
  let result

  let score = 0
  storage.forEach(item => (item.score === 'zap' ? score++ : undefined))

  switch (true) {
    case storage.length === card.length && score >= Number(zapGoal):
      result = (
        <>
          <div>
            <img
              src={party}
              alt="emoji de festa"
              style={{ height: '3.44vh' }}
            />
            <h4>Parabéns</h4>
          </div>
          <p>Você não esqueceu de nenhum flashcard!</p>
        </>
      )
      break

    case storage.length === card.length && score < Number(zapGoal):
      result = (
        <>
          <div>
            <img src={sad} alt="emoji triste" style={{ height: '3.44vh' }} />
            <h4>Putz...</h4>
          </div>
          <p>Ainda faltam alguns... Mas não desanime!</p>
        </>
      )
      break
    default:
      result = ''
      break
  }

  if (result !== '') setAdd(true)

  function restart() {
    setStart(false)
    setDeck('defauld')
    setZapGoal('')
  }

  return (
    <footer className={add ? 'end' : ''}>
      {result}
      <div className="align">
        <h3>
          {storage.length}/{card.length} CONCLUÍDOS
        </h3>
        <div className="icons">
          {storage.map((item, index) => (
            <ion-icon
              class={item.color}
              name={item.name}
              key={index}
            ></ion-icon>
          ))}
        </div>
      </div>
      {add ? (
        <div className="restart" onClick={restart}>
          REINICIAR RECALL
        </div>
      ) : (
        ''
      )}
    </footer>
  )
}
