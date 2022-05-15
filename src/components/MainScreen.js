import react from 'react'
import Footer from './Footer'
import Card from './Card'
import logoPequeno from '../assets/images/logo-pequeno.png'

export default function MainScreen({
  setStart,
  zapGoal,
  card,
  setZapGoal,
  setDeck
}) {
  const [storage, setStorage] = react.useState([])
  const [add, setAdd] = react.useState(false)

  return (
    <>
      <div className={add ? 'contents finalResult' : 'contents'}>
        <header>
          <img src={logoPequeno} alt="logo em formato de um relampago" />
          <h1>ZapRecall</h1>
        </header>
        <div className="cards">
          {card.map((item, index) => (
            <Card
              question={item.question}
              answer={item.answer}
              num={index + 1}
              key={index}
              storage={storage}
              setStorage={setStorage}
            />
          ))}
        </div>
      </div>
      <Footer
        card={card}
        storage={storage}
        setAdd={setAdd}
        add={add}
        setStart={setStart}
        zapGoal={zapGoal}
        setDeck={setDeck}
        setZapGoal={setZapGoal}
      />
    </>
  )
}
