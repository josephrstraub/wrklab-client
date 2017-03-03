import React from 'react'

import { Row, Col } from 'react-bootstrap'

import CircleButton from './CircleButton'
import MainMenuSubmodulesNavBar from './navbar/MainMenuSubmodules'
import FeaturedNavBar from './navbar/Featured'
import Logo from './Logo'
import MainMenuNavBar from './navbar/MainMenu'
import { ProductFocusNavBar, ProductsNavBar, TooltipsNavBar } from './navbar/Products'
import VisionNavBar from './navbar/Vision'

import '../../styles/Header.css'

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

const Header = () => (
  <Row className="header">
    <Col className="logo-container" xs={2}>
      <Route path="/" component={Logo} />
    </Col>
    <Col xs={8} md={6} mdOffset={1} style={{paddingTop: "20px"}}>
      <Route path="/faq" component={MainMenuSubmodulesNavBar} />
      <Route path="/about" component={MainMenuSubmodulesNavBar} />
      <Route path="/terms-and-conditions" component={MainMenuSubmodulesNavBar} />
      <Route path="/privacy-policy" component={MainMenuSubmodulesNavBar} />
      <Route path="/featured" component={FeaturedNavBar} />
      <Route path="/main-menu" component={MainMenuNavBar} />
      <Route path="/products" exact component={TooltipsNavBar} />
      <Route path="/products/:category" exact component={ProductsNavBar} />
      <Route path="/products/:category/:productName" exact component={ProductFocusNavBar} />
      <Route path="/vision" component={VisionNavBar} />
    </Col>
    <Col xs={2} mdOffset={1} style={{textAlign: "right"}}>
      <Route path="/" component={CircleButton} />
    </Col>
  </Row>
)

export default Header
