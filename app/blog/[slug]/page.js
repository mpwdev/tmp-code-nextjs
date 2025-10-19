import Link from 'next/link';

export default function BlogPostPage({ params }) {
  return (
    <main>
      <h1>The Blog Post</h1>
      <p>individual blog post page text here</p>
      <h2>{params.slug}</h2>

      <p>
        <Link href="/">Home</Link>
      </p>
      <p>
        <Link href="/blog/post-1">Post 1</Link>
      </p>
      <p>
        <Link href="/blog/post-2">Post 2</Link>
      </p>
    </main>
  );
}
