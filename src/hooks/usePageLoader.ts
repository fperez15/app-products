"use client";

import { useState, useTransition } from "react";

export function usePageLoader() {
  const [loading, setLoading] = useState(false);
  const [isPending, startTransition] = useTransition();

  const handleStart = () => {
    setLoading(true);
    startTransition(() => {});
  };

  const handleStop = () => setLoading(false);

  return {
    loading: loading || isPending,
    handleStart,
    handleStop,
  };
}
