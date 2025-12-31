/*
  Warnings:

  - The `attendance_mode` column on the `attendee_webinar` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `status` column on the `seminars` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `status` column on the `webinars` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `attendance_mode` on the `attendee_seminar` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "public"."attendee_seminar" DROP COLUMN "attendance_mode",
ADD COLUMN     "attendance_mode" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "public"."attendee_webinar" DROP COLUMN "attendance_mode",
ADD COLUMN     "attendance_mode" TEXT NOT NULL DEFAULT 'virtual';

-- AlterTable
ALTER TABLE "public"."seminars" DROP COLUMN "status",
ADD COLUMN     "status" TEXT NOT NULL DEFAULT 'upcoming';

-- AlterTable
ALTER TABLE "public"."webinars" DROP COLUMN "status",
ADD COLUMN     "status" TEXT NOT NULL DEFAULT 'upcoming';

-- DropEnum
DROP TYPE "public"."AttendanceMode";

-- DropEnum
DROP TYPE "public"."EventStatus";

-- DropEnum
DROP TYPE "public"."attendence_mode";

-- CreateTable
CREATE TABLE "public"."subscriptions" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "subscriptions_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "seminars_status_idx" ON "public"."seminars"("status");

-- CreateIndex
CREATE INDEX "webinars_status_idx" ON "public"."webinars"("status");
