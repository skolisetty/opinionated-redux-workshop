import jsonApiUrl from 'utils/json-api-url'
import fetch from 'isomorphic-fetch'
import { camelizeKeys } from 'humps'

// ??? fix me: exportable action types!
export const FETCH_CREATOR_POST_FEED_START = 'FETCH_CREATOR_POST_FEED_START'
export const FETCH_CREATOR_POST_FEED_SUCCESS = 'FETCH_CREATOR_POST_FEED_SUCCESS'

const fetchCreatorPostFeedIncludes = ['user.null']
const fetchCreatorPostFeedFields = {
    'post': [
        'title',
        'content',
        'like_count',
        'image',
        'published_at',
        'current_user_has_liked'
    ],
    'user': [
        'image_url',
        'full_name'
    ]
}

export const fetchCreatorPostFeed = (creatorId) => {
    return (dispatch, getState) => {
        dispatch({
            type: FETCH_CREATOR_POST_FEED_START
        })

        const url = jsonApiUrl('/stream', {
            'include': fetchCreatorPostFeedIncludes,
            'fields': fetchCreatorPostFeedFields,
            'page': {
                'cursor': 'null'
            },
            'filter': {
                'is_by_creator': 'true',
                'is_following': 'false',
                'creator_id': creatorId
            }
        })

        fetch(url).then(res => res.json()).then(res =>
            dispatch({
                type: FETCH_CREATOR_POST_FEED_SUCCESS,
                payload: camelizeKeys(res.data)
            })
        )
    }
}
