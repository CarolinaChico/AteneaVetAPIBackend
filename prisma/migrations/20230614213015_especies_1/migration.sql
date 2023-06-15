/*
  Warnings:

  - You are about to drop the column `esperenza_vida` on the `especie` table. All the data in the column will be lost.
  - Added the required column `esperanza_vida` to the `Especie` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `especie` DROP COLUMN `esperenza_vida`,
    ADD COLUMN `esperanza_vida` INTEGER NOT NULL;
