export async function generateStaticParams() {
  const blogs = await fetch("http://localhost:3000/api/blogs").then((res) =>
    res.json()
  );
  return blogs.blogs.map(
    (blog: { name: string; id: string; author: string }) => ({
      slug: blog.id,
    })
  );
}

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <div>
      My Post: {params.slug} and type of parmas are {params.slug.length}
    </div>
  );
}
