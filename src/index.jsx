import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './App.jsx'
import store from './store'

const container = document.getElementById("root")

ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
        container
)