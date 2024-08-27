-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_League" (
    "league_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "league_name" TEXT NOT NULL,
    "league_level" INTEGER
);
INSERT INTO "new_League" ("league_id", "league_level", "league_name") SELECT "league_id", "league_level", "league_name" FROM "League";
DROP TABLE "League";
ALTER TABLE "new_League" RENAME TO "League";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
