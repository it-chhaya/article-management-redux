import { actionTypes } from "../actions/actionTypes"

const initStates = {
    books: [],
    book: {}
}

export const bookReducer = (state = initStates, action) => {

    switch(action.type) {
        case actionTypes.fetch_books:
            return {...state, books: action.payload}
        case actionTypes.fetch_book_id:
            return {...state, book: action.payload}
        default:
            return state
    }

}