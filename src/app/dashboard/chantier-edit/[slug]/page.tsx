export default async function EditChantier({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const slug = (await params).slug;
    return <div>Edit Chantier {slug}</div>;
}
