export default function Prose({ children }: { children: React.ReactNode }) {
  return (
    <div className="prose prose-lg mx-auto max-w-none prose-headings:font-[family-name:var(--font-space-grotesk)] prose-headings:text-white prose-p:text-slate-300 prose-li:text-slate-300 prose-strong:text-white prose-a:text-cyan-400 prose-a:no-underline hover:prose-a:text-cyan-300">
      {children}
    </div>
  );
}
