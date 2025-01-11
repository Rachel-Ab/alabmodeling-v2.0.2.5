export default async function Chantier({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const slug = (await params).slug;
    return <div>Public Chantier {slug}</div>;
}
