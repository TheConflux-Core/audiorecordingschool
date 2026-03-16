export default function Prose({ children }: { children: React.ReactNode }) {
  return (
    <div className="prose prose-lg prose-gray mx-auto max-w-none">
      {children}
    </div>
  );
}
