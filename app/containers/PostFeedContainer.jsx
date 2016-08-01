import { connect } from 'react-redux'
import PostFeed from 'components/PostFeed'
import { fetchCreatorPostFeed } from 'actions/creator-post-feed'


const mapStateToProps = (state, ownProps) => {
    return {
        // ??? fix me
        ...state.postFeed,
        creatorId: ownProps.creatorId,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onMount: (creatorId) => {
          // ??? fix me
          dispatch(fetchCreatorPostFeed(creatorId))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostFeed)
