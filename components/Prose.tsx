export default function Prose({ children }: { children: React.ReactNode }) {
  return (
    <div className="prose prose-lg mx-auto max-w-none prose-headings:font-[family-name:var(--font-space-grotesk)]">
      {children}
    </div>
  );
}
