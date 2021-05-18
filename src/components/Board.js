import React, {useState} from 'react'
import Card from './Card'
import Form from './Form'
import ProjectName from './ProjectName'


export default function Board() {

  const [cards, setCards] = useState([])
  const [current, setCurrent] = useState("")
  const [projectName, setProjectName] = useState("")
  
  const addCard = (card) => {
    if(card.name && card.description){
    setCards([...cards, card])
    }
  }

  const renderCards = (status) => {
    console.log("calling render")
    return cards.filter(card => card.status === status).map((card, i) => <Card key={i} id={i} card={card} handleClick={handleClick}/>)
  }

  const handleClick = (e) => {
    console.log(e.target.key)
  }

  const handleProName = (name) => {
    setProjectName(name)
  }

  return (
    <div>
      <h1>{projectName}</h1>
      { projectName === "" ? <ProjectName handleProName={handleProName} /> : <Form addCard={addCard}/> }
        <div className="all-container">
        <div className="row">
          <div className="flex-container">
            <h1>To-Do</h1>
            {renderCards("To-Do")}
          </div>
          <div className="flex-container">
            <h1>In Progess</h1>
            {renderCards("In Progress")}
          </div>
          <div className="flex-container">
            <h1>Testing</h1>
            {renderCards("Testing")}
          </div>
          <div className="flex-container">
            <h1>Done</h1>
            {renderCards("Done")}
          </div>
        </div>
        </div>
        {console.log(cards)}
    </div>
  )
}
