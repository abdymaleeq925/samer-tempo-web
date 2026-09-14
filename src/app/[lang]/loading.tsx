export default function Loading() {
  return (
    <div className="w-full min-h-[70vh] container mx-auto px-4 py-12 animate-pulse space-y-8">
      <div className="space-y-3 border-b border-border-subtle pb-8">
        <div className="h-6 w-32 bg-surface-sunken rounded-full" />
        <div className="h-10 w-2/3 bg-surface-sunken rounded-xl" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {Array.from({ length: 8 }).map((_, idx) => (
          <div
            key={idx}
            className="rounded-xl border border-border-subtle p-4 space-y-4 bg-stone-50"
          >
            <div className="w-full aspect-square bg-surface-sunken rounded-lg" />
            <div className="h-4 w-1/2 bg-surface-sunken rounded" />
            <div className="h-6 w-3/4 bg-surface-sunken rounded" />
            <div className="h-10 w-full bg-surface-sunken rounded-lg mt-4" />
          </div>
        ))}
      </div>
    </div>
  );
}
