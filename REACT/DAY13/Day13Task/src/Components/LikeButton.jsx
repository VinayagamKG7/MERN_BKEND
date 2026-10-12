import React, { useState } from 'react'

const LikeButton = () => {

    let [isLiked, setIsLiked] = useState(false)

    return (
        <>
            <h1>My Post</h1>
            <p>Click the Like button!</p>

            <button onClick={() => setIsLiked(!isLiked)}>
                {isLiked ? "Liked ❤️" : "Like"}
            </button>

            {isLiked && <p>You liked this post!</p>}
        </>
    )
}

export default LikeButton; 