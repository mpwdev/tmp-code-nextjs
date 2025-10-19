import Link from 'next/link';

export default async function MealDetailsPage({ params }) {
  const { mealSlug } = await params;
  //console.log(params);

  return (
    <main>
      <h1 style={{ color: 'white', textAlign: 'center' }}>Meal Details Page</h1>
      <p>{mealSlug}</p>
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
