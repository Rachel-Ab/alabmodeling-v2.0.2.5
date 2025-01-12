import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

let clientPromise;

if (process.env.NODE_ENV === "development") {
    // Si on est en développement, éviter la reconnexion à chaque modification du code
    if (global._mongoClientPromise) {
        clientPromise = global._mongoClientPromise;
    } else {
        global._mongoClientPromise = client.connect();
        clientPromise = global._mongoClientPromise;
    }
} else {
    // En production, créer une nouvelle promesse pour chaque connexion
    clientPromise = client.connect();
}

export default clientPromise;
