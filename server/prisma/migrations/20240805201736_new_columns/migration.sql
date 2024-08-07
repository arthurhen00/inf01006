/*
  Warnings:

  - Added the required column `club_flag_url` to the `Club` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nationality_id` to the `Player` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Club" (
    "club_team_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "club_name" TEXT NOT NULL,
    "club_logo_url" TEXT NOT NULL,
    "club_flag_url" TEXT NOT NULL,
    "league_id" INTEGER NOT NULL,
    "nationality_id" INTEGER NOT NULL,
    CONSTRAINT "Club_league_id_fkey" FOREIGN KEY ("league_id") REFERENCES "League" ("league_id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Club_nationality_id_fkey" FOREIGN KEY ("nationality_id") REFERENCES "Nation" ("nationality_id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Club" ("club_logo_url", "club_name", "club_team_id", "league_id", "nationality_id") SELECT "club_logo_url", "club_name", "club_team_id", "league_id", "nationality_id" FROM "Club";
DROP TABLE "Club";
ALTER TABLE "new_Club" RENAME TO "Club";
CREATE TABLE "new_Player" (
    "sofifa_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "player_url" TEXT NOT NULL,
    "short_name" TEXT NOT NULL,
    "long_name" TEXT NOT NULL,
    "nationality_id" INTEGER NOT NULL,
    CONSTRAINT "Player_nationality_id_fkey" FOREIGN KEY ("nationality_id") REFERENCES "Nation" ("nationality_id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Player" ("long_name", "player_url", "short_name", "sofifa_id") SELECT "long_name", "player_url", "short_name", "sofifa_id" FROM "Player";
DROP TABLE "Player";
ALTER TABLE "new_Player" RENAME TO "Player";
CREATE UNIQUE INDEX "Player_player_url_key" ON "Player"("player_url");
CREATE TABLE "new_PlayerStats" (
    "sofifa_id" INTEGER NOT NULL,
    "year" INTEGER NOT NULL,

    PRIMARY KEY ("sofifa_id", "year"),
    CONSTRAINT "PlayerStats_sofifa_id_fkey" FOREIGN KEY ("sofifa_id") REFERENCES "Player" ("sofifa_id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_PlayerStats" ("sofifa_id", "year") SELECT "sofifa_id", "year" FROM "PlayerStats";
DROP TABLE "PlayerStats";
ALTER TABLE "new_PlayerStats" RENAME TO "PlayerStats";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
