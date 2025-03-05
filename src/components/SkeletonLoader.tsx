
import React, { useState, useEffect } from "react";
import SkeletonCard from "./SkeletonCard";

export default function Skeleton({ onComplete }: { onComplete: () => void }) {
  const [showSkeleton, setShowSkeleton] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowSkeleton(false);
      onComplete();
    }, 1000);

    return () => clearTimeout(timeout); 
  }, [onComplete]);

  if (!showSkeleton) return null; 

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {[...Array(8)].map((_, i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  );
}
