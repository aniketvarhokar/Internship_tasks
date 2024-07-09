document.addEventListener('DOMContentLoaded', () => {
    fetchData();
});

async function fetchData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        displayData(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

function displayData(posts) {
    const contentDiv = document.getElementById('content');
    posts.forEach(post => {
        const postDiv = document.createElement('div');
        postDiv.className = 'post';
        
        const postTitle = document.createElement('h2');
        postTitle.textContent = post.title;
        
        const postBody = document.createElement('p');
        postBody.textContent = post.body;
        
        postDiv.appendChild(postTitle);
        postDiv.appendChild(postBody);
        
        contentDiv.appendChild(postDiv);
    });
}
