import Link from 'next/link';

export default function MealsPage() {
  return (
    <main>
      <h1 style={{ color: 'white', textAlign: 'center' }}>Meals page</h1>
      <p>
        <Link href="/" style={{ color: 'white' }}>
          Home
        </Link>
      </p>
      <p>
        <Link href="/meals/share" style={{ color: 'white' }}>
          Share
        </Link>
      </p>
      <p>
        <Link href="/community" style={{ color: 'white' }}>
          Community
        </Link>
      </p>
      <p>
        <Link href="/meals/dynamic-page-1" style={{ color: 'white' }}>
          Dynamic page 1
        </Link>
      </p>
      <p>
        <Link href="/meals/dynamic-page-2" style={{ color: 'white' }}>
          Dynamic page 2
        </Link>
      </p>
    </main>
  );
}
