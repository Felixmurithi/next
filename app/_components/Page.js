export function Section({ children }) {
  return <section className="flex flex-col gap-7">{children}</section>;
}
export function Article({ children }) {
  return <article className="flex flex-col gap-24">{children}</article>;
}
