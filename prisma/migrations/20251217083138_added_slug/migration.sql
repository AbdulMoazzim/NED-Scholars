/*
  Warnings:

  - A unique constraint covering the columns `[slug]` on the table `news_updates` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[slug]` on the table `success_stories` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[slug]` on the table `team_members` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `slug` to the `news_updates` table without a default value. This is not possible if the table is not empty.
  - Added the required column `slug` to the `success_stories` table without a default value. This is not possible if the table is not empty.
  - Added the required column `slug` to the `team_members` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."news_updates" ADD COLUMN     "slug" VARCHAR(255) NOT NULL;

-- AlterTable
ALTER TABLE "public"."success_stories" ADD COLUMN     "slug" VARCHAR(255) NOT NULL;

-- AlterTable
ALTER TABLE "public"."team_members" ADD COLUMN     "slug" VARCHAR(255) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "news_updates_slug_key" ON "public"."news_updates"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "success_stories_slug_key" ON "public"."success_stories"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "team_members_slug_key" ON "public"."team_members"("slug");
