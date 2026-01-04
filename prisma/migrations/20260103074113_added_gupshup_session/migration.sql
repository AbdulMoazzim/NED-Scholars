/*
  Warnings:

  - A unique constraint covering the columns `[gupshupId]` on the table `images` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `gupshupId` to the `images` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."images" ADD COLUMN     "gupshupId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "public"."GupShupSession" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "speakerName" TEXT NOT NULL,
    "speakerBio" TEXT,
    "speakerEmail" TEXT,
    "category" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "startTime" TEXT NOT NULL,
    "duration" TEXT NOT NULL,
    "platform" TEXT,
    "meetingLink" TEXT,
    "meetingPassword" TEXT,
    "mainTopic" TEXT NOT NULL,
    "discussionPoints" TEXT,
    "expectedOutcome" TEXT,
    "youtubeUrl" TEXT,
    "maxAttendees" INTEGER DEFAULT 100,
    "requiresRegistration" BOOLEAN NOT NULL DEFAULT true,
    "registrationDeadline" TIMESTAMP(3),
    "status" TEXT NOT NULL DEFAULT 'upcoming',
    "featured" BOOLEAN NOT NULL DEFAULT false,
    "isPublic" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "GupShupSession_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."GupShupRegistration" (
    "id" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT,
    "organization" TEXT,
    "designation" TEXT,
    "whyAttending" TEXT,
    "questionsForSpeaker" TEXT,
    "registrationStatus" TEXT NOT NULL DEFAULT 'confirmed',
    "attended" BOOLEAN NOT NULL DEFAULT false,
    "rating" INTEGER,
    "feedback" TEXT,
    "feedbackDate" TIMESTAMP(3),
    "sessionId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "GupShupRegistration_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "GupShupSession_slug_key" ON "public"."GupShupSession"("slug");

-- CreateIndex
CREATE INDEX "GupShupSession_slug_idx" ON "public"."GupShupSession"("slug");

-- CreateIndex
CREATE INDEX "GupShupSession_featured_idx" ON "public"."GupShupSession"("featured");

-- CreateIndex
CREATE INDEX "GupShupRegistration_sessionId_idx" ON "public"."GupShupRegistration"("sessionId");

-- CreateIndex
CREATE INDEX "GupShupRegistration_email_idx" ON "public"."GupShupRegistration"("email");

-- CreateIndex
CREATE UNIQUE INDEX "GupShupRegistration_email_sessionId_key" ON "public"."GupShupRegistration"("email", "sessionId");

-- CreateIndex
CREATE UNIQUE INDEX "images_gupshupId_key" ON "public"."images"("gupshupId");

-- AddForeignKey
ALTER TABLE "public"."images" ADD CONSTRAINT "images_gupshupId_fkey" FOREIGN KEY ("gupshupId") REFERENCES "public"."GupShupSession"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."GupShupRegistration" ADD CONSTRAINT "GupShupRegistration_sessionId_fkey" FOREIGN KEY ("sessionId") REFERENCES "public"."GupShupSession"("id") ON DELETE CASCADE ON UPDATE CASCADE;
