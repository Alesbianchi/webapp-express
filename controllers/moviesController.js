
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
    const reviewSql = 'SELECT * FROM reviews WHERE movie_id = ?';

    connection.query(movieDetail, [id], (err, movieResults) => {

        if (err) return res.status(500).json({ error: 'Database query failed' });

        //permetto di restituire una risposta anche in caso di ricerca negativa
        if (movieResults.length === 0) return res.status(404).json({ error: 'movie not found' });

        const movie = movieResults[0];

        // **Concatenazione dell'URL dell'immagine**
        movie.image = req.imagePath + movie.image;

        connection.query(reviewSql, [id], (err, reviewResults) => {

            if (err) return res.status(500).json({ error: 'Database query failed' });


            movie.reviews = reviewResults

            //ritorno l'oggetto completo
            res.json(movie);


        });

    });



}

//inserimento nuovo film
function store(req, res) {

    //seleziono i valori che dovrà ricevere
    const { title, director, abstract } = req.body;

    //salvo in una costante l'immagine in arrivo dal frontend utilizzando middleware multer
    const imageName = `${req.file.filename}`;

    //creo query sql per l'inserimento nel db
    const query = "INSERT INTO movies (title, director, image, abstract) VALUES (?, ?, ?, ?)";

    //creo la connsessione con i valori da validare
    connection.query = (
        query,
        [title, director, image, abstract],
        (err, result) => {
            if (err) {
                console.log(err);
                return next(new Error("Errore interno del server"));

            }

            res.status(201).json({
                status: "succes",
                message: "film inserito con successo"
            });
        })



}



//inserimento nuova recensione
function storeReview(req, res) {

    //recuoero l'id con i parametri
    const { id } = req.params

    //recupero le altre info dal body
    const { name, text, vote } = req.body;

    //registra con sql i dati ricevuti
    const insertReviewSql = 'INSERT INTO reviews (name, text, vote, movie_id) VALUES (?, ?, ?, ?)';
    // Eseguiamo la query
    connection.query(insertReviewSql, [name, text, vote, id], (err, results) => {
        if (err) return res.status(500).json({ error: 'Database query failed' });
        res.status(201);
        res.json({ message: 'Review added', id: results.insertId });
    });
}


// esportiamo tutto
module.exports = { index, show, store, storeReview }


