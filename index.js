const express = require('express');
const redis = require('redis');
const process = require('process');

const app = express();
// Connection to redis server. Client represents that connection.
// This will also require the url and the port where the redis server is running
const client = redis.createClient({
    host: "redis-server",
    port: 6379,
});
// When the server starts up, initialise the value of visits to 0
client.set('visits', 0);

app.get('/', (req, res) => {
    process.exit(0);
    client.get('visits', (err, visits) => {
        res.send('Number of visits is ' + visits);
        client.set('visits', parseInt(visits) + 1);
    })
})


app.listen(8081, () => {
    console.log('Listening on port 4001');
})