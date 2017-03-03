import React, { Component } from 'react'

import { connect } from 'react-redux'

import { changeActiveColor, changeActiveFinish, changeActiveModule, changeActiveProductImage, changeActiveSize, getProducts, resetFilters } from '../../../actions/works'
import { getViewState } from '../../../reducers/products'

import { Row, Col } from 'react-bootstrap'

import Colors from './Colors'
import DynamicMenu from '../DynamicMenu'
import Modules from './Modules'
import Pager from '../Pager'
import ProductFiltersInterface from './ProductFiltersInterface'
import ProductSideBar from './SideBar'
import Sizes from './Sizes'

class Product extends Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
  }
  componentDidMount() {
    if (!this.props.products.length) {
      this.props.getProducts()
    }
  }
  componentWillReceiveProps(nextProps) {
    if (!nextProps.activeProduct) { return }
    if (!this.props.activeProduct ||  nextProps.activeProduct._id !== this.props.activeProduct._id ||
      nextProps.activeModule !== this.props.activeModule) {
      this.props.changeActiveProductImage(0)
    }
  }
  componentWillUnmount() {
    this.props.resetFilters()
  }
  handleClick(increment) {
    this.props.changeActiveProductImage(this.props.activeImageIndex + increment)
  }
  render() {
    console.log("props are: ", this.props)
    return (
        <Row>
          <Col xs={2}>
            <ProductFiltersInterface {...this.props} />
          </Col>
          <Col xs={6} xsOffset={1}>
            <Pager
                imageUrl={this.props.imageUrl}
                leftArrowVisible={this.props.activeImageIndex > 0}
                rightArrowVisible={this.props.activeImageIndex + 1 < this.props.images.length}
                handleClick={this.handleClick} />
          </Col>
          <Col xs={2} xsOffset={1}>
            <ProductSideBar
              name={this.props.activeProduct && this.props.activeProduct.name}
              description={this.props.activeProduct && this.props.activeProduct.description} />
          </Col>
        </Row>
    )
  }
}

const mapStateToProps = (state, ownProps) => getViewState(state, ownProps)

const mapDispatchToProps = (dispatch) => ({
    changeActiveModule: (module) => dispatch(changeActiveModule(module)),
    changeActiveColor: (color) => dispatch(changeActiveColor(color)),
    changeActiveFinish: (finish) => dispatch(changeActiveFinish(finish)),
    changeActiveProductImage: (index) => dispatch(changeActiveProductImage(index)),
    changeActiveSize: (size) => dispatch(changeActiveSize(size)),
    getProducts: () => dispatch(getProducts()),
    resetFilters: () => dispatch(resetFilters())
})

export default connect(mapStateToProps, mapDispatchToProps)(Product)
