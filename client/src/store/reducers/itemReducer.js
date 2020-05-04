const initState = {
    items: [],
    loading: false
}

const itemReducer = (state = initState, action) => {
    switch(action.type) {
        case 'GET_ITEM': {
            return {
                ...state,
               items: action.payload,
               loading: false
            }
        }
        case 'ADD_ITEM': {
            return {
                ...state,
                items: [ action.payload, ...state.items ]
            }
        }
        case 'DELETE_ITEM': {
            return {
                ...state,
                items: state.items.filter(item => item._id !== action.payload)
            }
        }
        case 'LOADING_ITEM': {
            return {
                ...state,
                loading: true
            }
        }
        default:
            return state
    }
}

export default itemReducer;