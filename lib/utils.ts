import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Helper function to handle base path for static assets
export function getAssetPath(path: string): string {
  // No base path needed for dedicated domain
  return path;
}
