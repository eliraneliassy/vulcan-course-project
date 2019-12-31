
import * as express from 'express';
import { db } from './src/app/db';


const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.get('/feed', (req, res) => {
    res.json(db);
});


app.listen(4700, () => {
    console.log('express running on port 4700');
});
