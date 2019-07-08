const data = [];
for (let i = 0; i < 100; i++) {
    data.push({
        key: i,
        title: '星期一' + i,
        description: '星期二' + i,
    });
}

const defaultState = {
    pagination: {
        pageSize: 10,
        current: 1,
        total: 100
    },
    visible: false,
    selectedRowKeys: [],
    dataSource: data,
    formObj: {
        title: '',
        description: ''
    }
}

export default (state = defaultState, action) => {
    switch(action.type) {
        case 'SHOW_MODAL':
            return {
                ...state,
                visible: action.value
            }
        case 'CLOSE_MODAL':
            return {
                ...state,
                visible: action.value
            }
        case 'SELECTED_ROW_KEYS':
            return {
                ...state,
                selectedRowKeys: action.value
            }
        case 'FORM_Detail':
            return {
                ...state,
                formObj: {...action.value}
            }
        case 'CHANGE_PAGE_SIZE':
            return {
                ...state,
                pagination: {...action.pagination}
            }
        case 'CHANGE_CURRENT':
            return {
                ...state,
                pagination: {...action.pagination}
            }
        default:
            return state
    }
}