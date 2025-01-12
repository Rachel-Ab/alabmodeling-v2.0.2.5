import { NextResponse } from "next/server";
import { clientPromise } from "../../../lib/mongodb";

export async function GET() {
    try {
        const client = await clientPromise; // Attente de la promesse de connexion
        const db = client.db("sample_mflix"); // Utilisez la base de données que vous souhaitez
        const commentsCollections = db.collection("comments");

        const comments = await commentsCollections.find({},{projection: {_id: 1, name:1}}).toArray();

        console.log("Ping réussi, la connexion à MongoDB a fonctionné !");

        return NextResponse.json({
            message: "Ping réussi, la connexion à MongoDB a fonctionné !",
            data: comments
        });
    } catch (error) {
        console.error("Erreur de connexion à MongoDB:", error);
        return NextResponse.json(
            { error: "Échec de la connexion à MongoDB" },
            { status: 500 }
        );
    }
}
