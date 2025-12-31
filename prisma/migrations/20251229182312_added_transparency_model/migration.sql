/*
  Warnings:

  - You are about to drop the column `reviewed_at` on the `presenter_seminar` table. All the data in the column will be lost.
  - You are about to drop the column `scheduled_date` on the `presenter_seminar` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."presenter_seminar" DROP COLUMN "reviewed_at",
DROP COLUMN "scheduled_date";

-- AlterTable
ALTER TABLE "public"."resources" ADD COLUMN     "transparencyResourceId" TEXT;

-- CreateTable
CREATE TABLE "public"."transparency" (
    "id" TEXT NOT NULL,
    "year" VARCHAR(2048) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "transparency_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."resources" ADD CONSTRAINT "resources_transparencyResourceId_fkey" FOREIGN KEY ("transparencyResourceId") REFERENCES "public"."transparency"("id") ON DELETE CASCADE ON UPDATE CASCADE;
