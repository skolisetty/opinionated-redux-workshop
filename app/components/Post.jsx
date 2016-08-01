import React from 'react'


const postStyle = {
    backgroundColor: 'white',
    borderRadius: '4px',
    maxWidth: '600px',
    padding: '16px'
}

const imgStyle = {
    maxWidth: '100%'
}

const h2Style = {
    margin: '0px'
}

const h2ContainerStyle = {
    paddingBottom: '16px'
}

export default ({ post }) => {
    return (
        <div style={postStyle}>
            <div style={h2ContainerStyle}>
                <h2 style={h2Style}>{post.attributes.title}</h2>
            </div>
            {
                post.attributes.image && <img src={post.attributes.image.largeUrl}
                                              style={imgStyle} />
                // // ??? fix me: if an image exists for the post, show it here.
                // ??? && <img src={???}
                //             style={imgStyle} />
            }
            {post.attributes.content} // ??? fix me: content (text body) of post goes here
        </div>
    )
}
