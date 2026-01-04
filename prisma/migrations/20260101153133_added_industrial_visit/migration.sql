/*
  Warnings:

  - You are about to drop the `subscriptions` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE "public"."images" ADD COLUMN     "industrialVisitId" TEXT,
ADD COLUMN     "visitReportId" TEXT;

-- AlterTable
ALTER TABLE "public"."videos" ADD COLUMN     "industrialVisitId" TEXT;

-- DropTable
DROP TABLE "public"."subscriptions";

-- CreateTable
CREATE TABLE "public"."industrial_visits" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "company" TEXT NOT NULL,
    "industry" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "objectives" TEXT NOT NULL,
    "agenda" TEXT,
    "visitDate" TIMESTAMP(3) NOT NULL,
    "startTime" TIMESTAMP(3) NOT NULL,
    "endTime" TIMESTAMP(3),
    "duration" TEXT,
    "maxParticipants" INTEGER NOT NULL,
    "currentParticipants" INTEGER NOT NULL DEFAULT 0,
    "organizerName" TEXT,
    "organizerContact" TEXT,
    "companyContact" TEXT,
    "companyEmail" TEXT,
    "eligibility" TEXT,
    "requirements" TEXT,
    "safetyGuidelines" TEXT,
    "transportProvided" BOOLEAN NOT NULL DEFAULT false,
    "meetingPoint" TEXT,
    "status" TEXT NOT NULL DEFAULT 'upcoming',
    "featured" BOOLEAN NOT NULL DEFAULT false,
    "registrationDeadline" TIMESTAMP(3),
    "registrationLink" TEXT,
    "slug" VARCHAR(255) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "industrial_visits_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."visit_registrations" (
    "id" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "cnic" TEXT,
    "university" TEXT NOT NULL,
    "department" TEXT NOT NULL,
    "semester" TEXT NOT NULL,
    "rollNumber" TEXT,
    "emergencyContact" TEXT NOT NULL,
    "emergencyPhone" TEXT NOT NULL,
    "visitId" TEXT NOT NULL,
    "registrationStatus" TEXT NOT NULL DEFAULT 'registered',
    "attended" BOOLEAN NOT NULL DEFAULT false,
    "attendanceMarkedAt" TIMESTAMP(3),
    "rating" INTEGER,
    "feedback" TEXT,
    "feedbackDate" TIMESTAMP(3),
    "consentFormSigned" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "visit_registrations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."visit_reports" (
    "id" TEXT NOT NULL,
    "visitId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "summary" TEXT NOT NULL,
    "highlights" TEXT NOT NULL,
    "learningOutcomes" TEXT NOT NULL,
    "authorName" TEXT NOT NULL,
    "authorEmail" TEXT,
    "publishedDate" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "visit_reports_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "industrial_visits_slug_key" ON "public"."industrial_visits"("slug");

-- CreateIndex
CREATE INDEX "industrial_visits_status_idx" ON "public"."industrial_visits"("status");

-- CreateIndex
CREATE INDEX "industrial_visits_industry_idx" ON "public"."industrial_visits"("industry");

-- CreateIndex
CREATE INDEX "industrial_visits_visitDate_idx" ON "public"."industrial_visits"("visitDate");

-- CreateIndex
CREATE INDEX "industrial_visits_slug_idx" ON "public"."industrial_visits"("slug");

-- CreateIndex
CREATE INDEX "industrial_visits_featured_idx" ON "public"."industrial_visits"("featured");

-- CreateIndex
CREATE INDEX "visit_registrations_visitId_idx" ON "public"."visit_registrations"("visitId");

-- CreateIndex
CREATE INDEX "visit_registrations_email_idx" ON "public"."visit_registrations"("email");

-- CreateIndex
CREATE INDEX "visit_registrations_registrationStatus_idx" ON "public"."visit_registrations"("registrationStatus");

-- CreateIndex
CREATE INDEX "visit_registrations_attended_idx" ON "public"."visit_registrations"("attended");

-- CreateIndex
CREATE UNIQUE INDEX "visit_registrations_email_visitId_key" ON "public"."visit_registrations"("email", "visitId");

-- CreateIndex
CREATE INDEX "visit_reports_visitId_idx" ON "public"."visit_reports"("visitId");

-- CreateIndex
CREATE INDEX "visit_reports_publishedDate_idx" ON "public"."visit_reports"("publishedDate");

-- AddForeignKey
ALTER TABLE "public"."images" ADD CONSTRAINT "images_visitReportId_fkey" FOREIGN KEY ("visitReportId") REFERENCES "public"."visit_reports"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."images" ADD CONSTRAINT "images_industrialVisitId_fkey" FOREIGN KEY ("industrialVisitId") REFERENCES "public"."industrial_visits"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."videos" ADD CONSTRAINT "videos_industrialVisitId_fkey" FOREIGN KEY ("industrialVisitId") REFERENCES "public"."industrial_visits"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."visit_registrations" ADD CONSTRAINT "visit_registrations_visitId_fkey" FOREIGN KEY ("visitId") REFERENCES "public"."industrial_visits"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."visit_reports" ADD CONSTRAINT "visit_reports_visitId_fkey" FOREIGN KEY ("visitId") REFERENCES "public"."industrial_visits"("id") ON DELETE CASCADE ON UPDATE CASCADE;
