export default function Progress({
  step,
  total,
}: {
  step: number;
  total: number;
}) {
  return (
    <div className="flex justify-center gap-2 py-4">
      {Array.from({ length: total }).map((_, i) => (
        <span key={i} className={`dot ${i < step ? "active" : ""}`} />
      ))}
    </div>
  );
}
