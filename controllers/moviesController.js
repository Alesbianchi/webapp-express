// importo idati
// const posts = require('../data/posts');

// importo il database
const connection = require('../data/db');


function index(req, res) {
    const mowieSql = 'SELECT * FROM movies';


    // eseguiamo la query!

    connection.query(mowieSql, (err, results) => {

        if (err) return res.status(500).json({ error: 'Database query failed' });

        res.json(results);

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


function destroy(req, res) {
    // res.send('Eliminazione del blog ' + req.params.id);

    // recuperiamo l'id dall' URL e trasformiamolo in numero
    // const id = parseInt(req.params.id)
    // connection.query('DELETE FROM posts WHERE id = ?', [id], (err) => {

    //     if (err) return res.status(500).json({ error: 'Failed to delete post' });

    //     res.sendStatus(204)

    // });

}



function update(req, res) {
    // copiamo la logica dell'update
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

function update(req, res) {
    // copio la logica dell'update
    //console.log(req.body);
    //res.send('modifica vecchio blog');
    // recupero l'id dall' URL e lo trasformo in numero
    // const id = parseInt(req.params.id)

    // // cerco il post tramite id
    // const post = posts.find(post => post.id === id);

    // if (!post) {
    //     //restituisco stato di errore 404
    //     res.status(404);

    //     //restituisco messaggio di errore in json
    //     return res.json({
    //         error: "Not found",
    //         message: "post non trovato"
    //     })
    // }

    //ora modifico i dati del post se trovato
    // post.title = req.body.title;
    // post.content = req.body.content;
    // post.image = req.body.image;
    // post.tags = req.body.tags;

    // //stampo il risultato in console
    // console.log(posts);

    // //ritorno il post modificato in formato json
    // res.json(posts);

}

// esportiamo tutto
module.exports = { index, show, store, update, destroy }