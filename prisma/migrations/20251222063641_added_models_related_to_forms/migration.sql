/*
  Warnings:

  - Added the required column `public_id` to the `images` table without a default value. This is not possible if the table is not empty.
  - Added the required column `public_id` to the `videos` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "public"."Gender" AS ENUM ('MALE', 'FEMALE', 'PREFER_NOT_TO_SAY');

-- CreateEnum
CREATE TYPE "public"."Status" AS ENUM ('pending', 'under_review', 'approved', 'rejected');

-- CreateEnum
CREATE TYPE "public"."Area_of_Interest_For_Volunteers" AS ENUM ('graphics', 'animations', 'website', 'media', 'ai_sw', 'medical', 'laptop_distribution', 'event_management');

-- CreateEnum
CREATE TYPE "public"."attendence_mode" AS ENUM ('virtual', 'physical');

-- CreateEnum
CREATE TYPE "public"."AttendanceMode" AS ENUM ('virtual', 'physical');

-- CreateEnum
CREATE TYPE "public"."EventStatus" AS ENUM ('upcoming', 'ongoing', 'completed', 'cancelled');

-- AlterTable
ALTER TABLE "public"."images" ADD COLUMN     "public_id" TEXT NOT NULL,
ADD COLUMN     "seminarId" TEXT,
ADD COLUMN     "webinarId" TEXT;

-- AlterTable
ALTER TABLE "public"."videos" ADD COLUMN     "public_id" TEXT NOT NULL,
ADD COLUMN     "seminarId" TEXT,
ADD COLUMN     "webinarId" TEXT;

-- CreateTable
CREATE TABLE "public"."schoilarship_form" (
    "id" TEXT NOT NULL,
    "full_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "date_of_birth" TIMESTAMP(3) NOT NULL,
    "gender" "public"."Gender" NOT NULL,
    "status" "public"."Status" NOT NULL,
    "country" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "address" TEXT,
    "current_education_level" TEXT NOT NULL,
    "institution_name" TEXT NOT NULL,
    "field_of_study" TEXT NOT NULL,
    "gpa_or_percentage" TEXT NOT NULL,
    "expected_graduation_year" INTEGER,
    "annual_family_income" TEXT NOT NULL,
    "why_deserve_scholarship" VARCHAR(2048) NOT NULL,
    "future_goals" VARCHAR(2048) NOT NULL,
    "academic_transcript_url" TEXT NOT NULL,
    "recommendation_letter_url" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "schoilarship_form_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."partner_form" (
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

    CONSTRAINT "partner_form_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."student_form" (
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

    CONSTRAINT "student_form_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."mentor_form" (
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

    CONSTRAINT "mentor_form_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."volunteer_form" (
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

    CONSTRAINT "volunteer_form_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."seminars" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3),
    "location" TEXT NOT NULL,
    "maxCapacity" INTEGER,
    "virtualCapacity" INTEGER,
    "physicalCapacity" INTEGER,
    "status" "public"."EventStatus" NOT NULL DEFAULT 'upcoming',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "seminars_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."webinars" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3),
    "meetingLink" TEXT,
    "meetingPassword" TEXT,
    "platform" TEXT,
    "maxParticipants" INTEGER,
    "status" "public"."EventStatus" NOT NULL DEFAULT 'upcoming',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "webinars_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."attendee_seminar_form" (
    "id" TEXT NOT NULL,
    "full_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "attendance_mode" "public"."AttendanceMode" NOT NULL,
    "seminarId" TEXT,
    "registration_status" TEXT NOT NULL DEFAULT 'waitlist',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "attendee_seminar_form_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."attendee_webinar_form" (
    "id" TEXT NOT NULL,
    "full_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "attendance_mode" "public"."AttendanceMode" NOT NULL DEFAULT 'virtual',
    "webinarId" TEXT,
    "registration_status" TEXT NOT NULL DEFAULT 'confirmed',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "attendee_webinar_form_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."presenter_seminar_form" (
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

    CONSTRAINT "presenter_seminar_form_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "seminars_date_idx" ON "public"."seminars"("date");

-- CreateIndex
CREATE INDEX "seminars_status_idx" ON "public"."seminars"("status");

-- CreateIndex
CREATE INDEX "webinars_date_idx" ON "public"."webinars"("date");

-- CreateIndex
CREATE INDEX "webinars_status_idx" ON "public"."webinars"("status");

-- CreateIndex
CREATE INDEX "attendee_seminar_form_seminarId_idx" ON "public"."attendee_seminar_form"("seminarId");

-- CreateIndex
CREATE INDEX "attendee_seminar_form_email_idx" ON "public"."attendee_seminar_form"("email");

-- CreateIndex
CREATE INDEX "attendee_webinar_form_webinarId_idx" ON "public"."attendee_webinar_form"("webinarId");

-- CreateIndex
CREATE INDEX "attendee_webinar_form_email_idx" ON "public"."attendee_webinar_form"("email");

-- CreateIndex
CREATE INDEX "presenter_seminar_form_seminarId_idx" ON "public"."presenter_seminar_form"("seminarId");

-- CreateIndex
CREATE INDEX "presenter_seminar_form_email_idx" ON "public"."presenter_seminar_form"("email");

-- CreateIndex
CREATE INDEX "presenter_seminar_form_application_status_idx" ON "public"."presenter_seminar_form"("application_status");

-- AddForeignKey
ALTER TABLE "public"."images" ADD CONSTRAINT "images_seminarId_fkey" FOREIGN KEY ("seminarId") REFERENCES "public"."seminars"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."images" ADD CONSTRAINT "images_webinarId_fkey" FOREIGN KEY ("webinarId") REFERENCES "public"."webinars"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."videos" ADD CONSTRAINT "videos_seminarId_fkey" FOREIGN KEY ("seminarId") REFERENCES "public"."seminars"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."videos" ADD CONSTRAINT "videos_webinarId_fkey" FOREIGN KEY ("webinarId") REFERENCES "public"."webinars"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."attendee_seminar_form" ADD CONSTRAINT "attendee_seminar_form_seminarId_fkey" FOREIGN KEY ("seminarId") REFERENCES "public"."seminars"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."attendee_webinar_form" ADD CONSTRAINT "attendee_webinar_form_webinarId_fkey" FOREIGN KEY ("webinarId") REFERENCES "public"."webinars"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."presenter_seminar_form" ADD CONSTRAINT "presenter_seminar_form_seminarId_fkey" FOREIGN KEY ("seminarId") REFERENCES "public"."seminars"("id") ON DELETE SET NULL ON UPDATE CASCADE;
