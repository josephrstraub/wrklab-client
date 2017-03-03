import { connect } from 'react-redux'
import { changeActiveProduct, resetProducts } from '../actions'
import { getVisibleProducts } from '../reducers/products'
import _ from 'lodash'
import Products from '../components/Products'

const mapStateToProps = (state) => ({
  products: getVisibleProducts(state),
  hoveredProductId: state.products.hoveredProductId
})

const mapDispatchToProps = (dispatch) => ({
  changeActiveProduct: (product, context) => {
  	dispatch(changeActiveProduct(product._id))
  	context.router.push(`/products/${product.name}`)
  },
  resetProducts: () => dispatch(resetProducts())
})

const ProductsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Products)

export default ProductsContainer
