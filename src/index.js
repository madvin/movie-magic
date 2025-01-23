import express from 'express';
import handlebars from 'express-handlebars';
import routes from './routes.js';

import mongoose from 'mongoose';

const app = express();

try {
    const uri = 'mongodb://localhost:27017/magic-movies-DB'
    await mongoose.connect
} catch (err) {
    console.log('Something went wrong with DB connection');
    console.log(err.message);
}

app.engine('hbs', handlebars.engine({
    extname: 'hbs',
}));
app.set('view engine', 'hbs');
app.set('views', './src/views');

app.use('/static', express.static('src/public'));

app.use(routes);

app.listen(5000, () => console.log('Server is working on http://localhost:5000...'));

