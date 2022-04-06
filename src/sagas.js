import { put, takeEvery, all } from 'redux-saga/effects'

const API = 'https://api.nytimes.com/svc/books/v3'
function* retrieveBooks() {
    const bookList = yield fetch(API + '/lists/current/hardcover-graphic-books.json?api-key=aElkqpJ5LBOTG9eedB1AqYivV2UfGOYu')
        .then(response => response.json())
        .then(data => { return data.results.books})
    yield put({ type: 'BOOKS_RETRIEVED', bookList })
}

function* watchRetrieveBooks() {
    yield takeEvery('FETCH_BOOKS', retrieveBooks)
}

export default function* rootSaga() {
    yield all([
        retrieveBooks(),
        watchRetrieveBooks()
    ])
}