-- CreateTable
CREATE TABLE "Player" (
    "sofifa_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "player_url" TEXT NOT NULL,
    "short_name" TEXT NOT NULL,
    "long_name" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Player_player_url_key" ON "Player"("player_url");
