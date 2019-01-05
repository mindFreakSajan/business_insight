'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongodb = require('mongodb');

var _mongodb2 = _interopRequireDefault(_mongodb);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MongoClient = _mongodb2.default.MongoClient;

// Connection URL
var url = 'mongodb://localhost:27017';

// Database Name
var dbName = 'test';

var apis = [{
    method: 'POST',
    path: '/login',
    handler: function handler(request, reply) {
        console.log("inside login api");
        var data = request.payload.data;
        console.log(data);

        connectToDB().then(function (db) {
            return findDocuments(db, data.username);
        }).then(function (docs) {
            console.log(docs);

            if (docs.length > 0 && docs[0] !== null) {
                var requiredDoc = docs[0];
                if (requiredDoc.password === data.password) {
                    reply({ success: true });
                } else {
                    reply({ success: false });
                }
            } else {
                console.log("false");
                reply({ success: false });
            }
        }).catch(function (err) {
            console.log("error: " + err);
        });
    }
}, {
    method: 'GET',
    path: '/users',
    handler: function handler(request, reply) {

        connectToDB().then(function (db) {
            return findAllDocuments(db);
        }).then(function (docs) {
            reply(docs);
        }).catch(function (err) {
            console.log("error: " + err);
        });
    }
}, {
    method: 'GET',
    path: '/hello',
    handler: function handler(request, reply) {
        reply("Hello World");
    }
}];

var findDocuments = function findDocuments(db, username) {
    return new Promise(function (resolve, reject) {
        // Get the documents collection
        var collection = db.collection('login');
        // Find some documents
        collection.find({ username: username }).toArray(function (err, docs) {
            if (err) {
                reject(err);
            }
            console.log("Found the following records");
            resolve(docs);
        });
    });
};

var findAllDocuments = function findAllDocuments(db) {
    return new Promise(function (resolve, reject) {
        // Get the documents collection
        var collection = db.collection('login');
        // Find some documents
        collection.find().toArray(function (err, docs) {
            if (err) {
                reject(err);
            }
            console.log("Found the following records");
            resolve(docs);
        });
    });
};

var connectToDB = function connectToDB() {
    return new Promise(function (resolve, reject) {
        MongoClient.connect(url, function (err, client) {
            if (err) {
                reject(err);
            }
            console.log("Connected successfully to server");

            var db = client.db(dbName);
            resolve(db);
        });
    });
};

var listOfApi = apis.concat();
exports.default = listOfApi;
//# sourceMappingURL=login.js.map