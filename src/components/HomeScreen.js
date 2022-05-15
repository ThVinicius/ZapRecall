import React from 'react'
import logo from '../assets/images/logo.png'

export default function HomeScreen({
  setStart,
  setZapGoal,
  zapGoal,
  deck,
  setDeck,
  cards
}) {
  const hanleChangeZapGoal = e => {
    let input = e.target.value
    if (input <= cards[deck].deck.length) setZapGoal(e.target.value)
  }

  const hanleChangeDeck = text => {
    setDeck(text.target.value)
    setZapGoal('')
  }

  return (
    <div className="homeScreen">
      <div className="logo">
        <img src={logo} alt="logo em formato de um relampago" />
        <h1>ZapRecall</h1>
      </div>

      <select required value={deck} onChange={text => hanleChangeDeck(text)}>
        <option value="defauld" disabled>
          Escolha seu deck
        </option>
        {cards.map((item, index) => (
          <option value={index} key={index}>
            {item.name}
          </option>
        ))}
      </select>
      <div className="box">
        <input
          className="zapGoal"
          type="number"
          placeholder="Digite sua meta de zaps..."
          value={zapGoal}
          onChange={e => hanleChangeZapGoal(e)}
        />
        {deck !== 'defauld' ? (
          <h6>Digite um número entre 1 e {cards[deck].deck.length}</h6>
        ) : (
          ''
        )}
      </div>
      <div
        className={
          zapGoal > 0 && deck !== 'defauld'
            ? 'startButton'
            : 'startButton disabled'
        }
        onClick={() =>
          setStart(zapGoal > 0 && deck !== 'defauld' ? true : false)
        }
      >
        Iniciar Recall!
      </div>
    </div>
  )
}
