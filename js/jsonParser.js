fetch('https://my-json-server.typicode.com/Soneech/PoemData/db')
    .then(response => response.json())
    .then(json => console.log(json))