import express from 'express';

const app = express();

const PORT = 5000;

app.get('/', (req, res) => {
    res.json({"greet": ["Hello, Welcomem to Piczzle"]});
})

// Server setup
app.listen(PORT,() => {
    console.log(`The application is listening on port http://localhost:${PORT}`);
})