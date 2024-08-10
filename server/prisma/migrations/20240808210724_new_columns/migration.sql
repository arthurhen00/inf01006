/*
  Warnings:

  - Added the required column `club_loaned_from` to the `PlayerClub` table without a default value. This is not possible if the table is not empty.
  - Added the required column `release_clause_eur` to the `PlayerClub` table without a default value. This is not possible if the table is not empty.
  - Added the required column `age` to the `PlayerStats` table without a default value. This is not possible if the table is not empty.
  - Added the required column `attacking_crossing` to the `PlayerStats` table without a default value. This is not possible if the table is not empty.
  - Added the required column `attacking_finishing` to the `PlayerStats` table without a default value. This is not possible if the table is not empty.
  - Added the required column `attacking_heading_accuracy` to the `PlayerStats` table without a default value. This is not possible if the table is not empty.
  - Added the required column `attacking_short_passing` to the `PlayerStats` table without a default value. This is not possible if the table is not empty.
  - Added the required column `attacking_volleys` to the `PlayerStats` table without a default value. This is not possible if the table is not empty.
  - Added the required column `body_type` to the `PlayerStats` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cam` to the `PlayerStats` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cb` to the `PlayerStats` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cdm` to the `PlayerStats` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cf` to the `PlayerStats` table without a default value. This is not possible if the table is not empty.
  - Added the required column `club_name` to the `PlayerStats` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cm` to the `PlayerStats` table without a default value. This is not possible if the table is not empty.
  - Added the required column `defending` to the `PlayerStats` table without a default value. This is not possible if the table is not empty.
  - Added the required column `defending_marking_awareness` to the `PlayerStats` table without a default value. This is not possible if the table is not empty.
  - Added the required column `defending_sliding_tackle` to the `PlayerStats` table without a default value. This is not possible if the table is not empty.
  - Added the required column `defending_standing_tackle` to the `PlayerStats` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dob` to the `PlayerStats` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dribbling` to the `PlayerStats` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gk` to the `PlayerStats` table without a default value. This is not possible if the table is not empty.
  - Added the required column `goalkeeping_diving` to the `PlayerStats` table without a default value. This is not possible if the table is not empty.
  - Added the required column `goalkeeping_handling` to the `PlayerStats` table without a default value. This is not possible if the table is not empty.
  - Added the required column `goalkeeping_kicking` to the `PlayerStats` table without a default value. This is not possible if the table is not empty.
  - Added the required column `goalkeeping_positioning` to the `PlayerStats` table without a default value. This is not possible if the table is not empty.
  - Added the required column `goalkeeping_reflexes` to the `PlayerStats` table without a default value. This is not possible if the table is not empty.
  - Added the required column `goalkeeping_speed` to the `PlayerStats` table without a default value. This is not possible if the table is not empty.
  - Added the required column `height_cm` to the `PlayerStats` table without a default value. This is not possible if the table is not empty.
  - Added the required column `international_reputation` to the `PlayerStats` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lam` to the `PlayerStats` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lb` to the `PlayerStats` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lcb` to the `PlayerStats` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lcm` to the `PlayerStats` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ldm` to the `PlayerStats` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lf` to the `PlayerStats` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lm` to the `PlayerStats` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ls` to the `PlayerStats` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lw` to the `PlayerStats` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lwb` to the `PlayerStats` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mentality_aggression` to the `PlayerStats` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mentality_composure` to the `PlayerStats` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mentality_interceptions` to the `PlayerStats` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mentality_penalties` to the `PlayerStats` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mentality_positioning` to the `PlayerStats` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mentality_vision` to the `PlayerStats` table without a default value. This is not possible if the table is not empty.
  - Added the required column `movement_acceleration` to the `PlayerStats` table without a default value. This is not possible if the table is not empty.
  - Added the required column `movement_agility` to the `PlayerStats` table without a default value. This is not possible if the table is not empty.
  - Added the required column `movement_balance` to the `PlayerStats` table without a default value. This is not possible if the table is not empty.
  - Added the required column `movement_reactions` to the `PlayerStats` table without a default value. This is not possible if the table is not empty.
  - Added the required column `movement_sprint_speed` to the `PlayerStats` table without a default value. This is not possible if the table is not empty.
  - Added the required column `overall` to the `PlayerStats` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pace` to the `PlayerStats` table without a default value. This is not possible if the table is not empty.
  - Added the required column `passing` to the `PlayerStats` table without a default value. This is not possible if the table is not empty.
  - Added the required column `physic` to the `PlayerStats` table without a default value. This is not possible if the table is not empty.
  - Added the required column `player_face_url` to the `PlayerStats` table without a default value. This is not possible if the table is not empty.
  - Added the required column `potential` to the `PlayerStats` table without a default value. This is not possible if the table is not empty.
  - Added the required column `power_jumping` to the `PlayerStats` table without a default value. This is not possible if the table is not empty.
  - Added the required column `power_long_shots` to the `PlayerStats` table without a default value. This is not possible if the table is not empty.
  - Added the required column `power_shot_power` to the `PlayerStats` table without a default value. This is not possible if the table is not empty.
  - Added the required column `power_stamina` to the `PlayerStats` table without a default value. This is not possible if the table is not empty.
  - Added the required column `power_strength` to the `PlayerStats` table without a default value. This is not possible if the table is not empty.
  - Added the required column `preferred_foot` to the `PlayerStats` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ram` to the `PlayerStats` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rb` to the `PlayerStats` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rcb` to the `PlayerStats` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rcm` to the `PlayerStats` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rdm` to the `PlayerStats` table without a default value. This is not possible if the table is not empty.
  - Added the required column `real_face` to the `PlayerStats` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rf` to the `PlayerStats` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rm` to the `PlayerStats` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rs` to the `PlayerStats` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rw` to the `PlayerStats` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rwb` to the `PlayerStats` table without a default value. This is not possible if the table is not empty.
  - Added the required column `shooting` to the `PlayerStats` table without a default value. This is not possible if the table is not empty.
  - Added the required column `skill_ball_control` to the `PlayerStats` table without a default value. This is not possible if the table is not empty.
  - Added the required column `skill_curve` to the `PlayerStats` table without a default value. This is not possible if the table is not empty.
  - Added the required column `skill_dribbling` to the `PlayerStats` table without a default value. This is not possible if the table is not empty.
  - Added the required column `skill_fk_accuracy` to the `PlayerStats` table without a default value. This is not possible if the table is not empty.
  - Added the required column `skill_long_passing` to the `PlayerStats` table without a default value. This is not possible if the table is not empty.
  - Added the required column `skill_moves` to the `PlayerStats` table without a default value. This is not possible if the table is not empty.
  - Added the required column `st` to the `PlayerStats` table without a default value. This is not possible if the table is not empty.
  - Added the required column `value_eur` to the `PlayerStats` table without a default value. This is not possible if the table is not empty.
  - Added the required column `wage_eur` to the `PlayerStats` table without a default value. This is not possible if the table is not empty.
  - Added the required column `weak_foot` to the `PlayerStats` table without a default value. This is not possible if the table is not empty.
  - Added the required column `weight_kg` to the `PlayerStats` table without a default value. This is not possible if the table is not empty.
  - Added the required column `work_rate` to the `PlayerStats` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_PlayerClub" (
    "sofifa_id" INTEGER NOT NULL,
    "year" INTEGER NOT NULL,
    "club_team_id" INTEGER NOT NULL,
    "club_position" TEXT NOT NULL,
    "club_jersey_number" INTEGER NOT NULL,
    "club_joined" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "club_contract_valid_until" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "release_clause_eur" REAL NOT NULL,
    "club_loaned_from" TEXT NOT NULL,

    PRIMARY KEY ("sofifa_id", "year", "club_team_id"),
    CONSTRAINT "PlayerClub_club_team_id_fkey" FOREIGN KEY ("club_team_id") REFERENCES "Club" ("club_team_id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "PlayerClub_sofifa_id_year_fkey" FOREIGN KEY ("sofifa_id", "year") REFERENCES "PlayerStats" ("sofifa_id", "year") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_PlayerClub" ("club_contract_valid_until", "club_jersey_number", "club_joined", "club_position", "club_team_id", "sofifa_id", "year") SELECT "club_contract_valid_until", "club_jersey_number", "club_joined", "club_position", "club_team_id", "sofifa_id", "year" FROM "PlayerClub";
DROP TABLE "PlayerClub";
ALTER TABLE "new_PlayerClub" RENAME TO "PlayerClub";
CREATE TABLE "new_PlayerStats" (
    "sofifa_id" INTEGER NOT NULL,
    "year" INTEGER NOT NULL,
    "overall" INTEGER NOT NULL,
    "potential" INTEGER NOT NULL,
    "value_eur" REAL NOT NULL,
    "wage_eur" REAL NOT NULL,
    "age" INTEGER NOT NULL,
    "dob" TEXT NOT NULL,
    "height_cm" INTEGER NOT NULL,
    "weight_kg" INTEGER NOT NULL,
    "club_name" INTEGER NOT NULL,
    "preferred_foot" TEXT NOT NULL,
    "weak_foot" INTEGER NOT NULL,
    "skill_moves" INTEGER NOT NULL,
    "international_reputation" INTEGER NOT NULL,
    "work_rate" TEXT NOT NULL,
    "body_type" TEXT NOT NULL,
    "real_face" TEXT NOT NULL,
    "pace" INTEGER NOT NULL,
    "shooting" INTEGER NOT NULL,
    "passing" INTEGER NOT NULL,
    "dribbling" INTEGER NOT NULL,
    "defending" INTEGER NOT NULL,
    "physic" INTEGER NOT NULL,
    "attacking_crossing" INTEGER NOT NULL,
    "attacking_finishing" INTEGER NOT NULL,
    "attacking_heading_accuracy" INTEGER NOT NULL,
    "attacking_short_passing" INTEGER NOT NULL,
    "attacking_volleys" INTEGER NOT NULL,
    "skill_dribbling" INTEGER NOT NULL,
    "skill_curve" INTEGER NOT NULL,
    "skill_fk_accuracy" INTEGER NOT NULL,
    "skill_long_passing" INTEGER NOT NULL,
    "skill_ball_control" INTEGER NOT NULL,
    "movement_acceleration" INTEGER NOT NULL,
    "movement_sprint_speed" INTEGER NOT NULL,
    "movement_agility" INTEGER NOT NULL,
    "movement_reactions" INTEGER NOT NULL,
    "movement_balance" INTEGER NOT NULL,
    "power_shot_power" INTEGER NOT NULL,
    "power_jumping" INTEGER NOT NULL,
    "power_stamina" INTEGER NOT NULL,
    "power_strength" INTEGER NOT NULL,
    "power_long_shots" INTEGER NOT NULL,
    "mentality_aggression" INTEGER NOT NULL,
    "mentality_interceptions" INTEGER NOT NULL,
    "mentality_positioning" INTEGER NOT NULL,
    "mentality_vision" INTEGER NOT NULL,
    "mentality_penalties" INTEGER NOT NULL,
    "mentality_composure" INTEGER NOT NULL,
    "defending_marking_awareness" INTEGER NOT NULL,
    "defending_standing_tackle" INTEGER NOT NULL,
    "defending_sliding_tackle" INTEGER NOT NULL,
    "goalkeeping_diving" INTEGER NOT NULL,
    "goalkeeping_handling" INTEGER NOT NULL,
    "goalkeeping_kicking" INTEGER NOT NULL,
    "goalkeeping_positioning" INTEGER NOT NULL,
    "goalkeeping_reflexes" INTEGER NOT NULL,
    "goalkeeping_speed" INTEGER NOT NULL,
    "ls" TEXT NOT NULL,
    "st" TEXT NOT NULL,
    "rs" TEXT NOT NULL,
    "lw" TEXT NOT NULL,
    "lf" TEXT NOT NULL,
    "cf" TEXT NOT NULL,
    "rf" TEXT NOT NULL,
    "rw" TEXT NOT NULL,
    "lam" TEXT NOT NULL,
    "cam" TEXT NOT NULL,
    "ram" TEXT NOT NULL,
    "lm" TEXT NOT NULL,
    "lcm" TEXT NOT NULL,
    "cm" TEXT NOT NULL,
    "rcm" TEXT NOT NULL,
    "rm" TEXT NOT NULL,
    "lwb" TEXT NOT NULL,
    "ldm" TEXT NOT NULL,
    "cdm" TEXT NOT NULL,
    "rdm" TEXT NOT NULL,
    "rwb" TEXT NOT NULL,
    "lb" TEXT NOT NULL,
    "lcb" TEXT NOT NULL,
    "cb" TEXT NOT NULL,
    "rcb" TEXT NOT NULL,
    "rb" TEXT NOT NULL,
    "gk" TEXT NOT NULL,
    "player_face_url" TEXT NOT NULL,

    PRIMARY KEY ("sofifa_id", "year"),
    CONSTRAINT "PlayerStats_sofifa_id_fkey" FOREIGN KEY ("sofifa_id") REFERENCES "Player" ("sofifa_id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_PlayerStats" ("sofifa_id", "year") SELECT "sofifa_id", "year" FROM "PlayerStats";
DROP TABLE "PlayerStats";
ALTER TABLE "new_PlayerStats" RENAME TO "PlayerStats";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
