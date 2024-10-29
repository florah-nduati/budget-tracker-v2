/*
  Warnings:

  - You are about to drop the `budger-tracker` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "budger-tracker";

-- CreateTable
CREATE TABLE "budget-tracker" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "quantity" INTEGER,
    "price" DOUBLE PRECISION,

    CONSTRAINT "budget-tracker_pkey" PRIMARY KEY ("id")
);
