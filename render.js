const Renderer = function () {

    const createCommentsClass=function(postBox){
        let commentsTag = $(`<div></div>`).addClass("comments")
        postBox.append(commentsTag)
        return commentsTag
    }
    const createSingleComment=function(comment){
        let commentCard = $(`<div></div>`).addClass("comment").attr('data-id', comment.id)
        let deleteComment = $(`<span>X</span>`).addClass("delete-comment")
        let commentText = $(`<span>${comment.text}</span>`)
        commentCard.append(deleteComment)
        commentCard.append(commentText)
        return commentCard
    }
    const addCommentComponent=function(commentsClass){
        commentsClass.append(  `<input class="comment-input" type="text" placeholder="got something ?">`)
        commentsClass.append(  `<button class="comment-btn" type="button">Comment</button>`)      

    }
    const initComment = function (comment,commentsClass) { 
        commentCard=createSingleComment(comment)
        commentsClass.append(commentCard)   
    }
    const initComments = function (post, postBox) {
        commentsClass=createCommentsClass(postBox)
        for (let comment of post.comments) {
            initComment(comment,commentsClass)
        }
        addCommentComponent(commentsClass)

    }
    const initPostDeleteBtn = function (postBox) {
        let removePost = $(`<div>Delete Post</div>`).addClass("delete")
        postBox.append(removePost)
    }
    const initPost = function (post) {
        let postBox = $(`<div></div>`).addClass("post").attr('data-id', post.id);
        let postText = $(`<div>${post.text}</div>`).addClass("post-text")
        $("#posts").append(postBox)
        postBox.append(postText)
        initComments(post, postBox)
        initPostDeleteBtn(postBox)
    }

    const initPosts = function (posts) {
        for (let post of posts) {
            initPost(post)
        }
    }

    const renderPosts = function (posts) {
        $("#posts").empty()
        initPosts(posts)
    }
    return {
        renderPosts: renderPosts
    }

}