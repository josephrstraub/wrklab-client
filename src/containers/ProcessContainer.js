import { connect } from 'react-redux'
import { changeActiveProcess } from '../actions'
import _ from 'lodash'
import Process from '../components/Process'

const mapStateToProps = ({ processes }) => ({
  processes: processes.data,
  activeIndex: processes.activeIndex
})

const mapDispatchToProps = (dispatch) => ({
  changeActiveProcess: (index) => dispatch(changeActiveProcess(index))
})

const ProcessContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Process)

export default ProcessContainer
