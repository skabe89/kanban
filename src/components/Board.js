import React, {useState} from 'react'
import Card from './Card'
import Form from './Form'

export default function Board() {

  const [cards, setCards] = useState([])
  
  const addCard = (card) => {
    if(card.name && card.description){
    setCards([...cards, card])
    }
  }

  const renderCards = () => {
    console.log("calling render")
    return cards.map((card, i) => <Card key={i} card={card}/>)
  }

  return (
    <div>
      <h1>Board</h1>
        <Form addCard={addCard}/>
        {renderCards()}
        {console.log(cards)}
    </div>
  )
}
