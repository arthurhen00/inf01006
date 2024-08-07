/*
  Warnings:

  - You are about to drop the column `nationId` on the `NationTeam` table. All the data in the column will be lost.
  - The primary key for the `PlayerNation` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `nationTeamId` on the `PlayerNation` table. All the data in the column will be lost.
  - You are about to drop the column `playerId` on the `PlayerNation` table. All the data in the column will be lost.
  - Added the required column `nationality_id` to the `NationTeam` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nation_team_id` to the `PlayerNation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sofifa_id` to the `PlayerNation` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_NationTeam" (
    "nation_team_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nation_logo_url" TEXT NOT NULL,
    "nationality_id" INTEGER NOT NULL,
    CONSTRAINT "NationTeam_nationality_id_fkey" FOREIGN KEY ("nationality_id") REFERENCES "Nation" ("nationality_id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_NationTeam" ("nation_logo_url", "nation_team_id") SELECT "nation_logo_url", "nation_team_id" FROM "NationTeam";
DROP TABLE "NationTeam";
ALTER TABLE "new_NationTeam" RENAME TO "NationTeam";
CREATE TABLE "new_PlayerNation" (
    "nation_position" INTEGER NOT NULL,
    "nation_jersey_number" INTEGER NOT NULL,
    "sofifa_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nation_team_id" INTEGER NOT NULL,
    CONSTRAINT "PlayerNation_sofifa_id_fkey" FOREIGN KEY ("sofifa_id") REFERENCES "Player" ("sofifa_id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "PlayerNation_nation_team_id_fkey" FOREIGN KEY ("nation_team_id") REFERENCES "NationTeam" ("nation_team_id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_PlayerNation" ("nation_jersey_number", "nation_position") SELECT "nation_jersey_number", "nation_position" FROM "PlayerNation";
DROP TABLE "PlayerNation";
ALTER TABLE "new_PlayerNation" RENAME TO "PlayerNation";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
