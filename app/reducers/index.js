import { combineReducers } from 'redux'
import { makeRequestReducer, makeMultiRequestReducer } from './make-request-reducer'
import makeRefReducer from './make-ref-reducer'
import { FETCH_CREATOR_POST_FEED } from 'actions/creator-post-feed'
import { LIKE_POST } from 'actions/like-post'
import dataReducer from './data-reducer'

export const data = dataReducer

export const refs = combineReducers({
    postFeed: makeRefReducer(FETCH_CREATOR_POST_FEED)
})

export const requests = combineReducers({
    [LIKE_POST]: makeMultiRequestReducer(LIKE_POST),
    [FETCH_CREATOR_POST_FEED]: makeRequestReducer(FETCH_CREATOR_POST_FEED)
})
