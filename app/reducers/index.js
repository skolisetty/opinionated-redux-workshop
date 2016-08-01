import { FETCH_CREATOR_POST_FEED_START, FETCH_CREATOR_POST_FEED_SUCCESS } from 'actions/creator-post-feed'

const initialState = {
    loading: false
}
export const postFeed = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CREATOR_POST_FEED_START:
            return {
                ...state,
                loading: true
            }
        case FETCH_CREATOR_POST_FEED_SUCCESS:
            return {
                posts: action.payload,
                loading: false
            }
        default:
            return state
    }
}
