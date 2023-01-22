// run time dataresetData
var likeCount = 0
var dislikeCount = 0

// views
var likeCountView
var dislikeCountView

/**
 * Called when page is loaded or reloaded
 */
function onLoad(){
    fetchData()
    likeCountView = document.getElementById('like-count')
    dislikeCountView = document.getElementById('dislike-count')
    likeCountView.textContent = likeCount
    dislikeCountView.textContent = dislikeCount
}

/**
 * Fetches stored data, if no value stored then set default value
 */
function fetchData(){
    const like = localStorage.getItem('likeCount')
    const dislike = localStorage.getItem('dislikeCount')
    likeCount = like == null ? 0 : like
    dislikeCount = dislike == null ? 0 : dislike
}

function resetData(){
    likeCount = 0
    dislikeCount = 0
    likeCountView.textContent = likeCount
    dislikeCountView.textContent = dislikeCount
    localStorage.setItem('likeCount', likeCount)
    localStorage.setItem('dislikeCount', dislikeCount)
}

function incrementLikeCountandSetView(){
    likeCountView.textContent = ++likeCount
    localStorage.setItem('likeCount', likeCount)
}

function incrementDislikeCountandSetView(){
    dislikeCountView.textContent = ++dislikeCount
    localStorage.setItem('dislikeCount', dislikeCount)
}