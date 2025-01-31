const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get('/api/ping', (req, res) => {
    res.json({message: 'OK'});
});

app.listen(PORT, () => 
{
    console.log(`backend running at http:localhost:${PORT}`)
})
