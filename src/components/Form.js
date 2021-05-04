import React, {useState} from 'react'

export default function Form(props) {

  const [name, setName] = useState("")
  const [desc, setDesc] = useState("")

  const createCard = (e) => {
    e.preventDefault();
    let card = {
      name: name,
      description: desc
    }

    props.addCard(card)
    setName("")
    setDesc("")
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
    </div>
  )
}
