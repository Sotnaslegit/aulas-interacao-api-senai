fetch('https://jsonplaceholder.typicode.com/posts')
.then(response => response.json())
.then(post => console.log(post))