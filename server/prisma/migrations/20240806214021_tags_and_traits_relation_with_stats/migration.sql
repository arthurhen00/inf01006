-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_PlayerTags" (
    "sofifa_id" INTEGER NOT NULL,
    "year" INTEGER NOT NULL,
    "tag_id" INTEGER NOT NULL,

    PRIMARY KEY ("sofifa_id", "year", "tag_id"),
    CONSTRAINT "PlayerTags_tag_id_fkey" FOREIGN KEY ("tag_id") REFERENCES "Tag" ("tag_id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "PlayerTags_sofifa_id_year_fkey" FOREIGN KEY ("sofifa_id", "year") REFERENCES "PlayerStats" ("sofifa_id", "year") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_PlayerTags" ("sofifa_id", "tag_id", "year") SELECT "sofifa_id", "tag_id", "year" FROM "PlayerTags";
DROP TABLE "PlayerTags";
ALTER TABLE "new_PlayerTags" RENAME TO "PlayerTags";
CREATE TABLE "new_PlayerTraits" (
    "sofifa_id" INTEGER NOT NULL,
    "year" INTEGER NOT NULL,
    "trait_id" INTEGER NOT NULL,

    PRIMARY KEY ("sofifa_id", "year", "trait_id"),
    CONSTRAINT "PlayerTraits_trait_id_fkey" FOREIGN KEY ("trait_id") REFERENCES "Trait" ("trait_id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "PlayerTraits_sofifa_id_year_fkey" FOREIGN KEY ("sofifa_id", "year") REFERENCES "PlayerStats" ("sofifa_id", "year") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_PlayerTraits" ("sofifa_id", "trait_id", "year") SELECT "sofifa_id", "trait_id", "year" FROM "PlayerTraits";
DROP TABLE "PlayerTraits";
ALTER TABLE "new_PlayerTraits" RENAME TO "PlayerTraits";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
