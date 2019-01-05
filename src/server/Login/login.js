import Mongo from 'mongodb';
const MongoClient = Mongo.MongoClient;

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'test';

const apis = [
    {
        method: 'POST',
        path: '/login',
        handler: (request, reply) => {
            console.log("inside login api")
            let data = request.payload.data;
            console.log(data);

            connectToDB()
                .then(db => findDocuments(db, data.username))
                .then((docs) => {
                    console.log(docs);

                    if (docs.length > 0 && docs[0] !== null) {
                        const requiredDoc = docs[0];
                        if (requiredDoc.password === data.password) {
                            reply({ success: true });
                        } else {
                            reply({ success: false });
                        }
                    } else {
                        console.log("false")
                        reply({ success: false });
                    }
                })
                .catch(err => {
                    console.log("error: " + err);
                });
        },
    },

    {
        method: 'GET',
        path: '/users',
        handler: (request, reply) => {

            connectToDB()
                .then(db => findAllDocuments(db))
                .then((docs) => {
                    reply(docs);
                })
                .catch(err => {
                    console.log("error: " + err);
                });
        },
    },
    {
        method: 'GET',
        path: '/hello',
        handler: (request, reply) => {
            reply("Hello World");
        },
    }
]

const findDocuments = (db, username) => new Promise((resolve, reject) => {
    // Get the documents collection
    const collection = db.collection('login');
    // Find some documents
    collection.find({ username }).toArray((err, docs) => {
        if (err) {
            reject(err);
        }
        console.log("Found the following records");
        resolve(docs);
    });
})

const findAllDocuments = (db) => new Promise((resolve, reject) => {
    // Get the documents collection
    const collection = db.collection('login');
    // Find some documents
    collection.find().toArray((err, docs) => {
        if (err) {
            reject(err);
        }
        console.log("Found the following records");
        resolve(docs);
    });
})

const connectToDB = () => {
    return new Promise((resolve, reject) => {
        MongoClient.connect(url, (err, client) => {
            if (err) {
                reject(err);
            }
            console.log("Connected successfully to server");

            const db = client.db(dbName);
            resolve(db);
        });
    })
}

const listOfApi = apis.concat();
export default listOfApi;