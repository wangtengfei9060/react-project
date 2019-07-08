import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Home from './component'

const mapStateToProps = (state) => ({
    visible: state.home.visible,
    selectedRowKeys: state.home.selectedRowKeys,
    dataSource: state.home.dataSource,
    formObj: state.home.formObj,
    pagination: state.home.pagination
})

const mapDispatchToProps = dispatch => ({
    // bindActionCreators()
    showModal(flag) {
        const action = {
            type: 'SHOW_MODAL',
            value: !!flag
        }
        dispatch(action)
    },
    closeModal(flag) {
        const action = {
            type: 'CLOSE_MODAL',
            value: !!flag
        }
        dispatch(action)
    },
    handleSelectedRowKeys(selectedRowKeys) {
        const action = {
            type: 'SELECTED_ROW_KEYS',
            value: selectedRowKeys
        }
        dispatch(action)
    },
    changeModalForm(row) {
        const action = {
            type: 'FORM_Detail',
            value: row
        }
        dispatch(action)
    },
    changePageSize(current, pageSize) {
        const action = {
            type: 'CHANGE_PAGE_SIZE',
            pagination: {
                current: current,
                pageSize: pageSize
            }
        }
        dispatch(action)
    }, 
    changeCurrent(current) {
        const action = {
            type: 'CHANGE_CURRENT',
            pagination: {
                current: current,
            }
        }
        dispatch(action)
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
