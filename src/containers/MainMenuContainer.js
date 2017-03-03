import { connect } from 'react-redux'
import { toggleMainMenu } from '../actions'
import MainMenu from '../components/MainMenu'

const mapStateToProps = (state) => ({
  currentPath: state.routing.locationBeforeTransitions.pathname
})

const mapDispatchToProps = (dispatch) => ({
  toggleMainMenu: () => dispatch(toggleMainMenu())
})

const MainMenuContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MainMenu)

export default MainMenuContainer
