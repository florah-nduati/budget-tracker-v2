/*
  Warnings:

  - You are about to drop the `budget-tracker` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "budget-tracker";

-- CreateTable
CREATE TABLE "Item" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Item_pkey" PRIMARY KEY ("id")
);
