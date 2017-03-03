import axios from 'axios'
import _ from 'lodash'

import { getActiveProduct, getVisibleColorChips, activeProductHasModules } from '../reducers/products'


export const getProducts = () => axios.get('/api/products')
    .then(response => ({
      type: 'RECEIVE_PRODUCTS',
      products: response.data
    }))
    .catch(error => console.log(error))

export const changeActiveProductsCategory = (category) => ({ type: 'SET_ACTIVE_PRODUCTS_CATEGORY', category })

export const changeActiveProduct = (productId) => ({type: 'SET_ACTIVE_PRODUCT_ID', productId })

export const resetProducts = () => ({ type: 'RESET_PRODUCTS' })

export const changeActiveModule = (module) => ({ type: 'SET_ACTIVE_MODULE', module })

export const changeActiveProductImage = (index) => ({type: 'SET_ACTIVE_PRODUCT_IMAGE', index })

export const setHoveredProduct = (id) => ({ type: 'SET_HOVERED_PRODUCT', id })

export const changeActiveColor = (color = "") => ({ type: 'SET_ACTIVE_COLOR', color })

export const changeActiveFinish = (finish = "") => ({ type: 'SET_ACTIVE_FINISH', finish })

export const changeActiveSize = (size = "") => ({ type: 'SET_ACTIVE_SIZE', size })

export const resetFilters = () => ({ type: 'RESET_PRODUCT_FILTERS' })