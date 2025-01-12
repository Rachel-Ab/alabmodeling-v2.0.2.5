import { NextResponse } from "next/server";
import clientPromise from "../../../lib/mongodb";

export async function GET() {
    try {
        const client = await clientPromise;
        const db = client.db("sample_mflix"); // Utilisez la base de données que vous souhaitez
        await db.command({ ping: 1 }); // Envoi d'un ping pour vérifier la connexion

        console.log("Ping réussi, la connexion à MongoDB a fonctionné !");

        return NextResponse.json({
            message: "Ping réussi, la connexion à MongoDB a fonctionné !",
        });
    } catch (error) {
        console.error("Erreur de connexion à MongoDB:", error);
        return NextResponse.json(
            { error: "Échec de la connexion à MongoDB" },
            { status: 500 }
        );
    }
}
