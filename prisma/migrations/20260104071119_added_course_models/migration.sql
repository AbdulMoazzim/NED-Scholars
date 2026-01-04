-- CreateTable
CREATE TABLE "public"."Course" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "instructor" TEXT NOT NULL,
    "instructorTitle" TEXT,
    "instructorBio" TEXT,
    "overview" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "learningOutcomes" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "level" TEXT NOT NULL DEFAULT 'beginner',
    "thumbnailUrl" TEXT,
    "youtubeUrl" TEXT,
    "videoUrl" TEXT,
    "duration" TEXT,
    "targetAudience" TEXT NOT NULL,
    "prerequisites" TEXT,
    "syllabus" TEXT,
    "modules" INTEGER,
    "lessons" INTEGER,
    "isFree" BOOLEAN NOT NULL DEFAULT true,
    "price" DOUBLE PRECISION,
    "currency" TEXT DEFAULT 'USD',
    "status" TEXT NOT NULL DEFAULT 'active',
    "featured" BOOLEAN NOT NULL DEFAULT false,
    "rating" DOUBLE PRECISION,
    "enrollmentCount" INTEGER NOT NULL DEFAULT 0,
    "publishedDate" TIMESTAMP(3),
    "slug" TEXT NOT NULL,
    "tags" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Course_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."CourseEnrollment" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT,
    "currentStatus" TEXT NOT NULL,
    "organization" TEXT,
    "department" TEXT,
    "courseId" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'enrolled',
    "progress" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "enrollmentDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lastAccessedAt" TIMESTAMP(3),
    "completionDate" TIMESTAMP(3),
    "rating" DOUBLE PRECISION,
    "review" TEXT,
    "reviewDate" TIMESTAMP(3),
    "certificateIssued" BOOLEAN NOT NULL DEFAULT false,
    "certificateUrl" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CourseEnrollment_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Course_slug_key" ON "public"."Course"("slug");

-- CreateIndex
CREATE INDEX "Course_category_idx" ON "public"."Course"("category");

-- CreateIndex
CREATE INDEX "Course_level_idx" ON "public"."Course"("level");

-- CreateIndex
CREATE INDEX "Course_status_idx" ON "public"."Course"("status");

-- CreateIndex
CREATE INDEX "Course_featured_idx" ON "public"."Course"("featured");

-- CreateIndex
CREATE INDEX "Course_slug_idx" ON "public"."Course"("slug");

-- CreateIndex
CREATE INDEX "CourseEnrollment_courseId_idx" ON "public"."CourseEnrollment"("courseId");

-- CreateIndex
CREATE INDEX "CourseEnrollment_email_idx" ON "public"."CourseEnrollment"("email");

-- CreateIndex
CREATE INDEX "CourseEnrollment_status_idx" ON "public"."CourseEnrollment"("status");

-- CreateIndex
CREATE UNIQUE INDEX "CourseEnrollment_email_courseId_key" ON "public"."CourseEnrollment"("email", "courseId");

-- AddForeignKey
ALTER TABLE "public"."CourseEnrollment" ADD CONSTRAINT "CourseEnrollment_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "public"."Course"("id") ON DELETE CASCADE ON UPDATE CASCADE;
