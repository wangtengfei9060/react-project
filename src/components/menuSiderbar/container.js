import { connect } from 'react-redux'
import MenuSiderBar from './component'

const mapStateToProps = (state) => ({
    menuList: state.menuSiderbar.menuList
})

export default connect(mapStateToProps, null)(MenuSiderBar)