/*
  Warnings:

  - You are about to drop the column `creationId` on the `Category` table. All the data in the column will be lost.

*/
-- CreateTable
CREATE TABLE "_CategoryToCreation" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_CategoryToCreation_A_fkey" FOREIGN KEY ("A") REFERENCES "Category" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_CategoryToCreation_B_fkey" FOREIGN KEY ("B") REFERENCES "Creation" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Category" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "image" TEXT NOT NULL
);
INSERT INTO "new_Category" ("id", "image", "title") SELECT "id", "image", "title" FROM "Category";
DROP TABLE "Category";
ALTER TABLE "new_Category" RENAME TO "Category";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "_CategoryToCreation_AB_unique" ON "_CategoryToCreation"("A", "B");

-- CreateIndex
CREATE INDEX "_CategoryToCreation_B_index" ON "_CategoryToCreation"("B");
