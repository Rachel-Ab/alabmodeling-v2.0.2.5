export default async function EditEntreprise({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const slug = (await params).slug;
    return <div>Edit Entreprise {slug}</div>;
}
