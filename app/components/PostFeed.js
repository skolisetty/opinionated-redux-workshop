import React, { PropTypes } from 'react'
import Post from 'components/Post'


/* crappy styles */
const postFeedStyle = {
    maxWidth: '500px',
    marginLeft: 'auto',
    marginRight: 'auto'
}

const postSpacerStyle = {
    marginTop: '0px',
    marginBottom: '24px'
}

/* component */
export default React.createClass({
    propTypes: {
        posts: PropTypes.array,
        onMount: PropTypes.func
    },

    componentDidMount() {
        // ??? fix me
        const { creatorId } = this.props
        this.props.onMount(creatorId)
    },

    renderPost(post) {
        return (
            <div key={post.id}
                 style={postSpacerStyle}>
                <Post post={post} />
            </div>
        )
    },

    render() {
        const { posts, isLoading } = this.props

        return isLoading ?
            <div>'LOADING!'</div> :
            (<div style={postFeedStyle}>
                { posts && posts.map(this.renderPost) }
            </div>)
    }
})
