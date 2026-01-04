/*
  Warnings:

  - You are about to drop the column `coverLetterId` on the `InternshipApplication` table. All the data in the column will be lost.
  - You are about to drop the column `resumeId` on the `InternshipApplication` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[resumeId]` on the table `resources` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `resumeId` to the `resources` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "public"."InternshipApplication" DROP CONSTRAINT "InternshipApplication_coverLetterId_fkey";

-- DropForeignKey
ALTER TABLE "public"."InternshipApplication" DROP CONSTRAINT "InternshipApplication_resumeId_fkey";

-- DropIndex
DROP INDEX "public"."InternshipApplication_coverLetterId_key";

-- DropIndex
DROP INDEX "public"."InternshipApplication_resumeId_key";

-- AlterTable
ALTER TABLE "public"."InternshipApplication" DROP COLUMN "coverLetterId",
DROP COLUMN "resumeId",
ADD COLUMN     "coverLetter" TEXT;

-- AlterTable
ALTER TABLE "public"."resources" ADD COLUMN     "resumeId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "resources_resumeId_key" ON "public"."resources"("resumeId");

-- AddForeignKey
ALTER TABLE "public"."resources" ADD CONSTRAINT "resources_resumeId_fkey" FOREIGN KEY ("resumeId") REFERENCES "public"."InternshipApplication"("id") ON DELETE CASCADE ON UPDATE CASCADE;
