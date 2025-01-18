import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('Started here!')
});

app.listen(5000, () => console.log('Server is working (daaa) on http://localhost:5000...'));

