/*
  Warnings:

  - You are about to drop the column `description` on the `videos` table. All the data in the column will be lost.
  - You are about to drop the column `videoId` on the `youtube_urls` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."videos" DROP COLUMN "description";

-- AlterTable
ALTER TABLE "public"."youtube_urls" DROP COLUMN "videoId";
