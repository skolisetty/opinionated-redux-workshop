import React from 'react'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'
import PostFeedContainer from 'containers/PostFeedContainer'
import configureStore from './store/configure-store'
import * as reducers from './reducers'


const CREATOR_ID = '3752565'
const store = configureStore(reducers)

ReactDOM.render(
    <Provider store={store}>
        <PostFeedContainer creatorId={CREATOR_ID} />
    </Provider>,
    document.getElementById('reactTarget')
)
