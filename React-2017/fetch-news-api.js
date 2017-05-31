fetch('http://localhost:3000/tasks/')
.then(function(response) {
    return response.json()
}).then(function(json) {
    console.log('parsed json: ', json)
}).catch(function(error) {
    console.log('parsing failed: ', error)
});


fetch('http://localhost:3000/tasks/', {
    method: 'post',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        "title": "Add a blogpost about Angular2",
        "dueDate": "2015-05-23T18:25:43.511Z",
        "done": false
    })
}).then(function(response) {
    return response.json()
}).then(function(json) {
    console.log('parsed json: ', json)
}).catch(function(ex) {
    console.log('parsing failed: ', ex)
});


fetch('https://newsapi.org/v1/articles?source=the-next-web&sortBy=latest',{
    method: 'get',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'X-Api-Key': `0987b00e542141369049e647701b65d9`
    }
})
.then(function(response) {
    return response.json()
}).then(function(json) {
    console.log('parsed json: ', json)
}).catch(function(error) {
    console.log('parsing failed: ', error)
});



fetch('https://newsapi.org/v1/articles?source=the-next-web&sortBy=latest&apiKey=0987b00e542141369049e647701b65d9')
.then(function(response) {
    return response.json()
}).then(function(json) {
    console.log('parsed json: ', json)
}).catch(function(error) {
    console.log('parsing failed: ', error)
});



// 🙃





