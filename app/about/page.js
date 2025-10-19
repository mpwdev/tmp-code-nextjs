import Link from 'next/link';

export default function AboutPage() {
  return (
    <main>
      <h1>About Us</h1>
      <p>about page text here</p>
      <p>
        <Link href="/">Home</Link>
      </p>
    </main>
  );
}
