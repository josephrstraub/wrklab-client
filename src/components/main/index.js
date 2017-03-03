import React from 'react'

import { connect } from 'react-redux'

import { Redirect, Route, Switch } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'

import About from './About'
import FAQ from './FAQ'
import Featured from './Featured'
import MainMenu from './MainMenu'
import Process from './Process'
import Philosophy from './Philosophy'
import PrivacyPolicy from './PrivacyPolicy'
import Products from './Products'
import Product from './product/Product'
import TermsAndConditions from './TermsAndConditions'
import Vision from './Vision'

const spacedToKebab = (str) => {
  return str.replace(/\s/g, "-").toLowerCase()
}

const Main = () => (
  <div>
    <Route path="/about" component={About} />
    <Route path="/faq" component={FAQ} />
    <Route path="/featured/:projectName?" component={Featured} />
    <Route path="/main-menu" component={MainMenu} />
    <Route path="/privacy-policy" component={PrivacyPolicy} />
    <Route path="/process" component={Process} />
    <Route path="/products/:category?" exact component={Products} />
    <Route path="/products/:category/:productName" component={Product} />
    <Route path="/terms-and-conditions" component={TermsAndConditions} />
    <Route path="/vision/:visionName?" component={Vision} />
  </div>
)



export default Main
