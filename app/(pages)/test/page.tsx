export default async function Test() {
    const apiUrl = process.env.API_URL;

    if (!apiUrl) {
        throw new Error("La variable d'url de l'api API_URL n'est pas définie");
    }
    const res = await fetch(`${apiUrl}/test`);
    const comments = await res.json();

    return(
        <div>
            <h1>Test Liste des commentaires, exemple</h1>
            <div>
                {comments.data.map((comment: {_id: string; name: string}) => (
                    <p key={comment.id}>{comment.name}</p>
                ))}
            </div>
        </div>
    )

}
