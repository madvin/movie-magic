import express from 'express';
import handlebars from 'express-handlebars';
import routes from './routes.js';
import showRatingHelper from './helpers/ratingHelper.js';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';

const app = express();

try {
    const defaultUri = 'mongodb://localhost:27017/magic-movies-DB';
    await mongoose.connect(defaultUri);

    console.log('DB Connected Successfuly!');
} catch (err) {
    console.log('Something went wrong with DB connection');
    console.log(err.message);
}

app.engine('hbs', handlebars.engine({
    extname: 'hbs',
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,
    },
    helpers: {
        showRating: showRatingHelper,
    }
}));
app.set('view engine', 'hbs');
app.set('views', './src/views');

app.use('/static', express.static('src/public'));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(routes);

app.listen(5000, () => console.log('Server is working on http://localhost:5000...'));

