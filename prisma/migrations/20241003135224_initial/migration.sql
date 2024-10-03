/*
  Warnings:

  - You are about to drop the column `customerId` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `entrepreneurId` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the `Customer` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Entrepreneur` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `clientId` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `contractorId` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Project` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Project" DROP CONSTRAINT "Project_customerId_fkey";

-- DropForeignKey
ALTER TABLE "Project" DROP CONSTRAINT "Project_entrepreneurId_fkey";

-- AlterTable
ALTER TABLE "Project" DROP COLUMN "customerId",
DROP COLUMN "entrepreneurId",
DROP COLUMN "title",
ADD COLUMN     "clientId" INTEGER NOT NULL,
ADD COLUMN     "contractorId" INTEGER NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL;

-- DropTable
DROP TABLE "Customer";

-- DropTable
DROP TABLE "Entrepreneur";

-- CreateTable
CREATE TABLE "Client" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "contact" TEXT NOT NULL,

    CONSTRAINT "Client_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Contractor" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "contact" TEXT NOT NULL,

    CONSTRAINT "Contractor_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Client_email_key" ON "Client"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Contractor_email_key" ON "Contractor"("email");

-- AddForeignKey
ALTER TABLE "Project" ADD CONSTRAINT "Project_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Project" ADD CONSTRAINT "Project_contractorId_fkey" FOREIGN KEY ("contractorId") REFERENCES "Contractor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
