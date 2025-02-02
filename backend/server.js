const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get('/api/ping', (req, res) => {
    res.json({message: 'OK'});
});

app.get('/api/leaderboard-summary', (req,res) => {
    const summaryData = [
        {player: 'example1', score: 275},
        {player: 'example2', score: 100},
        {player: 'example3', score: 550},
        {player: 'example4', score: 110},
        {player: 'example5', score: 210},
        {player: 'example6', score: 540},
        {player: 'example7', score: 415},
        {player: 'example8', score: 125},
        {player: 'example9', score: 375},
    ]
    res.json(summaryData);
});

app.put('/api/user-feedback', (req, res) => {
    // will save to json in the backend or something later on.
    console.log("saving user feedback...");
    res.sendStatus(200); // respond with status 200 for right now.
})

app.get('*', (req,res) => {
    {
        res.sendFile(path.join(__dirname, 'index.html'));
    }
});

app.listen(PORT, () => 
{
    console.log(`backend running at http:localhost:${PORT}`)
});
