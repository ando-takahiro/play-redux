import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import echo from 'reducers/echo'
import EchoContainer from 'containers/Echo'

const store = createStore(echo, applyMiddleware(thunk))
const rootEl = document.getElementById('echo')

function render() {
    ReactDOM.render(
        <Provider store={store}>
            <EchoContainer/>
        </Provider>,
        rootEl
    )
}

render()
store.subscribe(render)
