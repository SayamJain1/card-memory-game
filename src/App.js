import { useEffect, useState } from "react";
import "./App.css";
import Card from './component/Card'

const cardImages = [
  { src: "/img/helmet-1.png", matched: false },
  { src: "/img/potion-1.png", matched: false },
  { src: "/img/ring-1.png", matched: false },
  { src: "/img/scroll-1.png", matched: false },
  { src: "/img/shield-1.png", matched: false },
  { src: "/img/sword-1.png", matched: false },
];

function App() {
  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)

  //shuffle card
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setCards(shuffledCards)
    setTurns(0)
  };

  // Handle Choice 
  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
  }

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      if (choiceOne.src === choiceTwo.src) {
        setCards((prevState) => {
          // console.log(prevState)
          return prevState.map(card => {
            if (card.src === choiceOne.src) {
              return {...card, matched : true}
            } else {
              return card
            }
          })
        })
        resetChoice()
      } else {
        setTimeout(() => resetChoice(), 1000);
      }
    }
  }, [choiceOne, choiceTwo])

  const resetChoice = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns(prevTruns => prevTruns + 1)
  }

  return (
    <div className="App">
      <h1>Memory Game </h1>
      <button onClick={shuffleCards}>New Game</button>

      <Card cards={cards} handleChoice={handleChoice} choiceOne={choiceOne} choiceTwo={choiceTwo} />

      <h3>Turn {turns}</h3>
    </div>
  );
}

export default App;
