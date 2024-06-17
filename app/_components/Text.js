export function Paragraph({ children, bgwhite = false }) {
  return <p className={`leading-loose tracking-wide   `}>{children}</p>;
}
export function Note({ children }) {
  return (
    <p className="-mt-2  rounded bg-stone-400 px-4 py-4 text-center text-sm">
      {children}
    </p>
  );
}
export function TextBold({ children }) {
  return (
    <strong className="before:content-['_'] after:content-['_']">
      {children}
    </strong>
  );
}

export function CodeString({ children }) {
  return <code className="bg-stone-400">{children}</code>;
}
