import { createSelector } from 'reselect'
import _ from 'lodash'

const initialState = {
  data: [],
  activeImageIndex: 0,
  activeModule: "",
  activeColor: "",
  activeFinish: "",
  activeSize: "",
  hoveredProductId: ""
}

export const products = (state = initialState, action) => {
  switch (action.type) {
    case 'RECEIVE_PRODUCTS':
      return {
        ...state,
        data: action.products
      }
    case 'SET_ACTIVE_PRODUCTS_CATEGORY':
      return {
        ...state,
        activeCategory: action.category
      }
    case 'SET_ACTIVE_PRODUCT_ID':
      return {
        ...initialState,
        data: state.data,
        activeProductId: action.productId,
        activeCategory: _.find(state.data, {_id: action.productId}).category
      }
    case 'SET_ACTIVE_PRODUCT_IMAGE':
      return {
        ...state,
        activeImageIndex: action.index
      }
    case 'SET_ACTIVE_MODULE':
      return {
        ...state,
        activeModule: action.module
      }
    case 'SET_ACTIVE_COLOR':
      return {
        ...state,
        activeColor: action.color
      }
    case 'SET_ACTIVE_FINISH':
      return {
        ...state,
        activeFinish: action.finish
      }
    case 'SET_ACTIVE_SIZE':
      return {
        ...state,
        activeSize: action.size
      }
    case 'SET_HOVERED_PRODUCT':
      return {
        ...state,
        hoveredProductId: action.id
      }
    case 'RESET_PRODUCT_FILTERS':
      return {
        ...initialState,
        data: state.data
      }
    default:
      return state
  }
}

const kebabToSpaced = (str) => str.replace(/-/g, " ")
export const makeKebab = (str) => str.replace(/\s/g, "-").toLowerCase()

export const getActiveCategory = (state, props) => kebabToSpaced(props.match.params.category || "")
const getActiveColor = (state) => state.products.activeColor
const getActiveFinish = (state) => state.products.activeFinish
const getActiveImageIndex = (state) => state.products.activeImageIndex
const getActiveModule = (state) => state.products.activeModule
const getActiveProductName = (state, props) => kebabToSpaced(props.match.params.productName || "")
const getActiveSize = (state) => state.products.activeSize


export const getProducts = (state) => state.products.data

const getActiveProduct = createSelector(
  [getProducts, getActiveProductName],
  (products, activeProductName) => products.find(product => makeKebab(product.name) === activeProductName)
)

export const getActiveProductVariant = createSelector(
  [getActiveProduct, getActiveModule, getActiveColor, getActiveFinish, getActiveSize],
  (product, activeModule, activeColor, activeFinish, activeSize) => {
    if (!product) { return }
    let filters = { module: activeModule, color: activeColor, finish: activeFinish, size: activeSize }
    return _.find(
      product.variants, 
      _.pickBy(filters, v => v)
    )
  }
)

export const getImages = createSelector(
  [getActiveProduct, getActiveProductVariant],
  (activeProduct, activeVariant) => {
    if (!activeProduct) { return [] }
    if (!activeVariant) { return activeProduct.images }
    return activeVariant.images
  }
)

export const getCategories = createSelector(
  [getProducts],
  (products) => products.reduce((cats, product) => {
    if (!cats.includes(product.category)) { return [...cats, product.category] }
    return cats
  }, [])
)

const getPalettes = createSelector(
  [getActiveProduct, getActiveModule],
  (product, module) => {
    if (!product) { return [] }
    let colorPalettes = product.variants.filter(variant => !variant.module || variant.module === module)
      .reduce((palettes, variant) => {
        return [ ...palettes, { color: variant.color, finish: variant.finish } ]
      }, [])
    return _.uniqWith(colorPalettes, _.isEqual)
  }
)

const getSizes = createSelector(
  [getActiveProduct],
  (product) => {
    if (!product) { return [] }
    return product.variants.reduce((sizes, variant) => {
      if (!sizes.includes(variant.size)) { return [...sizes, variant.size] }
      return sizes
    }, [])
  }
)

const getModules = createSelector(
  [getActiveProduct],
  (product) => {
    if (!product) { return [] }
    return product.variants.reduce((modules, variant) => {
      if (variant.module && !modules.includes(variant.module)) {
        return [...modules, variant.module]
      }
      return modules
    }, [])
  }
)

const getImageUrl = createSelector(
  [getActiveImageIndex, getActiveProduct, getActiveProductVariant],
  (activeImageIndex, activeProduct, productVariant) => {
    if (!activeProduct) { return }
    if (!productVariant) { return activeProduct.images[activeImageIndex] }
    return productVariant.images[activeImageIndex]
  }
)

export const getAvailableSizes = createSelector(
  [getActiveProduct, getActiveColor, getActiveFinish, getActiveModule],
  (activeProduct, activeColor, activeFinish, activeModule) => {
    if (!activeProduct) { return [] }
    let filters = _.pickBy({color: activeColor, finish: activeFinish, module: activeModule})
    return _.filter(activeProduct.variants, filters)
      .map(product => product.size)
  }
)

//for main section
export const getViewState = createSelector(
  [getActiveColor, getActiveFinish, getActiveImageIndex, getActiveModule, getActiveProduct, getActiveSize, getAvailableSizes, getPalettes, getImageUrl, getModules, getImages, getProducts, getSizes],
  (activeColor, activeFinish, activeImageIndex, activeModule, activeProduct, activeSize, availableSizes, palettes, imageUrl, modules, images, products, sizes) => ({
    activeColor, activeFinish, activeImageIndex, activeModule, activeProduct, activeSize, availableSizes, palettes, imageUrl, modules, images, products, sizes
  })
)

export const getVisibleProducts = createSelector(
  [getActiveCategory, getProducts],
  (activeCategory, products) => {
    return products.filter(product => product.category === (activeCategory || product.category) )
  }
)
