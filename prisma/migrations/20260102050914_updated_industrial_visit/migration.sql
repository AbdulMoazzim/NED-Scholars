/*
  Warnings:

  - You are about to drop the column `visitReportId` on the `images` table. All the data in the column will be lost.
  - You are about to drop the column `eligibility` on the `industrial_visits` table. All the data in the column will be lost.
  - You are about to drop the column `featured` on the `industrial_visits` table. All the data in the column will be lost.
  - You are about to drop the column `registrationDeadline` on the `industrial_visits` table. All the data in the column will be lost.
  - You are about to drop the column `registrationLink` on the `industrial_visits` table. All the data in the column will be lost.
  - You are about to drop the column `requirements` on the `industrial_visits` table. All the data in the column will be lost.
  - You are about to drop the column `attendanceMarkedAt` on the `visit_registrations` table. All the data in the column will be lost.
  - You are about to drop the column `attended` on the `visit_registrations` table. All the data in the column will be lost.
  - You are about to drop the column `consentFormSigned` on the `visit_registrations` table. All the data in the column will be lost.
  - You are about to drop the `visit_reports` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."images" DROP CONSTRAINT "images_visitReportId_fkey";

-- DropForeignKey
ALTER TABLE "public"."visit_reports" DROP CONSTRAINT "visit_reports_visitId_fkey";

-- DropIndex
DROP INDEX "public"."industrial_visits_featured_idx";

-- DropIndex
DROP INDEX "public"."visit_registrations_attended_idx";

-- AlterTable
ALTER TABLE "public"."images" DROP COLUMN "visitReportId";

-- AlterTable
ALTER TABLE "public"."industrial_visits" DROP COLUMN "eligibility",
DROP COLUMN "featured",
DROP COLUMN "registrationDeadline",
DROP COLUMN "registrationLink",
DROP COLUMN "requirements";

-- AlterTable
ALTER TABLE "public"."visit_registrations" DROP COLUMN "attendanceMarkedAt",
DROP COLUMN "attended",
DROP COLUMN "consentFormSigned";

-- DropTable
DROP TABLE "public"."visit_reports";
