const {MongoClient} = require('mongodb');
require('dotenv').config();

const uri = process.env.URI;
const dbName = process.env.DATABASE;

let client;
let db;

async function connect() {
    if(db) return db;
    client = new MongoClient(uri)
    await client.connect();
    db = client.db(dbName)
    return db;
}

async function disconnect() {
    if(client) await client.close(); 
}

module.exports = {connect, disconnect}