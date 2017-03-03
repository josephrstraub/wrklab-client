import { connect } from 'react-redux'
import { changeActiveVision } from '../actions'
import _ from 'lodash'
import Vision from '../components/Vision'

const mapStateToProps = (state) => {
  let { data, activeVisionId } = state.visions
  return {
    visions: data,
    activeVision: data.filter(vision => vision._id === activeVisionId).shift() || {},
    visionIndex: _.findIndex(data, {_id: activeVisionId})
  }
}

const mapDispatchToProps = (dispatch) => ({
  changeActiveVision: (visionId) => dispatch(changeActiveVision(visionId))
})

const VisionContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Vision)

export default VisionContainer
