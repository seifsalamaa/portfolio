const express = require('express');
const app = express();

app.use(express.json());

const mongooses = require('./db/db');
const movierouter = require('./routes/movieRoute');
const foodrouter = require('./routes/foodRoute');


app.use('/api/movie', movierouter);
app.use('/api/food', foodrouter);



app.listen(3000, () => {
    console.log("Server is running on port 3000!");
});
