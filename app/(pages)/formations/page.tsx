export default async function PublicFormations() {
    const apiUrl = process.env.API_URL;

    if (!apiUrl) {
        throw new Error("La variable d'url de l'api API_URL n'est pas définie");
    }
    const res = await fetch(`${apiUrl}/formations`);
    const formations = await res.json();

    return(
        <div>
            <h1>Liste des formations : </h1>
            <div>
                {formations.data.map((formation: {_id: string; name: string}) => (
                    <ul>
                        <li key={formation.id}>NOM : {formation.name}</li>
                        <li>DESCRIPTION : {formation.content}</li>
                        <li>ANNEE : {formation.year}</li>
                    </ul>

                ))}
            </div>
        </div>
    )
}
