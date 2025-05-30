import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Helper function to handle base path for static assets
export function getAssetPath(path: string): string {
  // In production with basePath, prefix the path
  const basePath = process.env.NODE_ENV === "production" ? "/madamari" : "";
  return `${basePath}${path}`;
}
