/*
  Warnings:

  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "isVerified" BOOLEAN NOT NULL DEFAULT false,
    "isAdmin" BOOLEAN NOT NULL DEFAULT false,
    "forgotPasswordToken" TEXT,
    "forgotPasswordTokenExpiry" DATETIME,
    "verifyToken" TEXT,
    "verifyTokenExpiry" DATETIME
);
INSERT INTO "new_User" ("email", "forgotPasswordToken", "forgotPasswordTokenExpiry", "id", "isAdmin", "isVerified", "password", "username", "verifyToken", "verifyTokenExpiry") SELECT "email", "forgotPasswordToken", "forgotPasswordTokenExpiry", "id", "isAdmin", "isVerified", "password", "username", "verifyToken", "verifyTokenExpiry" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
