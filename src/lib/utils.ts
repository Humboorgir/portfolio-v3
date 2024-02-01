import { twMerge } from "tailwind-merge";
import { ClassValue, clsx } from "clsx";

export function cn(...classes: ClassValue[]) {
  return twMerge(clsx(classes));
}
