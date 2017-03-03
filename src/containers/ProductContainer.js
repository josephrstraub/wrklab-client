import { connect } from 'react-redux'
import { changeActiveProductImage, changeActiveModule, changeActiveColor, changeActiveFinish, changeActiveSize, resetProducts } from '../actions'
import { getActiveProduct, getActiveProductImages, getVisibleColorChips, getAllModules, getVisibleSizes } from '../reducers/products'
import _ from 'lodash'
import Product from '../components/product/Product'

const mapStateToProps = (state) => {
  return {
    product: getActiveProduct(state),
    images: getActiveProductImages(state),
    activeImage: state.products.activeImageIndex,
    colorChips: getVisibleColorChips(state),
    activeColor: state.products.activeColor,
    modules: getAllModules(state),
    activeModule: state.products.activeModule,
    sizes: getVisibleSizes(state),
    activeSize: state.products.activeSize,
    activeFinish: state.products.activeFinish
  }
}

const mapDispatchToProps = (dispatch) => ({
  changeActiveImage: (index) => dispatch(changeActiveProductImage(index)),
  changeActiveModule: (module) => dispatch(changeActiveModule(module)),
  changeActiveColorCombo: (chip) => {
    dispatch(changeActiveColor(chip.color))
    dispatch(changeActiveFinish(chip.finish || ""))
  },
  changeActiveSize: (size) => dispatch(changeActiveSize(size)),
  resetProducts: (size) => dispatch(resetProducts()),
})

const ProductContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Product)

export default ProductContainer
