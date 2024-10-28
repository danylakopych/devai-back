/*
  Warnings:

  - You are about to drop the column `user_id` on the `GptIntegration` table. All the data in the column will be lost.
  - Added the required column `gpt_name` to the `GptIntegration` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "GptIntegration" DROP COLUMN "user_id",
ADD COLUMN     "gpt_name" TEXT NOT NULL;
