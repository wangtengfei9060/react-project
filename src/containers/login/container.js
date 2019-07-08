import { connect } from 'react-redux'
import Login from './component'

const mapStateToProps = (state) => ({
    loginState: state.login.loginState
})
const mapDispatchToProps = dispatch => ({
    login(values) {
        return new Promise((resolve, reject) => {
            const action = {
                type: 'LOGIN_FORM',
                values: values
            }
            dispatch(action)
            resolve()
        })
        
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)