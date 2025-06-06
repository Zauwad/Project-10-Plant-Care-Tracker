const express = require("express")
const app = express()
const port = process.env.PORT || 3000
const cors = require("cors")
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config()

app.use(cors())
app.use(express.json())

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ktid6hh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

app.get('/', (req, res) => {
    res.send('Plant Tracker Server Warming Up')
})

async function run() {
    try {
        await client.connect();
        const plantcollection = client.db('plantsdb').collection('plants')

        app.get('/allplants', async (req, res) => {
            try {
                const result = await plantcollection.find().toArray()
                res.send(result)
            } catch (error) {
                console.error(error);
                res.status(500).send("Server error")
            }
        })

        app.get('/allplants/sorted', async (req, res) => {
            const sortedUsers = await plantcollection.find().sort({ nextWateringDate: 1 }).toArray()

            res.send(sortedUsers)
        })

        app.get('/allplants/:userid', async (req, res) => {
            try {
                const userID = req.params.userid
                if (!ObjectId.isValid(userID)) {
                    return res.status(400).send("Invalid ID format")
                }
                const query = { _id: new ObjectId(userID) }
                const result = await plantcollection.findOne(query)
                res.send(result)
            } catch (error) {
                console.error(error);
                res.status(500).send("Server error")
            }
        })

        app.post('/allplants', async (req, res) => {
            try {
                const plant = req.body
                console.log(plant)
                const result = await plantcollection.insertOne(plant)
                res.send(result)
            } catch (error) {
                console.error(error);
                res.status(500).send("Server error")
            }
        })

        app.put('/allplants/:id', async (req, res) => {
            try {
                const id = req.params.id
                if (!ObjectId.isValid(id)) {
                    return res.status(400).send("Invalid ID format")
                }
                const query = { _id: new ObjectId(id) }
                const newPlant = req.body

                const updateDoc = {
                    $set: {
                        name: newPlant.name,
                        image: newPlant.image,
                        category: newPlant.category,
                        description: newPlant.description,
                        careLevel: newPlant.careLevel,
                        wateringFrequency: newPlant.wateringFrequency,
                        lastWateredDate: newPlant.lastWateredDate,
                        nextWateringDate: newPlant.nextWateringDate,
                        healthStatus: newPlant.healthStatus,
                        userEmail: newPlant.userEmail,
                        userName: newPlant.userName
                    }
                }

                const result = await plantcollection.updateOne(query, updateDoc)
                res.send(result)
            } catch (error) {
                console.error(error);
                res.status(500).send("Server error")
            }
        })

        app.delete('/allplants/:userId', async (req, res) => {
            try {
                const userID = req.params.userId
                if (!ObjectId.isValid(userID)) {
                    return res.status(400).send("Invalid ID format")
                }
                const query = { _id: new ObjectId(userID) }
                const result = await plantcollection.deleteOne(query) // Fixed syntax
                res.send(result)
            } catch (error) {
                console.error(error);
                res.status(500).send("Server error")
            }
        })

        await client.db("admin").command({ ping: 1 });
        console.log("Connected to MongoDB!");

        // Start server INSIDE run function
        app.listen(port, () => {
            console.log("Plant Server running on", port)
        })

    } catch (error) {
        console.error("Failed to connect to MongoDB:", error);
    }
}

run().catch(console.dir);