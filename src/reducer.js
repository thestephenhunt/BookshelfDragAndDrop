const initialState = {}

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case 'BOOKS_RETRIEVED': {
            return {
                ...state,
                bookList: action.bookList
            }
        }
        case 'REORDER_BOOKS': {
            return {
                ...state,
                bookList: action.payload
            }
        }
        default:
            return state
    }
}