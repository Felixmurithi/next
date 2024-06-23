export default async function Page({ params }) {
  const res = await fetch("https://itsthisforthat.com/api.php?json", {
    next: { revalidate: 1 },
  });

  const data = await res.json();

  console.log(data);

  return (
    <h1>
      {data.this} : {data.that}
      {/* Hello, 
      {data.results[0].name.title} {data.results[0].name.first}{" "}
      {data.results[0].name.last}{" "} */}
    </h1>
  );
}
