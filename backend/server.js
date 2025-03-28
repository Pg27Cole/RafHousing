const express = require("express");
const cors = require("cors");

const  {MongoClient}  = require("mongodb");
const mysql = require("mysql2/promise");

const app = express();
app.use(cors());
app.use(express.json());

const port = 3000;

const mongoURI = "mongodb+srv://admin:vfsvfsvfs@cluster0.gkyjn.mongodb.net/"
const mongoClient = new MongoClient(mongoURI);

const dbConfig = {
    host: "database-2.czeee2egge1d.ca-central-1.rds.amazonaws.com",
    user: "admin",
    password: "vfsvfsvfs",
    database: "leaderboard_db_Cole"
}

async function startServer() {
    try {
        await mongoClient.connect();
        console.log("Connected to MonogoDB");

        const db = mongoClient.db("myFirstDatabase");
        const userCollection = db.collection("users");

        app.post("/api/login", async(req, res) => {
            const { email } = req.body;
            try {
                const user = await userCollection.findOne({email});

                if(!user) {
                    return res.status(404).json({ error: "User not found"});
                    // this is a bad request error
                }

                res.json({
                    _id: user._id,
                    username: user.username,
                    email: user.email
                });
            } catch(error) {
                console.error("Login Error: ", error);
                res.status(500);
                // this is when the server has made a mistake
            }
        });

        app.get("/api/leaderboard", async (req, res) => {
            const count = parseInt(req.query.count) || 10;
            let connection;

            try {
                connection = await mysql.createConnection(dbConfig);
                const [rows] = await connection.execute(
                    `SELECT player_name, score FROM players
                    ORDER BY score DESC 
                    LIMIT ${count}`
                );
                res.json({ success: true, data: rows });
            } catch(error) {
                console.log("Error fetching leaderboard: ", error)
                res.status(500).json({error: "Internal Server Error"});
            } finally {
                if(connection) {
                    await connection.end();
                }
            }
        });

        app.listen(port, () => {
            console.log(`Server runnong on http://localhost:${port}`);
        })

    } catch (error) {
        console.error("server start error: ", error);
    }
}

startServer();