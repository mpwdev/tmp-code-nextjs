import Link from 'next/link';

export default function CommunityPage() {
  return (
    <main>
      <h1 style={{ color: 'white', textAlign: 'center' }}>Community page</h1>
      <p>
        <Link href="/" style={{ color: 'white' }}>
          Home
        </Link>
      </p>
      <p>
        <Link href="/meals" style={{ color: 'white' }}>
          Meals
        </Link>
      </p>
      <p>
        <Link href="/meals/share" style={{ color: 'white' }}>
          Share
        </Link>
      </p>
    </main>
  );
}
