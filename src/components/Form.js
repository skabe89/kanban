import React, {useState} from 'react'

export default function Form(props) {

  const [name, setName] = useState("")
  const [desc, setDesc] = useState("")
  const [status, setStatus] = useState(0)

  const states = ["To-Do", "In Progress", "Testing", "Done"]

  const createCard = (e) => {
    e.preventDefault();
    let card = {
      name: name,
      description: desc,
      status: states[status]
    }

    props.addCard(card)
    setName("")
    setDesc("")
    setStatus(0)
  }

  const handleClick = () => {
    setStatus(status < 3 ? status + 1 : 0)
  }


  return (
    <div>
      <form onSubmit={createCard}>
        <label>
          Task Name:
          <input type="text" name="name" value={name} onChange={ (e) => setName(e.target.value) }/>
        </label>
        <br/>
        <label>
          Task Description:
          <textarea name="desc" value={desc} onChange={ (e) => setDesc(e.target.value) }/>
        </label>
        <br/>
          <input type="submit" />
      </form>
      <button onClick={handleClick} >{states[status]}</button>
    </div>
  )
}
