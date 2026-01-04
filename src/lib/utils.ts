import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function ErrorMsg(msg: string) {
  return `Error Occurred during ${msg}`;
}
export const getEnrollmentStatusColor = (status: string) => {
  const colors: Record<string, string> = {
    enrolled: "bg-blue-500 text-white",
    in_progress: "bg-amber-500 text-white",
    completed: "bg-green-500 text-white",
    dropped: "bg-red-500 text-white",
  };
  return colors[status] || "bg-gray-500 text-white";
};