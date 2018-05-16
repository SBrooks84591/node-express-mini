const express = require('express');
const db = require('/data.db');

const server = express();

server.listen(5000, () => {
    console.log('=== The App is running on port 5000 ===')
})

server.get('/', (request, response) => {
    response.send('<h1>GET REQUEST RECEIVED</h1>')
})

server.get('/api/users', (request, response) => {
    db.find()
    .then( users => {
        response.status(200).json(({users}))
    })

    .catch( err => {
        response.status(500).json({error: 'SORRY CANNOT FIND THE DATA'});
    })
});

server.get('/api/users/:id', (request, response) => {
    const userId = request.params.params.id;

    db.findById(usedId)
    .then( user => {
        response.json({user});
    })
    .catch(err => {
        response.status(500).json({ error: 'WHOOPSIE! NO DATA FOR YOU'});
    } )
})