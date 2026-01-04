/*
  Warnings:

  - Added the required column `userId` to the `GupShupRegistration` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."GupShupRegistration" ADD COLUMN     "userId" TEXT NOT NULL;
