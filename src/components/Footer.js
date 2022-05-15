import sad from '../assets/images/sad.png'
import party from '../assets/images/party.png'

export default function Footer({
  card,
  storage,
  setAdd,
  setStart,
  zapGoal,
  setZapGoal,
  setDeck
}) {
  let score = 0
  storage.forEach(item => (item.score === 'zap' ? score++ : undefined))

  function restart() {
    setStart(false)
    setDeck('defauld')
    setZapGoal('')
  }

  switch (true) {
    case storage.length < card.length:
      return (
        <footer>
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
        </footer>
      )

    case storage.length === card.length && score >= Number(zapGoal):
      setAdd(true)
      return (
        <footer className="end">
          <div>
            <img
              src={party}
              alt="emoji de festa"
              style={{ height: '3.44vh' }}
            />
            <h4>Parabéns</h4>
          </div>
          <p>Você não esqueceu de nenhum flashcard!</p>
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
          <div className="restart" onClick={restart}>
            REINICIAR RECALL
          </div>
        </footer>
      )

    case storage.length === card.length && score < Number(zapGoal):
      setAdd(true)
      return (
        <footer className="end">
          <div>
            <img src={sad} alt="emoji triste" style={{ height: '3.44vh' }} />
            <h4>Putz...</h4>
          </div>
          <p>Ainda faltam alguns... Mas não desanime!</p>
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
          <div className="restart" onClick={restart}>
            REINICIAR RECALL
          </div>
        </footer>
      )

    default:
      break
  }
}
