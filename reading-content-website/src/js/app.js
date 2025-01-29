// Main JavaScript logic for the reading content website
document.addEventListener('DOMContentLoaded', () => {
    let likeCount = 0;
    const likeButton = document.getElementById('like-button');
    const likeDisplay = document.getElementById('like-count');
    const commentForm = document.getElementById('comment-form');
    const commentList = document.getElementById('comment-list');

    // Like button functionality
    likeButton.addEventListener('click', () => {
        likeCount++;
        likeDisplay.textContent = likeCount;
    });

    // Comment submission functionality
    commentForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const commentInput = document.getElementById('comment-input');
        const newComment = document.createElement('li');
        newComment.textContent = commentInput.value;
        commentList.appendChild(newComment);
        commentInput.value = '';
    });
});