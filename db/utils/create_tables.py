import sqlite3



def create_db():
    con = sqlite3.connect("server\\prisma\\db.db")

    cur = con.cursor()

    cur.execute("DROP TABLE IF EXISTS PlayerTags")
    cur.execute("DROP TABLE IF EXISTS PlayerTraits")
    cur.execute("DROP TABLE IF EXISTS PlayerClub")
    cur.execute("DROP TABLE IF EXISTS PlayerPositions")
    cur.execute("DROP TABLE IF EXISTS PlayerNation")
    cur.execute("DROP TABLE IF EXISTS PlayerStats")
    cur.execute("DROP TABLE IF EXISTS Player")
    cur.execute("DROP TABLE IF EXISTS NationTeam")
    cur.execute("DROP TABLE IF EXISTS Nation")
    cur.execute("DROP TABLE IF EXISTS Club")
    cur.execute("DROP TABLE IF EXISTS League")
    cur.execute("DROP TABLE IF EXISTS Position")
    cur.execute("DROP TABLE IF EXISTS Trait")
    cur.execute("DROP TABLE IF EXISTS Tag")

    # Create tables
    cur.execute("""
        CREATE TABLE Player(
            sofifa_id INTEGER PRIMARY KEY,
            player_url TEXT UNIQUE,
            short_name TEXT,
            long_name TEXT,
            nationality_id INTEGER NOT NULL,
            FOREIGN KEY (nationality_id) REFERENCES Nation(nationality_id)
        )
    """)

    cur.execute("""
        CREATE TABLE PlayerStats(
            sofifa_id INTEGER NOT NULL,
            year INTEGER NOT NULL,
            overall INTEGER,
            potential INTEGER,
            value_eur REAL,
            wage_eur REAL,
            age INTEGER,
            dob TEXT,
            height_cm INTEGER,
            weight_kg INTEGER,
            club_name INTEGER,
            preferred_foot TEXT,
            weak_foot INTEGER,
            skill_moves INTEGER,
            international_reputation INTEGER,
            work_rate TEXT,
            body_type TEXT,
            real_face TEXT,
            pace INTEGER,
            shooting INTEGER,
            passing INTEGER,
            dribbling INTEGER,
            defending INTEGER,
            physic INTEGER,
            attacking_crossing INTEGER,
            attacking_finishing INTEGER,
            attacking_heading_accuracy INTEGER,
            attacking_short_passing INTEGER,
            attacking_volleys INTEGER,
            skill_dribbling INTEGER,
            skill_curve INTEGER,
            skill_fk_accuracy INTEGER,
            skill_long_passing INTEGER,
            skill_ball_control INTEGER,
            movement_acceleration INTEGER,
            movement_sprint_speed INTEGER,
            movement_agility INTEGER,
            movement_reactions INTEGER,
            movement_balance INTEGER,
            power_shot_power INTEGER,
            power_jumping INTEGER,
            power_stamina INTEGER,
            power_strength INTEGER,
            power_long_shots INTEGER,
            mentality_aggression INTEGER,
            mentality_interceptions INTEGER,
            mentality_positioning INTEGER,
            mentality_vision INTEGER,
            mentality_penalties INTEGER,
            mentality_composure INTEGER,
            defending_marking_awareness INTEGER,
            defending_standing_tackle INTEGER,
            defending_sliding_tackle INTEGER,
            goalkeeping_diving INTEGER,
            goalkeeping_handling INTEGER,
            goalkeeping_kicking INTEGER,
            goalkeeping_positioning INTEGER,
            goalkeeping_reflexes INTEGER,
            goalkeeping_speed INTEGER,
            ls TEXT,
            st TEXT,
            rs TEXT,
            lw TEXT,
            lf TEXT,
            cf TEXT,
            rf TEXT,
            rw TEXT,
            lam TEXT,
            cam TEXT,
            ram TEXT,
            lm TEXT,
            lcm TEXT,
            cm TEXT,
            rcm TEXT,
            rm TEXT,
            lwb TEXT,
            ldm TEXT,
            cdm TEXT,
            rdm TEXT,
            rwb TEXT,
            lb TEXT,
            lcb TEXT,
            cb TEXT,
            rcb TEXT,
            rb TEXT,
            gk TEXT,
            player_face_url TEXT,
            PRIMARY KEY (sofifa_id, year),
            FOREIGN KEY (sofifa_id) REFERENCES Players(sofifa_id)
        )
    """)

    cur.execute("""
        CREATE TABLE Nation(
            nationality_id INTEGER PRIMARY KEY,
            nationality_name TEXT,
            nation_flag_url TEXT
        )
    """)

    cur.execute("""
        CREATE TABLE NationTeam(
            nation_team_id INTEGER PRIMARY KEY,
            nation_logo_url TEXT,
            nationality_id INTEGER NOT NULL,
            FOREIGN KEY (nationality_id) REFERENCES Nation(nationality_id)
        )
    """)

    cur.execute("""
        CREATE TABLE PlayerNation(
            sofifa_id INTEGER NOT NULL,
            nation_team_id INTEGER NOT NULL,
            nation_position INTEGER,
            nation_jersey_number INTEGER,
            PRIMARY KEY (sofifa_id),
            FOREIGN KEY (sofifa_id) REFERENCES Players(sofifa_id),
            FOREIGN KEY (nation_team_id) REFERENCES NationTeam(nation_team_id)
        )
    """)

    cur.execute("""
        CREATE TABLE Position(
            position_id INTEGER PRIMARY KEY,
            position_name TEXT
        )
    """)

    cur.execute("""
        CREATE TABLE PlayerPositions(
            sofifa_id INTEGER NOT NULL,
            year INTEGER NOT NULL,
            position_id INTEGER NOT NULL,
            PRIMARY KEY (sofifa_id, year, position_id),
            FOREIGN KEY (sofifa_id) REFERENCES Players(sofifa_id),
            FOREIGN KEY (position_id) REFERENCES Position(position_id)
        )
    """)

    cur.execute("""
        CREATE TABLE League(
            league_id INTEGER PRIMARY KEY,
            league_name TEXT,
            league_level INTEGER
        )
    """)

    cur.execute("""
        CREATE TABLE Club(
            club_team_id INTEGER PRIMARY KEY,
            club_name TEXT,
            club_logo_url TEXT,
            club_flag_url TEXT,
            league_id INTEGER NOT NULL,
            nationality_id INTEGER,
            FOREIGN KEY (league_id) REFERENCES League(league_id),
            FOREIGN KEY (nationality_id) REFERENCES Nation(nationality_id)
        )
    """)

    cur.execute("""
        CREATE TABLE PlayerClub(
            sofifa_id INTEGER NOT NULL,
            year INTEGER NOT NULL,
            club_team_id INTEGER NOT NULL,
            club_position TEXT,
            club_jersey_number INTEGER,
            club_joined DATE,
            club_contract_valid_until DATE NOT NULL,
            release_clause_eur REAL,
            club_loaned_from TEXT,
            PRIMARY KEY (sofifa_id, year, club_team_id),
            FOREIGN KEY (sofifa_id) REFERENCES Players(sofifa_id),
            FOREIGN KEY (club_team_id) REFERENCES Club(club_team_id)
        )
    """)

    cur.execute("""
        CREATE TABLE Trait(
            trait_id INTEGER PRIMARY KEY,
            trait_name TEXT
        )
    """)

    cur.execute("""
        CREATE TABLE PlayerTraits(
            sofifa_id INTEGER NOT NULL,
            year INTEGER NOT NULL,
            trait_id INTEGER NOT NULL,
            PRIMARY KEY (sofifa_id, year, trait_id),
            FOREIGN KEY (sofifa_id) REFERENCES Players(sofifa_id),
            FOREIGN KEY (trait_id) REFERENCES Trait(trait_id)
        )
    """)

    cur.execute("""
        CREATE TABLE Tag(
            tag_id INTEGER PRIMARY KEY,
            tag_name TEXT
        )
    """)

    cur.execute("""
        CREATE TABLE PlayerTags(
            sofifa_id INTEGER NOT NULL,
            year INTEGER NOT NULL,
            tag_id INTEGER NOT NULL,
            PRIMARY KEY (sofifa_id, year, tag_id),
            FOREIGN KEY (sofifa_id) REFERENCES Players(sofifa_id),
            FOREIGN KEY (tag_id) REFERENCES Tag(tag_id)
        )
    """)

