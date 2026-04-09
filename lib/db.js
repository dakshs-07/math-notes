import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const options = {};

let client; 
let clientPromise;

if (!uri) throw new Error("Add MONGODB_URI first please - that shit is missing dude")

if (!global._mongoClientPromise){
    client = new MongoClient(uri, options)
    global._mongoClientPromise = client.connect();
}

clientPromise = global._mongoClientPromise;
export default clientPromise;