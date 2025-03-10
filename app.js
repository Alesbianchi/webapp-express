const express = require('express');
const app = express()
const port = process.env.PORT
// const cors = require("cors");



// importo il file delle rotte
const moviesRouter = require('./routers/movies');

// importo il middleware
const errorHandlers = require('./middlewares/errorHandlers');

// importo il middleware di gestione errore 404
const notFound = require("./middlewares/notFound");

//definisco la cartella per i file statici
// app.use("/imgs", express.static('public/imgs/posts'));

// app.use(cors({


//     origin: 'http://localhost:5173'


// }));





//definisco la rotta home
app.get('/', (req, res) => {
    res.send("Server dei mie film");
})


//utilizzo la rotta dei blog andando a definire la parte iniziale delle rotte
app.use("/api/movies", moviesRouter);

//autorizzo il middleware
app.use(errorHandlers);

app.use(notFound);


//registro il body parser
app.use(express.json());

//avvio del server sulla porta indicata
app.listen(port, () => {
    console.log(`example app listening on port ${port}`);

})