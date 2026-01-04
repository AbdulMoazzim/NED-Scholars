-- DropIndex
DROP INDEX "public"."images_gupshupId_key";

-- AlterTable
ALTER TABLE "public"."images" ALTER COLUMN "gupshupId" DROP NOT NULL;
