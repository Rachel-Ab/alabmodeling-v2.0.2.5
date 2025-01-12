import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;

if (!uri) {
    throw new Error("La variable d'environnement MONGODB_URI n'est pas définie");
}

const client = new MongoClient(uri);

let clientPromise: Promise<MongoClient>;

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

export {clientPromise};
