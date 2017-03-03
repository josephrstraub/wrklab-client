import React from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router'
import LandingFooter from '../components/footers/Landing'
import ProcessFooter from '../components/footers/process/index'
import ProductFooter from '../components/footers/Product'
import FeaturedFooter from '../components/footers/Featured'
import DefaultFooter from '../components/footers/Default'

// const VisibleFooter = ({ location, mainMenuIsVisible }) => {
//   if (mainMenuIsVisible) {
//     return <DefaultFooter />
//   }
//   if (location.includes('products/')) {
//     location = '/product'
//   }
//   switch(location) {
//     case '/':
//       return <LandingFooter />
//     case '/featured':
//       return <FeaturedFooter />
//     case '/process':
//       return <ProcessFooter />
//     case '/product':
//       return <ProductFooter />
//     default:
//       return <DefaultFooter />
//   }
// }

const mapStateToProps = (state, ownProps) => ({
  location: ownProps.location,
  mainMenuIsVisible: state.mainMenuIsVisible
})

// export default connect(mapStateToProps)(VisibleFooter)

const VisibleFooter = () => <Route path="process" component={ProcessFooter} />

export default VisibleFooter