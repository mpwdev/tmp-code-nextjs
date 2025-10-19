import Link from 'next/link';

export default function ShareMealPage() {
  return (
    <main>
      <h1 style={{ color: 'white', textAlign: 'center' }}>Share Meal</h1>
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
    </main>
  );
}
