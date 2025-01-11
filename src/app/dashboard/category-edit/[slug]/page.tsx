export default async function EditCategory({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const slug = (await params).slug;
    return <div>Edit Category {slug}</div>;
}
