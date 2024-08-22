-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Club" (
    "club_team_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "club_name" TEXT NOT NULL,
    "club_logo_url" TEXT NOT NULL,
    "club_flag_url" TEXT NOT NULL,
    "league_id" INTEGER NOT NULL,
    "nationality_id" INTEGER,
    CONSTRAINT "Club_league_id_fkey" FOREIGN KEY ("league_id") REFERENCES "League" ("league_id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Club_nationality_id_fkey" FOREIGN KEY ("nationality_id") REFERENCES "Nation" ("nationality_id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Club" ("club_flag_url", "club_logo_url", "club_name", "club_team_id", "league_id", "nationality_id") SELECT "club_flag_url", "club_logo_url", "club_name", "club_team_id", "league_id", "nationality_id" FROM "Club";
DROP TABLE "Club";
ALTER TABLE "new_Club" RENAME TO "Club";
CREATE TABLE "new_PlayerClub" (
    "sofifa_id" INTEGER NOT NULL,
    "year" INTEGER NOT NULL,
    "club_team_id" INTEGER NOT NULL,
    "club_position" TEXT NOT NULL,
    "club_jersey_number" INTEGER NOT NULL,
    "club_joined" TEXT,
    "club_contract_valid_until" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "release_clause_eur" REAL,
    "club_loaned_from" TEXT,

    PRIMARY KEY ("sofifa_id", "year", "club_team_id"),
    CONSTRAINT "PlayerClub_club_team_id_fkey" FOREIGN KEY ("club_team_id") REFERENCES "Club" ("club_team_id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "PlayerClub_sofifa_id_year_fkey" FOREIGN KEY ("sofifa_id", "year") REFERENCES "PlayerStats" ("sofifa_id", "year") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_PlayerClub" ("club_contract_valid_until", "club_jersey_number", "club_joined", "club_loaned_from", "club_position", "club_team_id", "release_clause_eur", "sofifa_id", "year") SELECT "club_contract_valid_until", "club_jersey_number", "club_joined", "club_loaned_from", "club_position", "club_team_id", "release_clause_eur", "sofifa_id", "year" FROM "PlayerClub";
DROP TABLE "PlayerClub";
ALTER TABLE "new_PlayerClub" RENAME TO "PlayerClub";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
