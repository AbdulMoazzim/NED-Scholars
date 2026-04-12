/*
  Warnings:

  - You are about to drop the `Course` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `CourseEnrollment` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."CourseEnrollment" DROP CONSTRAINT "CourseEnrollment_courseId_fkey";

-- AlterTable
ALTER TABLE "public"."images" ADD COLUMN     "courseId" TEXT;

-- AlterTable
ALTER TABLE "public"."videos" ADD COLUMN     "courseId" TEXT;

-- AlterTable
ALTER TABLE "public"."youtube_urls" ADD COLUMN     "courseId" TEXT;

-- DropTable
DROP TABLE "public"."Course";

-- DropTable
DROP TABLE "public"."CourseEnrollment";

-- CreateTable
CREATE TABLE "public"."elearning_courses" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "slug" VARCHAR(255) NOT NULL,
    "description" VARCHAR(2048) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "elearning_courses_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "elearning_courses_slug_key" ON "public"."elearning_courses"("slug");

-- AddForeignKey
ALTER TABLE "public"."images" ADD CONSTRAINT "images_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "public"."elearning_courses"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."videos" ADD CONSTRAINT "videos_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "public"."elearning_courses"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."youtube_urls" ADD CONSTRAINT "youtube_urls_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "public"."elearning_courses"("id") ON DELETE CASCADE ON UPDATE CASCADE;
