import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Bookshelf from './Bookshelf'
import './styles/App.css'

function App() {

    return (
        <div className="App">
            <Bookshelf />
        </div>
    )
}

export default App