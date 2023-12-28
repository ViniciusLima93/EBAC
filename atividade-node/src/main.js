const elem = document.getElementById('title')
elem.innerHTML = 'rodando node com webpack'

const list = document.getElementById('list')
const api = 'http://localhost:3002/animals'

// Fetch API
fetch( api, { method: 'get'} )
    .then( (response) => response.json())
    .then( function(data){
        data.map( animal => {
            let li = document.createElement('li')
            li.innerHTML = animal.name
            list.appendChild(li)
        })
    })