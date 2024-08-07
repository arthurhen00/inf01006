-- CreateTable
CREATE TABLE "PlayerNation" (
    "nation_position" INTEGER NOT NULL,
    "nation_jersey_number" INTEGER NOT NULL,
    "playerId" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nationTeamId" INTEGER NOT NULL,
    CONSTRAINT "PlayerNation_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "Player" ("sofifa_id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "PlayerNation_nationTeamId_fkey" FOREIGN KEY ("nationTeamId") REFERENCES "NationTeam" ("nation_team_id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "NationTeam" (
    "nation_team_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nation_logo_url" INTEGER NOT NULL,
    "nationId" INTEGER NOT NULL,
    CONSTRAINT "NationTeam_nationId_fkey" FOREIGN KEY ("nationId") REFERENCES "Nation" ("nationality_id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Nation" (
    "nationality_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nationality_name" TEXT NOT NULL,
    "nation_flag_url" TEXT NOT NULL
);
