import { NextResponse } from "next/server";
import { clientPromise } from "../../../lib/mongodb";

export async function GET() {
    try {
        const client = await clientPromise; // Attente de la promesse de connexion
        const db = client.db("alabmodeling"); // Utilisez la base de données que vous souhaitez
        const formationsCollections = db.collection("formations");

        const formations = await formationsCollections.find({}).toArray();

        console.log("Ping réussi, la connexion à MongoDB a fonctionné !");

        return NextResponse.json({
            message: "Ping réussi, la connexion à MongoDB a fonctionné !",
            data: formations
        });
    } catch (error) {
        console.error("Erreur de connexion à MongoDB:", error);
        return NextResponse.json(
            { error: "Échec de la connexion à MongoDB" },
            { status: 500 }
        );
    }
}
