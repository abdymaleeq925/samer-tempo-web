export default function Loading() {
  return (
    <div className="w-full min-h-[70vh] container mx-auto px-4 py-12 animate-pulse space-y-8">
      
      <div className="space-y-3 border-b border-zinc-200 pb-8">
        <div className="h-6 w-32 bg-zinc-200 rounded-full" />
        <div className="h-10 w-2/3 bg-zinc-200 rounded-xl" />
      </div>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {Array.from({ length: 8 }).map((_, idx) => (
          <div
            key={idx}
            className="rounded-xl border border-zinc-200 p-4 space-y-4 bg-stone-50"
          >
            <div className="w-full aspect-square bg-zinc-200 rounded-lg" />
            <div className="h-4 w-1/2 bg-zinc-200 rounded" />
            <div className="h-6 w-3/4 bg-zinc-200 rounded" />
            <div className="h-10 w-full bg-zinc-200 rounded-lg mt-4" />
          </div>
        ))}
      </div>
    </div>
  );
}