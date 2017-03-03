import React, { Component } from 'react'
import { connect } from 'react-redux'
import FeaturedProjectsNavBar from '../components/navbar/Featured'
import MainMenuNavBar from '../components/navbar/MainMenu'
import MainMenuSubmoduleNavBar from '../components/navbar/MainMenuSubmodule'
import ProductsNavBar from '../components/navbar/Products'
import VisionNavBar from '../components/navbar/Vision'

const VisibleNavBar = ({ location, mainMenuIsVisible }) => {
  if (mainMenuIsVisible) {
    return <MainMenuNavBar />
  }
  if ( location.includes('products/') ) {
    location = '/products/'
  }
  switch(location) {
    case '/featured':
      return <FeaturedProjectsNavBar />
    case '/main-menu/faq':
      return <MainMenuSubmoduleNavBar />
    case '/products':
      return <ProductsNavBar productFocus={false}/>
    case '/products/':
      return <ProductsNavBar productFocus={true} />
    case '/vision':
      return <VisionNavBar />
    default:
      return null
  }
}

const mapStateToProps = (state, ownProps) => ({
  location: ownProps.location,
  mainMenuIsVisible: state.mainMenuIsVisible
})

export default connect(mapStateToProps)(VisibleNavBar)
