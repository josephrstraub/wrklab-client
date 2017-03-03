import React, { Component } from 'react'

import { connect } from 'react-redux'

import { setHoveredProduct } from '../../../actions/works'
import { getActiveCategory, getCategories, getProducts, makeKebab } from '../../../reducers/products'

import _ from 'lodash'

import ReactTooltip from 'react-tooltip'
import { ButtonGroup, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

import '../../../styles/navbar.css'

const styles = {
  active: {
    backgroundColor: "white",
    color: "#FF1FA9"
  },
  hovered: {
    backgroundColor: "#F2F2F2",
    color: "#16D400"
  },
  inactive: {
    backgroundColor: "#F2F2F2",
    color: "black"
  }
}

class ProductFocus extends Component {
  constructor() {
    super()
    this.state = { hoveredProductIndex: null, hoveredCategoryIndex: null }
    this.getFirstProductInCategorySlug = this.getFirstProductInCategorySlug.bind(this)
  }
  componentDidMount() {
    this.setLineProperties()
  }  
  componentDidUpdate() {
    this.setLineProperties()
  }
  handleMouseEnter(index) {
    this.setState({ hoveredProductIndex: index })
  }
  handleMouseLeave() {
    this.setState({ hoveredProductIndex: null })
  }
  setLineProperties() {
    let productButton = document.querySelector('.active-product')
    let categoryButton = document.querySelector('.active-product-category')
    if (productButton !== null && categoryButton !== null) {
      let leftEdge = Math.min(
        productButton.offsetLeft,
        categoryButton.offsetLeft
      )
      let rightEdge = Math.max(
        productButton.offsetLeft + productButton.offsetWidth,
        categoryButton.offsetLeft + categoryButton.offsetWidth
      )
      let width = rightEdge - leftEdge
      this.refs.navbarLine.style.left = `${leftEdge}px`
      this.refs.navbarLine.style.width = `${width}px`
    }
  }
  getFirstProductInCategorySlug(category) {
    const firstProduct = this.props.products.find(product => product.category === category)
    return makeKebab(firstProduct.name)
  }
  render() {
    let { activeCategory, categories, products } = this.props
    let subNav = (
      <div style={{position: "relative", textAlign: "left"}}>
        <div
          ref="navbarLine"
          style={{position: "absolute", width: "200px", height: "3px", backgroundColor: "#FF1FA9", top: "-3px"}}
          className="lined-navbar">
        </div>
        <ButtonGroup style={{top: "0", left: "0"}}>
          {products.filter(product => product.category === activeCategory).map((product, index) => (
            <LinkContainer
              key={index}
              to={`/products/${makeKebab(product.category)}/${makeKebab(product.name)}`}
              activeClassName="active-product active-nav-btn"
              style={ this.state.hoveredProductIndex === index ? styles.hovered : styles.inactive }
              activeStyle={styles.active}
              onMouseEnter={this.handleMouseEnter.bind(this, index, product._id)}
              onMouseLeave={this.handleMouseLeave.bind(this)}
            >
              <Button>{product.name}</Button>
            </LinkContainer>
          ))}
        </ButtonGroup>
      </div>
    )
    let mainNav = (
      <ButtonGroup justified>
        {categories.map((category, index) => (
          <ButtonGroup>
            <LinkContainer
              key={index}
              to={`/products/${makeKebab(category)}/${this.getFirstProductInCategorySlug(category)}`}
              activeClassName="active-product-category active-nav-btn"
              style={ this.state.hoveredCategoryIndex === index ? styles.hovered : styles.inactive }
              activeStyle={styles.active}
              onMouseEnter={() => this.setState({ hoveredCategoryIndex: index })}
              onMouseLeave={() => this.setState({ hoveredCategoryIndex: null })}
              isActive={() => activeCategory === category}
            >             
                <Button>{category.toUpperCase()}</Button>
            </LinkContainer>
          </ButtonGroup>
        ))}
      </ButtonGroup>
    )
    return (
      <div>
        {mainNav}
        <br/>
        {subNav}
      </div>
    )
  }
}

class Products extends Component {
  constructor() {
    super()
    this.state = { hoveredProductIndex: null, hoveredCategoryIndex: null }
  }
  handleMouseEnter(index, id) {
    this.setState({ hoveredProductIndex: index })
    this.props.setHoveredProduct(id)
  }
  handleMouseLeave() {
    this.setState({ hoveredProductIndex: null })
    this.props.setHoveredProduct("")
  }
  render() {
    let { activeCategory, categories, products, setHoveredProduct } = this.props
    let subNav = (
      <div style={{position: "relative"}}>
        <ButtonGroup style={{position: "absolute", top: "0", left: "0"}}>
          {products.filter(product => product.category === activeCategory).map((product, index) => (
            <LinkContainer
              key={index}
              to={`/products/${makeKebab(product.category)}/${makeKebab(product.name)}`}
              style={ this.state.hoveredProductIndex === index ? styles.hovered : styles.inactive }
              activeStyle={styles.active}
              onMouseEnter={this.handleMouseEnter.bind(this, index, product._id)}
              onMouseLeave={this.handleMouseLeave.bind(this)}
            >
              <Button>{product.name}</Button>
            </LinkContainer>
          ))}
        </ButtonGroup>
      </div>
    )
    let mainNav = (
      <ButtonGroup justified>
        {categories.map((category, index) => (
          <ButtonGroup key={index}>
            <LinkContainer
              to={`/products/${makeKebab(category)}`}
              activeClassName="active-nav-btn"
              style={ this.state.hoveredCategoryIndex === index ? styles.hovered : styles.inactive }
              activeStyle={styles.active}
              onMouseEnter={() => this.setState({ hoveredCategoryIndex: index })}
              onMouseLeave={() => this.setState({ hoveredCategoryIndex: null })}
            >
              <Button className="dirt">{category.toUpperCase()}</Button>
            </LinkContainer>
          </ButtonGroup>
        ))}
      </ButtonGroup>
    )
    return (
      <div style={{position: "relative", display: "inline-block"}}>
        {mainNav}
        <br/>
        {subNav}
      </div>
    )
  }
}

const Tooltips = ({ activeCategory, categories, products }) => {
  let buttons = categories.map((category, index) => {
    let tooltip = (
      <ReactTooltip class='extraClass' id={category} place="bottom" delayHide={300} effect='solid'>
        <ButtonGroup vertical>
          {products.filter(product => product.category === category).map((product, index) => (
            <LinkContainer to={`/products/${makeKebab(category)}/${makeKebab(product.name)}`}>
              <Button
                key={index}
                className="hoverable"
              >
                {product.name}
              </Button>
            </LinkContainer>
          ))}
        </ButtonGroup>
      </ReactTooltip>
    )
    return (
      <ButtonGroup key={index}>
        {tooltip}
        <LinkContainer to={`/products/${makeKebab(category)}`} style={styles.inactive}>
          <Button
            data-tip
            data-for={category}
            className="nav-btn hoverable"
          >
            {category.toUpperCase()}
          </Button>
        </LinkContainer>
      </ButtonGroup>
    )
  })
  return <ButtonGroup justified>{buttons}</ButtonGroup>
}

const mapStateToProps = (state, ownProps) => ({
  activeCategory: getActiveCategory(state, ownProps),
  categories: getCategories(state),
  products: getProducts(state)
})

const mapDispatchToProps = (dispatch) => ({
  setHoveredProduct: (id) => dispatch(setHoveredProduct(id))
})

const ProductFocusNavBar = connect(mapStateToProps)(ProductFocus)
const ProductsNavBar = connect(mapStateToProps, mapDispatchToProps)(Products)
const TooltipsNavBar = connect(mapStateToProps)(Tooltips)


export { ProductFocusNavBar, ProductsNavBar, TooltipsNavBar }
