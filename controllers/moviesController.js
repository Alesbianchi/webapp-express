// importo idati
// const posts = require('../data/posts');

// importo il database
const connection = require('../data/db');


function index(req, res) {
    // const sql = 'SELECT * FROM posts';



    // // eseguiamo la query!

    // connection.query(sql, (err, results) => {

    //     if (err) return res.status(500).json({ error: 'Database query failed' });

    //     res.json(results);

    // });

}


function show(req, res) {
    //res.send('Dettagli del blog ' + req.params.id);
    // recuperiamo l'id dall' URL e trasformiamolo in numero
    // const id = parseInt(req.params.id)

    // const sql = 'SELECT * FROM posts WHERE id = ?';

    // connection.query(sql, [id], (err, results) => {

    //     if (err) return res.status(500).json({ error: 'Database query failed' });

    //     //permetto di restituire una risposta anche in caso di ricerca negativa
    //     if (results.length === 0) return res.status(404).json({ error: 'post not found' });

    //     const post = results[0];

    //     const tagsSql = `

    //         SELECT tags.* 
    //         FROM tags
    //         JOIN post_tag ON post_tag.tag_id = tags.id
    //         WHERE post_tag.post_id = ?;

    //     `;
    //     // Se è andata bene, eseguiamo la seconda query per i tags 
    //     connection.query(tagsSql, [id], (err, tagsResults) => {
    //         if (err) return res.status(500).json({ error: 'Database query failed' });

    //         // Aggoiungiamo i tags ai posts 
    //         post.tags = tagsResults;
    //         res.json(post);
    //     });

    // });

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