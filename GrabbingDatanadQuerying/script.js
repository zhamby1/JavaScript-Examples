//this is an example of a jquery script that fetches data from a JSON API and appends it to the DOM
    
// $(document).ready(function() { // wait for the document to be ready
//     // Fetch posts from JSONPlaceholder
//     $.get('https://jsonplaceholder.typicode.com/posts', function(data) {
//         // Loop through the posts and append them to the DOM
//         data.forEach(function(post) {
//             $('#post-list').append(
//                 '<div class="post">' +
//                 '<h2>' + post.title + '</h2>' +
//                 '<p>' + post.body + '</p>' +
//                 '</div>'
//             )
//         })
//     })
// })

// This is an example of a script that fetches data from a JSON API and appends it to the DOM

// document.addEventListener('DOMContentLoaded', function() { // wait for the document to be ready
//     // Fetch posts from JSONPlaceholder
//     fetch('https://jsonplaceholder.typicode.com/posts')
//         .then(response => response.json())
//         .then(data => {
//             // Loop through the posts and append them to the DOM
//             data.forEach(function(post) {
//                 document.getElementById('post-list').insertAdjacentHTML('beforeend',
//                     '<div class="post">' +
//                     '<h2>' + post.title + '</h2>' +
//                     '<p>' + post.body + '</p>' +
//                     '</div>'
//                 );
//             });
//         })
//         .catch(error => console.error('Error fetching posts:', error));
// });


document.addEventListener('DOMContentLoaded', async function() { // wait for the document to be ready
    try {
        //async means that we are waiting for the data to be fetched and loaded
        // Fetch posts from JSONPlaceholder
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();

        // Loop through the posts and append them to the DOM
        data.forEach(function(post) {
            document.getElementById('post-list').insertAdjacentHTML('beforeend',
                '<div class="post">' +
                '<h2>' + post.title + '</h2>' +
                '<p>' + post.body + '</p>' +
                '</div>'
            );
        });
    } catch (error) {
        console.error('Error fetching posts:', error);
    }
});



