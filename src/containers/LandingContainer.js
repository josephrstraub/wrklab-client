import { connect } from 'react-redux'
import { toggleMainMenu } from '../actions'
import Landing from '../components/Landing'

const mapStateToProps = (state) => {
  return {
    mainMenuIsVisible: state.mainMenuIsVisible
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleMainMenu: () => {
      dispatch(toggleMainMenu())
    }
  }
}

const LandingContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Landing)

export default LandingContainer
