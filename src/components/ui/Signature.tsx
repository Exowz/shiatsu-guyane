'use client';

import { Heart } from "lucide-react";
import { Dictionary } from "@/types/dictionary";

interface SignatureProps {
  dictionary: Dictionary;
}

export function Signature({ dictionary }: SignatureProps) {
  return (
    <div className="flex items-center justify-center py-4 px-4">
      <p className="text-xs text-[rgb(var(--color-text-secondary))]/60 text-center">
        {dictionary.signature?.text}{" "}
        <Heart 
          className="inline-block w-3 h-3 mx-1 animate-pulse text-red-500" 
          fill="currentColor"
        />{" "}
        {dictionary.signature?.by}
      </p>
    </div>
  );
}