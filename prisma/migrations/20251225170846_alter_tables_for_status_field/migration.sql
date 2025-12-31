/*
  Warnings:

  - Added the required column `status` to the `mentors` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `partners` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `students` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."mentors" ADD COLUMN     "status" "public"."Status" NOT NULL;

-- AlterTable
ALTER TABLE "public"."partners" ADD COLUMN     "status" "public"."Status" NOT NULL;

-- AlterTable
ALTER TABLE "public"."students" ADD COLUMN     "status" "public"."Status" NOT NULL;
