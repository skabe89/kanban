import React, {useState} from 'react'

export default function ProjectName(props) {

  const [name, setName] = useState("")
  const [projectName, setProjectName] = useState("")

  const handleChange = (e) => {
    setName(e.target.value)
  }

  const handleSubmit = () => {
    props.handleProName(name)
  }

  return (
    <div>
        <form onSubmit={handleSubmit}>
          <label>Project Name:</label>
          <br/>
          <input type="text" value={name} onChange={handleChange}></input>
          <br/>
          <input type="submit"/>
        </form> 
    </div>
  )
}
