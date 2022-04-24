const Tweeter = function () {
    let _postIdCounter = 2
    let _commentIdCounter = 6
    let _posts = [
        {
            text: "First post!",
            id: "p1",
            comments: [
                { id: "c1", text: "First comment on first post!" },
                { id: "c2", text: "Second comment on first post!!" },
                { id: "c3", text: "Third comment on first post!!!" }
            ]
        },
        {
            text: "Aw man, I wanted to be first",
            id: "p2",
            comments: [
                { id: "c4", text: "Don't wory second poster, you'll be first one day." },
                { id: "c5", text: "Yeah, believe in yourself!" },
                { id: "c6", text: "Haha second place what a joke." }
            ]
        }
    ];

    const createPost = (postText) => {
        _postIdCounter += 1
        post = {
            text: postText,
            id: "p" + _postIdCounter,
            comments: []
        }
        return post
    }
    const createComment = (commentText) => {
        _commentIdCounter += 1
        comment = {
            id: "c"+_commentIdCounter, 
            text: commentText
        }
        return comment
    }
    const findPostIndex = (postId) => {
        return _posts.map(item => item.id).indexOf(postId)
    }
    const findCommentIndex = (commentId,postId) => {
        const commets=_posts[findPostIndex(postId)].comments
        return commets.map(item => item.id).indexOf(commentId)
    }
    const getPosts = () => _posts
    const addPost = (text) => _posts.push(createPost(text))
    const removePost = (postId) => {
        _posts.splice(findPostIndex(postId),1)
    }    
    const addComment=(text,postId)=>{
        _posts[findPostIndex(postId)].comments.push(createComment(text))
    }
    const removeComment=(postId,commentId)=>{
        _posts[findPostIndex(postId)].comments.splice(findCommentIndex(commentId,postId), 1)
        
    }
    return {
        getPosts: getPosts,
        addPost: addPost,
        removePost: removePost,
        addComment:addComment,
        removeComment:removeComment

    }
}


