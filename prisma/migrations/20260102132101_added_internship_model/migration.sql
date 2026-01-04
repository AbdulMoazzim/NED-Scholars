/*
  Warnings:

  - Added the required column `userId` to the `visit_registrations` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."visit_registrations" ADD COLUMN     "userId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "public"."Internship" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "company" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "locationType" TEXT NOT NULL DEFAULT 'onsite',
    "description" TEXT NOT NULL,
    "responsibilities" TEXT NOT NULL,
    "requirements" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "duration" TEXT NOT NULL,
    "startDate" TIMESTAMP(3),
    "endDate" TIMESTAMP(3),
    "applicationDeadline" TIMESTAMP(3),
    "applicationUrl" TEXT,
    "contactEmail" TEXT,
    "contactPhone" TEXT,
    "isPaid" BOOLEAN NOT NULL DEFAULT false,
    "stipend" TEXT,
    "skills" TEXT[],
    "benefits" TEXT,
    "numberOfPositions" INTEGER DEFAULT 1,
    "status" TEXT NOT NULL DEFAULT 'active',
    "featured" BOOLEAN NOT NULL DEFAULT false,
    "slug" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Internship_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."InternshipApplication" (
    "id" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "cnic" TEXT,
    "university" TEXT NOT NULL,
    "department" TEXT NOT NULL,
    "semester" TEXT NOT NULL,
    "cgpa" TEXT NOT NULL,
    "expectedGraduation" TEXT NOT NULL,
    "resumeId" TEXT NOT NULL,
    "coverLetterId" TEXT,
    "linkedIn" TEXT,
    "portfolio" TEXT,
    "skills" TEXT[],
    "previousExperience" TEXT,
    "applicationStatus" TEXT NOT NULL DEFAULT 'submitted',
    "notes" TEXT,
    "internshipId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "InternshipApplication_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Internship_slug_key" ON "public"."Internship"("slug");

-- CreateIndex
CREATE INDEX "Internship_slug_idx" ON "public"."Internship"("slug");

-- CreateIndex
CREATE INDEX "Internship_applicationDeadline_idx" ON "public"."Internship"("applicationDeadline");

-- CreateIndex
CREATE UNIQUE INDEX "InternshipApplication_resumeId_key" ON "public"."InternshipApplication"("resumeId");

-- CreateIndex
CREATE UNIQUE INDEX "InternshipApplication_coverLetterId_key" ON "public"."InternshipApplication"("coverLetterId");

-- CreateIndex
CREATE INDEX "InternshipApplication_internshipId_idx" ON "public"."InternshipApplication"("internshipId");

-- CreateIndex
CREATE INDEX "InternshipApplication_email_idx" ON "public"."InternshipApplication"("email");

-- CreateIndex
CREATE INDEX "InternshipApplication_applicationStatus_idx" ON "public"."InternshipApplication"("applicationStatus");

-- AddForeignKey
ALTER TABLE "public"."InternshipApplication" ADD CONSTRAINT "InternshipApplication_resumeId_fkey" FOREIGN KEY ("resumeId") REFERENCES "public"."resources"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."InternshipApplication" ADD CONSTRAINT "InternshipApplication_coverLetterId_fkey" FOREIGN KEY ("coverLetterId") REFERENCES "public"."resources"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."InternshipApplication" ADD CONSTRAINT "InternshipApplication_internshipId_fkey" FOREIGN KEY ("internshipId") REFERENCES "public"."Internship"("id") ON DELETE CASCADE ON UPDATE CASCADE;
