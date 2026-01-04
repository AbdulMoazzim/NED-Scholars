/*
  Warnings:

  - You are about to drop the column `publishedDate` on the `Course` table. All the data in the column will be lost.
  - You are about to drop the column `certificateIssued` on the `CourseEnrollment` table. All the data in the column will be lost.
  - You are about to drop the column `certificateUrl` on the `CourseEnrollment` table. All the data in the column will be lost.
  - You are about to drop the column `completionDate` on the `CourseEnrollment` table. All the data in the column will be lost.
  - You are about to drop the column `lastAccessedAt` on the `CourseEnrollment` table. All the data in the column will be lost.
  - You are about to drop the column `progress` on the `CourseEnrollment` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."Course" DROP COLUMN "publishedDate";

-- AlterTable
ALTER TABLE "public"."CourseEnrollment" DROP COLUMN "certificateIssued",
DROP COLUMN "certificateUrl",
DROP COLUMN "completionDate",
DROP COLUMN "lastAccessedAt",
DROP COLUMN "progress";
