import React, { Component } from 'react'

import { connect } from 'react-redux'

import { getProducts } from '../../actions/works'
import { getVisibleProducts } from '../../reducers/products'

import Masonry from './Masonry'
import { Row, Col } from 'react-bootstrap'

// import DynamicMenu from '../DynamicMenu'
// import Pager from '../Pager'
// import Modules from './Modules'
// import Colors from './Colors'
// import Sizes from './Sizes'
// import SideBar from './SideBar'

class Products extends Component {
  componentDidMount() {
    if (!this.props.products.length) {
      this.props.getProducts()
    }
  }
  render() {
    return (
      <Row>
        <Col xs={6} xsOffset={3} style={{marginTop: "50px"}}>
          <Masonry products={this.props.products} hoveredProductId={this.props.hoveredProductId} />
        </Col>
      </Row>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  hoveredProductId: state.products.hoveredProductId,
  products: getVisibleProducts(state, ownProps)
})

const mapDispatchToProps = (dispatch) => ({
  getProducts: () => dispatch(getProducts())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Products)

