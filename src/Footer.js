export default function Footer({ card, armazem, setAdd, setIniciar }) {
  let score = 0
  armazem.forEach(function (item) {
    if (item.score === 'disapproved') score++
  })

  switch (true) {
    case armazem.length < card.length:
      return (
        <footer>
          <h3>
            {armazem.length}/{card.length} CONCLUÍDOS
          </h3>
          <div className="icons">
            {armazem.map((item, index) => (
              <ion-icon
                class={item.color}
                name={item.name}
                key={index}
              ></ion-icon>
            ))}
          </div>
        </footer>
      )

    case armazem.length === card.length && score === 0:
      setAdd(true)
      return (
        <footer className="fim">
          <div>
            <img
              src="./images/party.png"
              alt="emoji de festa"
              style={{ height: '3.44vh' }}
            />
            <h4>Parabéns</h4>
          </div>
          <p>Você não esqueceu de nenhum flashcard!</p>
          <div className="alinhar">
            <h3>
              {armazem.length}/{card.length} CONCLUÍDOS
            </h3>
            <div className="icons">
              {armazem.map((item, index) => (
                <ion-icon
                  class={item.color}
                  name={item.name}
                  key={index}
                ></ion-icon>
              ))}
            </div>
          </div>
          <div className="reiniciar" onClick={() => setIniciar(false)}>
            REINICIAR RECALL
          </div>
        </footer>
      )

    case armazem.length === card.length && score > 0:
      setAdd(true)
      return (
        <footer className="fim">
          <div>
            <img
              src="./images/sad.png"
              alt="emoji triste"
              style={{ height: '3.44vh' }}
            />
            <h4>Putz...</h4>
          </div>
          <p>Ainda faltam alguns... Mas não desanime!</p>
          <div className="alinhar">
            <h3>
              {armazem.length}/{card.length} CONCLUÍDOS
            </h3>
            <div className="icons">
              {armazem.map((item, index) => (
                <ion-icon
                  class={item.color}
                  name={item.name}
                  key={index}
                ></ion-icon>
              ))}
            </div>
          </div>
          <div className="reiniciar" onClick={() => setIniciar(false)}>
            REINICIAR RECALL
          </div>
        </footer>
      )

    default:
      break
  }
}
