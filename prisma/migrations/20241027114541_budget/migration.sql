-- CreateTable
CREATE TABLE "budger-tracker" (
    "title" TEXT NOT NULL,
    "quantity" TEXT,
    "price" INTEGER,

    CONSTRAINT "budger-tracker_pkey" PRIMARY KEY ("title")
);
