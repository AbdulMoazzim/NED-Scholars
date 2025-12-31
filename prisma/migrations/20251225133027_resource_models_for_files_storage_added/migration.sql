/*
  Warnings:

  - You are about to drop the column `academic_transcript_url` on the `schoilarship_form` table. All the data in the column will be lost.
  - You are about to drop the column `recommendation_letter_url` on the `schoilarship_form` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."schoilarship_form" DROP COLUMN "academic_transcript_url",
DROP COLUMN "recommendation_letter_url";

-- CreateTable
CREATE TABLE "public"."resources" (
    "id" TEXT NOT NULL,
    "url" VARCHAR(2048) NOT NULL,
    "public_id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "scholarshipResourceId" TEXT,

    CONSTRAINT "resources_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."resources" ADD CONSTRAINT "resources_scholarshipResourceId_fkey" FOREIGN KEY ("scholarshipResourceId") REFERENCES "public"."schoilarship_form"("id") ON DELETE CASCADE ON UPDATE CASCADE;
