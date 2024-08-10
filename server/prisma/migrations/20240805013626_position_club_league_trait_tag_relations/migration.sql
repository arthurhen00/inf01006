-- CreateTable
CREATE TABLE "PlayerStats" (
    "sofifa_id" INTEGER NOT NULL,
    "year" INTEGER NOT NULL,

    PRIMARY KEY ("sofifa_id", "year")
);

-- CreateTable
CREATE TABLE "Position" (
    "position_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "position_name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "PlayerPositions" (
    "sofifa_id" INTEGER NOT NULL,
    "year" INTEGER NOT NULL,
    "position_id" INTEGER NOT NULL,

    PRIMARY KEY ("sofifa_id", "year", "position_id"),
    CONSTRAINT "PlayerPositions_position_id_fkey" FOREIGN KEY ("position_id") REFERENCES "Position" ("position_id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "PlayerPositions_sofifa_id_year_fkey" FOREIGN KEY ("sofifa_id", "year") REFERENCES "PlayerStats" ("sofifa_id", "year") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "League" (
    "league_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "league_name" TEXT NOT NULL,
    "league_level" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Club" (
    "club_team_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "club_name" TEXT NOT NULL,
    "club_logo_url" TEXT NOT NULL,
    "league_id" INTEGER NOT NULL,
    "nationality_id" INTEGER NOT NULL,
    CONSTRAINT "Club_league_id_fkey" FOREIGN KEY ("league_id") REFERENCES "League" ("league_id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Club_nationality_id_fkey" FOREIGN KEY ("nationality_id") REFERENCES "Nation" ("nationality_id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "PlayerClub" (
    "sofifa_id" INTEGER NOT NULL,
    "year" INTEGER NOT NULL,
    "club_team_id" INTEGER NOT NULL,
    "club_position" TEXT NOT NULL,
    "club_jersey_number" INTEGER NOT NULL,
    "club_joined" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "club_contract_valid_until" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY ("sofifa_id", "year", "club_team_id"),
    CONSTRAINT "PlayerClub_club_team_id_fkey" FOREIGN KEY ("club_team_id") REFERENCES "Club" ("club_team_id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Trait" (
    "trait_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "trait_name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "PlayerTraits" (
    "sofifa_id" INTEGER NOT NULL,
    "year" INTEGER NOT NULL,
    "trait_id" INTEGER NOT NULL,

    PRIMARY KEY ("sofifa_id", "year", "trait_id"),
    CONSTRAINT "PlayerTraits_sofifa_id_year_fkey" FOREIGN KEY ("sofifa_id", "year") REFERENCES "PlayerStats" ("sofifa_id", "year") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Tag" (
    "tag_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "tag_name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "PlayerTags" (
    "sofifa_id" INTEGER NOT NULL,
    "year" INTEGER NOT NULL,
    "tag_id" INTEGER NOT NULL,

    PRIMARY KEY ("sofifa_id", "year", "tag_id"),
    CONSTRAINT "PlayerTags_sofifa_id_year_fkey" FOREIGN KEY ("sofifa_id", "year") REFERENCES "PlayerStats" ("sofifa_id", "year") ON DELETE RESTRICT ON UPDATE CASCADE
);
