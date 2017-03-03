import React from 'react'
import { ButtonGroup, Button } from 'react-bootstrap'

const styles = {
  active: {
    color: "#FF1FA9",
    backgroundColor: "white"
  },
  inactive: {
    backgroundColor: "#F5F5F5"
  }
}

export const NavBar = ({ items, activeItem, handleClick }) => {
  let buttons = items.map((item, index) => {
    let isActive = item === activeItem
    return (
      <Button
        key={index}
        onClick={handleClick.bind(this, index)}
        style={isActive ? styles.active : styles.inactive}>
        {item.toUpperCase()}
      </Button>
    )
  })
  return <ButtonGroup>{buttons}</ButtonGroup>
}
