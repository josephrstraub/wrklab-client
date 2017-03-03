import React, { Component } from 'react'

import { connect } from 'react-redux'

import { changeActiveFeaturedProjectImage } from '../../actions/featured'
import { changeActiveProductImage } from '../../actions/works'
import { getImages as getFeaturedProjectImages } from '../../reducers/featured-projects'
import { getImages as getProductImages } from '../../reducers/products'

import { Thumbnail } from 'react-bootstrap'

import '../../styles/Thumbnails.css'

class Thumbnails extends Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.match.url !== this.props.match.url) {
      this.props.changeActiveImage(0)
    }
  }
  render() {
    let { images, activeIndex, changeActiveImage } = this.props
    let listItems = images.map((image, index) => (
      <li key={index}>
        <Thumbnail
          alt="171x180"
          className={index === activeIndex ? "thumbnail-active" : ""}
          src={process.env.PUBLIC_URL + image}
          onClick={changeActiveImage.bind(null, index)} />
      </li>
    ))
    return (
      <ul className="thumbnails-container">
        {listItems}
      </ul>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  switch(ownProps.match.path) {
    case '/featured/:projectName':
      return {
        activeIndex: state.featuredProjects.activeImageIndex,
        images: getFeaturedProjectImages(state, ownProps)
      }
    case '/products/:category/:productName':
      return {
        activeIndex: state.products.activeImageIndex,
        images: getProductImages(state, ownProps)
      }
    default: return {}
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  switch(ownProps.match.path) {
    case '/featured/:projectName':
      return {
        changeActiveImage: (index) => dispatch(changeActiveFeaturedProjectImage(index))
      }
    case '/products/:category/:productName':
      return {
        changeActiveImage: (index) => dispatch(changeActiveProductImage(index))
      }
    default: return {}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Thumbnails)
