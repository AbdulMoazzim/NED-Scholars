-- CreateEnum
CREATE TYPE "public"."blog_category" AS ENUM ('TECHNOLOGY', 'EDUCATION', 'RESEARCH', 'INNOVATION', 'STUDENT_LIFE');

-- CreateEnum
CREATE TYPE "public"."news_priority" AS ENUM ('LOW', 'MEDIUM', 'HIGH', 'URGENT');

-- CreateEnum
CREATE TYPE "public"."news_category" AS ENUM ('ANNOUNCEMENT', 'EVENT', 'ACHIEVEMENT', 'RESEARCH', 'PARTNERSHIP');

-- CreateTable
CREATE TABLE "public"."team_members" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(2048) NOT NULL,
    "position" VARCHAR(2048) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "phone" VARCHAR(50),
    "bio" VARCHAR(2048) NOT NULL,
    "expertise" VARCHAR(2048),
    "achievements" VARCHAR(2048),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "team_members_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."success_stories" (
    "id" TEXT NOT NULL,
    "studentName" VARCHAR(2048) NOT NULL,
    "year" INTEGER NOT NULL,
    "currentPosition" VARCHAR(2048) NOT NULL,
    "company" VARCHAR(2048) NOT NULL,
    "story" VARCHAR(2048) NOT NULL,
    "impact" VARCHAR(2048) NOT NULL,
    "advice" VARCHAR(2048),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "success_stories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."blog_posts" (
    "id" TEXT NOT NULL,
    "slug" VARCHAR(255) NOT NULL,
    "title" VARCHAR(2048) NOT NULL,
    "excerpt" VARCHAR(2048) NOT NULL,
    "content" VARCHAR(2048) NOT NULL,
    "author" VARCHAR(2048) NOT NULL,
    "category" "public"."blog_category" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "blog_posts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."news_updates" (
    "id" TEXT NOT NULL,
    "headline" VARCHAR(2048) NOT NULL,
    "summary" VARCHAR(2048) NOT NULL,
    "content" VARCHAR(2048) NOT NULL,
    "location" VARCHAR(2048),
    "eventDate" TIMESTAMP(3),
    "priority" "public"."news_priority" NOT NULL,
    "category" "public"."news_category" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "news_updates_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "team_members_email_key" ON "public"."team_members"("email");

-- CreateIndex
CREATE UNIQUE INDEX "blog_posts_slug_key" ON "public"."blog_posts"("slug");
