const tweeter = Tweeter()
const renderer = Renderer()

renderer.renderPosts(tweeter.getPosts())

$("body").on("click", "#post", function () {
    const post = $('#input').val()
    tweeter.addPost(post)
    renderer.renderPosts(tweeter.getPosts())
});
$("#posts").on("click", ".comment-btn", function () {
    const post = $(this).parent().parent().data().id
    const comment=$(this).parent().children('input[class="comment-input"]').val()
    tweeter.addComment(comment,post)
    renderer.renderPosts(tweeter.getPosts())   
});
$("#posts").on("click", ".delete", function () {
    const postId = $(this).parent().data().id
    console.log(postId)
    tweeter.removePost(postId)
    renderer.renderPosts(tweeter.getPosts())   
});
$("#posts").on("click", ".delete-comment", function () {
    const postId = $(this).parent().parent().parent().data().id
    const commentId = $(this).parent().data().id
    console.log(postId)
    console.log(commentId)
    tweeter.removeComment(postId,commentId)
    renderer.renderPosts(tweeter.getPosts())
    
});


