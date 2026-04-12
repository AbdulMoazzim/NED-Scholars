"use server"
import { revalidatePath } from 'next/cache'

export async function handleRevalidate(path: string) {
  revalidatePath(path);
}