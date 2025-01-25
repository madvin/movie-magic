import { Router } from 'express';
import movieService from '../services/movie-service.js';

const router = Router();

router.get('/', async (req, res) => {
    const movies = await movieService.getAll();

    res.render('home', { movies });
});

router.get('/about', (req, res) => {
    res.render('about');
});

// router.get('/create', (req, res) => {
//     res.render('create');
// });

// router.get('/search', (req, res) => {
//     res.render('search');
// });

// router.get('*', (req, res) => {
//     res.render('404');
// });

export default router;