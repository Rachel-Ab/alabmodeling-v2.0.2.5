export default async function EditLogiciel({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const slug = (await params).slug;
    return <div>Edit Logiciel {slug}</div>;
}
