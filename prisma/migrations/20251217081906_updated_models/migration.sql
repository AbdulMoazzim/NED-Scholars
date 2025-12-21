-- AlterTable
ALTER TABLE "public"."success_stories" ALTER COLUMN "currentPosition" DROP NOT NULL,
ALTER COLUMN "company" DROP NOT NULL,
ALTER COLUMN "impact" DROP NOT NULL;
