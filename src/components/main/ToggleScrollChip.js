import React from 'react'

const styles = {
	container: {
		position: "absolute",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		left: "50%",
	},
	circle: {
		width: "17px",
		height: "30px",
		border: "1px solid rgba(0,0,0,.3)",
		borderRadius: "100%"
	},
	arrow: {
		width: "10px",
		height: "10px",
		borderColor: "rgba(0,0,0,.3)",
		borderStyle: "solid"
	}
}

const ToggleScrollChip = ({ top, isVisible, scrollDown, scrollUp }) => (
	<div
		style={{...styles.container, visibility: isVisible ? "visible" : "hidden", bottom: top ? "20px" : null, top: !top ? "20px" : null}}
		onClick={top ? scrollDown : scrollUp}>
		<div style={styles.circle}></div>
		<div className="scroll-chip-arrow" style={{...styles.arrow, borderWidth: top ? "0 1px 1px 0" : "1px 0 0 1px", order: top ? 1 : -1 }}></div>
	</div>
)

export default ToggleScrollChip