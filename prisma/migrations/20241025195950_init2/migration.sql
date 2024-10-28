/*
  Warnings:

  - You are about to drop the column `query` on the `GptIntegration` table. All the data in the column will be lost.
  - You are about to drop the column `response` on the `GptIntegration` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "GptIntegration" DROP COLUMN "query",
DROP COLUMN "response";
