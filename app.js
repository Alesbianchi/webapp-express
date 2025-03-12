const express = require('express');
const app = express()
const port = process.env.PORT
// const cors = require("cors");

// importo il middleware di CORS
var cors = require('cors')

// importo il file delle rotte
const moviesRouter = require('./routers/movies');

// importo il middleware
const errorHandlers = require('./middlewares/errorHandlers');

// importo il middleware di gestione errore 404
const notFound = require("./middlewares/notFound");

// importo il middleware di gestione path imgs
const imagePathMiddleware = require("./middlewares/imagePath");


//definisco l'uso di una cartella per i file statici
app.use(express.static('public'));

//registro il body parser per application/json
app.use(express.json());

//registro il middleware di cors
app.use(cors({ origin: process.env.FE_APP }))

//uso il middleware delle immagini
app.use(imagePathMiddleware);

//definisco la rotta home
app.get('/api', (req, res) => {
    res.send("Server dei mie film");
})




//utilizzo la rotta dei blog andando a definire la parte iniziale delle rotte
app.use("/api/movies", moviesRouter);

//autorizzo il middleware
app.use(errorHandlers);

app.use(notFound);





//avvio del server sulla porta indicata
app.listen(port, () => {
    console.log(`example app listening on port ${port}`);

})