import React from 'react'

import Colors from './Colors'
import Modules from './Modules'
import Sizes from './Sizes'

const ProductFiltersInterface = (props) => {
	return (
		<div>
			{ props.modules.length ? <Modules {...props} /> : null }
			{ (props.activeModule || !props.modules.length) && <Colors {...props} /> }
			{ (props.activeModule || !props.modules.length) && <Sizes {...props} /> }
		</div>
	)
}

export default ProductFiltersInterface