import React from 'react'
import './Card.css'

function Card({ cards, handleChoice, choiceOne, choiceTwo }) {
    const handleClick = (card) => {
        handleChoice(card)
  }
  // ||
    
  return (
    <div className="card-grid">
        {cards.map((card) => (
          <div className="card" key={card.id}>
            <div className={card === choiceOne || card === choiceTwo || card.matched ? 'flipped' : ''}>
              <img className="front" src={card.src} alt="front" />
                <img
                    className="back"
                    src='/img/cover.png'
                    alt="back"
                    onClick={() => handleClick(card)}
                />
            </div>
          </div>
        ))}
      </div>
  )
}

export default Card