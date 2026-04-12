-- DropIndex
DROP INDEX "public"."resources_resumeId_key";

-- AlterTable
ALTER TABLE "public"."resources" ALTER COLUMN "resumeId" DROP NOT NULL;
