export default async function EditFormation({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const slug = (await params).slug;
    return <div>Edit Formation {slug}</div>;
}
