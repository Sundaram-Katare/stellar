

export default function ReviewResult({ result }: { result: any}) {
  return (
    <div className="space-y-4 font-sans">
      <div className="text-4xl font-bold text-yellow-400">
        Score: {result.score}
      </div>

      <div>
        <h3 className="font-semibold text-red-400">Bugs</h3>
        {result.bugs.map((b: any, i: any) => (
          <div key={i} className="bg-red-600/20 p-2 rounded">{b}</div>
        ))}
      </div>

      <div>
        <h3 className="font-semibold text-blue-400">Optimizations</h3>
        {result.optimizations.map((o: any, i: any) => (
          <div key={i} className="bg-blue-600/20 p-2 rounded">{o}</div>
        ))}
      </div>
    </div>
  );
}
