import React from 'react'

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import LandingNav from './LandingNav'
import Mission from './Mission'
import ModalButton from './ModalButton'
import ProductPrice from './ProductPrice'
import ProgressMeter from './ProgressMeter'
import Thumbnails from './Thumbnails'

import '../../styles/Footer.css'


const Footer = () => (
  <footer>
    <section>
      <Route path="/" exact component={Mission} />
      <Route path="/products/:category/:productName" component={ProductPrice} />
    </section>
    <Switch>
      <Route path="/featured/:projectName" component={Thumbnails} />
      <Route path="/products/:category/:productName" component={Thumbnails} />
      <Route path="/process" component={ProgressMeter} />
    </Switch>
    <section style={{textAlign: "right"}}>
      <Switch>
        <Route path="/" exact component={LandingNav} />
        <Route path="/" component={ModalButton} />
      </Switch>
    </section>
  </footer>
)

export default Footer
