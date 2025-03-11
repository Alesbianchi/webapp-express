// importo idati
// const posts = require('../data/posts');

// importo il database
const connection = require('../data/db');


function index(req, res) {
    const movieSql = 'SELECT * FROM movies;';


    // eseguiamo la query!

    connection.query(movieSql, (err, result) => {

        if (err) return res.status(500).json({ error: 'Database query failed' });

        const movies = result.map(movie => {
            return {
                ...movie,
                image: req.imagePath + movie.image
            }
        })

        res.json(movies)

    });



}


function show(req, res) {
    // res.send('Dettagli dei miei film ' + req.params.id);
    //recuperiamo l'id dall' URL e trasformiamolo in numero
    const { id } = req.params;

    //costante per richiamare tabella dei film
    const movieDetail = 'SELECT * FROM movies WHERE id = ?';

    //costante per richiamare tabella delle reviews
    const reviewSql = 'SELECT * FROM reviews WHERE id = ?';

    connection.query(movieDetail, [id], (err, movieResults) => {

        if (err) return res.status(500).json({ error: 'Database query failed' });

        //permetto di restituire una risposta anche in caso di ricerca negativa
        if (movieResults.length === 0) return res.status(404).json({ error: 'movie not found' });

        const movie = movieResults[0];


        connection.query(reviewSql, [id], (err, reviewResults) => {

            if (err) return res.status(500).json({ error: 'Database query failed' });


            movie.reviews = reviewResults

            //ritorno l'oggetto completo
            res.json(movie);


        });

    });



}





function store(req, res) {
    // copiamo la logica della store
    //console.log(req.body);
    //res.send('Creazione nuovo blog');
    // const newId = posts[posts.length - 1].id + 1;
    // // Creo un nuovo oggetto 
    // const newPost = {
    //     id: newId,
    //     title: req.body.title,
    //     content: req.body.content,
    //     tags: req.body.tags
    // }
    // // Aggiungo il nuovo post
    // posts.push(newPost);

    // // stampo in console
    // console.log(posts);

    // // restituisco lo status corretto 
    // res.status(201);
    // res.json(newPost);


}


// esportiamo tutto
module.exports = { index, show, store }