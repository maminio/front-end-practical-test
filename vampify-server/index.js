
const express = require('express')
const bodyParser = require('body-parser');
const cors =  require('cors');

const app = express()
const port = 5000
const SECRETS = ['vow', 'dark', 'apple', 'random'];
const STATUSES = [404, 500, 401, 403, 200, 401, 403, 500, 404];

app.use('/*', cors({
    methods: 'GET,POST',
    // allowedHeaders: 'Content-Type, Authorization',
}));


const headerHasSecret = (headers) => {
    const { secret } = headers;
    if(secret && SECRETS.includes(secret)){
        return true;
    }
    return false;
}

const generateSecret = () => {
    const random = Math.floor(Math.random() * SECRETS.length);
    return SECRETS[random];
}

const randomStatus = () => {
    const random = Math.floor(Math.random() * STATUSES.length);
    return STATUSES[random];
}

app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/health', (req, res) => {
  return res.status(200).send(JSON.stringify({ status: 'HEALTHY' }));
})


app.post('/form/name', (req, res) => {
    res.send('Hello World!')
})

app.post('/join-form/name', (req, res) => {
    const { headers } = req;
    if(headerHasSecret(headers)){
        return res.sendStatus(200);
    }
    return res.status(randomStatus()).send(JSON.stringify({ secret: generateSecret() }));
})



app.post('/join-form/email', (req, res) => {
    const { headers } = req;
    if(headerHasSecret(headers)){
        return res.sendStatus(200);
    }
    return res.status(randomStatus()).send(JSON.stringify({ secret: generateSecret() }));
})

app.post('/join-form/age', (req, res) => {
    const { headers } = req;
    if(headerHasSecret(headers)){
        return res.sendStatus(200);
    }
    return res.status(randomStatus()).send(JSON.stringify({ secret: generateSecret() }));
})


app.post('/join-form/drink', (req, res) => {
    const { headers } = req;
    if(headerHasSecret(headers)){
        return res.sendStatus(200);
    }
    return res.status(randomStatus()).send(JSON.stringify({ secret: generateSecret() }));
})

app.post('/join-form/purpose', (req, res) => {
    const { headers } = req;
    if(headerHasSecret(headers)){
        return res.sendStatus(200);
    }
    return res.status(randomStatus()).send(JSON.stringify({ secret: generateSecret() }));
})

app.post('/join-form/username', (req, res) => {
    const { headers } = req;
    if(headerHasSecret(headers)){
        return res.sendStatus(200);
    }
    return res.status(randomStatus()).send(JSON.stringify({ secret: generateSecret() }));
})



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
