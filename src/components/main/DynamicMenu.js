import React from 'react'

import DynamicMenuItem from './DynamicMenuItem'

import '../../styles/DynamicMenu.css'

const DynamicMenu = ({ activeIndex, menuItems, handleClick, match }) => {
	return (
		<div className="dynamic-menu">
			{
				menuItems.map((menuItem, index)=> (
					<DynamicMenuItem key={index} activeIndex={activeIndex} item={menuItem} handleClick={handleClick} match={match} />
				))
			}
		</div>
	)
}

export default DynamicMenu
