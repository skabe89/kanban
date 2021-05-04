import React from 'react'

export default function card(props) {

  return (
    <div onClick={props.handleClick} id={props.key}>
      <h3>Task: {props.card.name}</h3>
      <h4>Description: {props.card.description}</h4>
    </div>
  )
}
