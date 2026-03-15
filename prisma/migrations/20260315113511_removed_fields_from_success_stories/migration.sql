/*
  Warnings:

  - You are about to drop the column `advice` on the `success_stories` table. All the data in the column will be lost.
  - You are about to drop the column `company` on the `success_stories` table. All the data in the column will be lost.
  - You are about to drop the column `currentPosition` on the `success_stories` table. All the data in the column will be lost.
  - You are about to drop the column `impact` on the `success_stories` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."success_stories" DROP COLUMN "advice",
DROP COLUMN "company",
DROP COLUMN "currentPosition",
DROP COLUMN "impact";
