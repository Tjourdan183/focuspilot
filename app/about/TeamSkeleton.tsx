import { Skeleton } from "@/components/ui/skeleton";

export default function TeamSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="glass rounded-2xl p-8 shadow-lg border border-white/20">
          <Skeleton className="w-12 h-12 rounded-lg mb-4" />
          <Skeleton className="h-6 w-3/4 mb-2" />
          <Skeleton className="h-4 w-1/2 mb-4" />
          <Skeleton className="h-20 w-full" />
        </div>
      ))}
    </div>
  );
} 