/*
  Warnings:

  - You are about to drop the `attendee_seminar_form` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `attendee_webinar_form` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `mentor_form` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `partner_form` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `presenter_seminar_form` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `student_form` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `volunteer_form` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."attendee_seminar_form" DROP CONSTRAINT "attendee_seminar_form_seminarId_fkey";

-- DropForeignKey
ALTER TABLE "public"."attendee_webinar_form" DROP CONSTRAINT "attendee_webinar_form_webinarId_fkey";

-- DropForeignKey
ALTER TABLE "public"."presenter_seminar_form" DROP CONSTRAINT "presenter_seminar_form_seminarId_fkey";

-- AlterTable
ALTER TABLE "public"."images" ADD COLUMN     "remembranceId" TEXT;

-- DropTable
DROP TABLE "public"."attendee_seminar_form";

-- DropTable
DROP TABLE "public"."attendee_webinar_form";

-- DropTable
DROP TABLE "public"."mentor_form";

-- DropTable
DROP TABLE "public"."partner_form";

-- DropTable
DROP TABLE "public"."presenter_seminar_form";

-- DropTable
DROP TABLE "public"."student_form";

-- DropTable
DROP TABLE "public"."volunteer_form";

-- CreateTable
CREATE TABLE "public"."partners" (
    "id" TEXT NOT NULL,
    "full_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "why_join" VARCHAR(2048) NOT NULL,
    "organization_name" TEXT NOT NULL,
    "designation" TEXT NOT NULL,
    "linkedin_profile" TEXT,
    "areas_of_expertise" TEXT NOT NULL,
    "education_level" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "partners_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."students" (
    "id" TEXT NOT NULL,
    "full_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "why_join" VARCHAR(2048) NOT NULL,
    "education_level" TEXT NOT NULL,
    "field_of_study" TEXT NOT NULL,
    "organization_name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "students_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."mentors" (
    "id" TEXT NOT NULL,
    "full_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "why_join" VARCHAR(2048) NOT NULL,
    "designation" TEXT NOT NULL,
    "linkedin_profile" TEXT,
    "field_of_study" TEXT NOT NULL,
    "experience_years" INTEGER NOT NULL,
    "areas_of_expertise" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "mentors_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."volunteers" (
    "id" TEXT NOT NULL,
    "full_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "date_of_birth" TIMESTAMP(3) NOT NULL,
    "gender" "public"."Gender" NOT NULL,
    "status" "public"."Status" NOT NULL,
    "country" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "current_education_level" TEXT NOT NULL,
    "areas_of_interest" "public"."Area_of_Interest_For_Volunteers" NOT NULL,
    "skills" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "volunteers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."attendee_seminar" (
    "id" TEXT NOT NULL,
    "full_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "attendance_mode" "public"."AttendanceMode" NOT NULL,
    "seminarId" TEXT,
    "registration_status" TEXT NOT NULL DEFAULT 'waitlist',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "attendee_seminar_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."attendee_webinar" (
    "id" TEXT NOT NULL,
    "full_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "attendance_mode" "public"."AttendanceMode" NOT NULL DEFAULT 'virtual',
    "webinarId" TEXT,
    "registration_status" TEXT NOT NULL DEFAULT 'confirmed',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "attendee_webinar_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."presenter_seminar" (
    "id" TEXT NOT NULL,
    "full_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "current_designation" TEXT NOT NULL,
    "organization_name" TEXT NOT NULL,
    "linkedin_profile" TEXT,
    "presentation_title" TEXT NOT NULL,
    "presentation_topic" TEXT NOT NULL,
    "areas_of_expertise" TEXT NOT NULL,
    "why_present" TEXT NOT NULL,
    "impact_statement" TEXT,
    "seminarId" TEXT,
    "application_status" "public"."Status" NOT NULL DEFAULT 'pending',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "reviewed_at" TIMESTAMP(3),
    "scheduled_date" TIMESTAMP(3),

    CONSTRAINT "presenter_seminar_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Remembrance" (
    "id" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Remembrance_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "attendee_seminar_seminarId_idx" ON "public"."attendee_seminar"("seminarId");

-- CreateIndex
CREATE INDEX "attendee_seminar_email_idx" ON "public"."attendee_seminar"("email");

-- CreateIndex
CREATE INDEX "attendee_webinar_webinarId_idx" ON "public"."attendee_webinar"("webinarId");

-- CreateIndex
CREATE INDEX "attendee_webinar_email_idx" ON "public"."attendee_webinar"("email");

-- CreateIndex
CREATE INDEX "presenter_seminar_seminarId_idx" ON "public"."presenter_seminar"("seminarId");

-- CreateIndex
CREATE INDEX "presenter_seminar_email_idx" ON "public"."presenter_seminar"("email");

-- CreateIndex
CREATE INDEX "presenter_seminar_application_status_idx" ON "public"."presenter_seminar"("application_status");

-- AddForeignKey
ALTER TABLE "public"."images" ADD CONSTRAINT "images_remembranceId_fkey" FOREIGN KEY ("remembranceId") REFERENCES "public"."Remembrance"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."attendee_seminar" ADD CONSTRAINT "attendee_seminar_seminarId_fkey" FOREIGN KEY ("seminarId") REFERENCES "public"."seminars"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."attendee_webinar" ADD CONSTRAINT "attendee_webinar_webinarId_fkey" FOREIGN KEY ("webinarId") REFERENCES "public"."webinars"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."presenter_seminar" ADD CONSTRAINT "presenter_seminar_seminarId_fkey" FOREIGN KEY ("seminarId") REFERENCES "public"."seminars"("id") ON DELETE SET NULL ON UPDATE CASCADE;
