/*
  Warnings:

  - You are about to drop the `movies` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "movies";

-- CreateTable
CREATE TABLE "Movies" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "movieId" TEXT NOT NULL,

    CONSTRAINT "Movies_pkey" PRIMARY KEY ("id")
);
