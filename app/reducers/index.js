import { FETCH_CREATOR_POST_FEED_START, FETCH_CREATOR_POST_FEED_SUCCESS } from 'actions/creator-post-feed'

const initialState = {
    isLoading: false
}
export const postFeed = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CREATOR_POST_FEED_START:
            return {
                ...state,
                isLoading: true
            }
        case FETCH_CREATOR_POST_FEED_SUCCESS:
            return {
                posts: action.payload,
                isLoading: false
            }
        default:
            return state
    }
}
