import {connect} from 'react-redux'
import {echo as echoAction} from '../actions/echo'
import Echo from '../components/Echo'

function mapStateToProps(state, ownProps) {
    return {
        message: state.message,
        enabled: state.enabled
    }
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        onEcho: () => {
            dispatch(echoAction())
        }
    }
}

const EchoContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Echo)

export default EchoContainer
