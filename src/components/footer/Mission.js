import React from 'react'
import { connect } from 'react-redux'

const styles = {
  h3: {
    position: "absolute",
    left: "70px",
    textAlign: "left",
    color: "#FF1FA9",
    margin: "0 10px"
  },
  line: {
    position: "absolute",
    top: "10px",
    left: 0,
    width: "50px",
    height: "2px",
    backgroundColor: "#FF1FA9"
  }
}

const Mission = () => (
  <div>
    <div style={{position: "relative", height: "26px"}}>
      <div style={styles.line}></div>
      <h3 style={styles.h3}>01 Work better</h3>
    </div>
    <p style={{textAlign: "left", color: "rgba(0,0,0,.35)"}}>We create amazing collaborative work places for awesome people.</p>
  </div>
)

export default Mission
