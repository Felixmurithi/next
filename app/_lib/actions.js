export async function newIdea() {
  const res = await fetch("https://itsthisforthat.com/api.php?json", {
    next: { revalidate: 1 },
  });

  const data = await res.json();

  return [{ this: data.this }, { that: data.that }];
}
