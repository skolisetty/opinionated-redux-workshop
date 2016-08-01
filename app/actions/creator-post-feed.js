import jsonApiUrl from 'utils/json-api-url'
import fetch from 'isomorphic-fetch'
import makeApiThunk from 'utils/make-api-thunk'


export const FETCH_CREATOR_POST_FEED = 'FETCH_CREATOR_POST_FEED'

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

    return makeApiThunk(FETCH_CREATOR_POST_FEED, url)
}
