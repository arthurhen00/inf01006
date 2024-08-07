import sqlite3



def create_db():
    con = sqlite3.connect("db\\db.db")


    cur = con.cursor()

    cur.execute("DROP TABLE IF EXISTS players")
    cur.execute("DROP TABLE IF EXISTS player_nations")
    cur.execute("DROP TABLE IF EXISTS nation_teams")
    cur.execute("DROP TABLE IF EXISTS nation")
    cur.execute("DROP TABLE IF EXISTS player_positions")
    cur.execute("DROP TABLE IF EXISTS positions")
    cur.execute("DROP TABLE IF EXISTS traits")
    cur.execute("DROP TABLE IF EXISTS tags")
    cur.execute("DROP TABLE IF EXISTS player_traits")
    cur.execute("DROP TABLE IF EXISTS player_tags")
    cur.execute("DROP TABLE IF EXISTS clubs")
    cur.execute("DROP TABLE IF EXISTS player_clubs")
    cur.execute("DROP TABLE IF EXISTS leagues")
    cur.execute("DROP TABLE IF EXISTS player_stats")

    cur.execute("""CREATE TABLE players(
                sofifa_id INTEGER PRIMARY KEY,    
                player_url VARCHAR(255),                  
                short_name VARCHAR(32),                  
                long_name VARCHAR(255)                    
    )""")
    cur.execute("""CREATE TABLE player_nations(
                sofifa_id INTEGER,                
                nation_team_id INTEGER,           
                nation_position VARCHAR(3),             
                nation_jersey_number INTEGER,     
                PRIMARY KEY (sofifa_id), 
                FOREIGN KEY (sofifa_id)
                REFERENCES player(sofifa_id),
                FOREIGN KEY (nation_team_id)
                REFERENCES nation_team(nation_team_id)
    )""")
    cur.execute("""CREATE TABLE nation_teams(
                nation_team_id INTEGER PRIMARY KEY,  
                nationality_id INTEGER,              
                nation_logo_url VARCHAR(255),    
                FOREIGN KEY (nationality_id)
                REFERENCES nation(nationality_id)             
    )""")
    cur.execute("""CREATE TABLE nation(
                nationality_id INTEGER PRIMARY KEY,  
                nationality_name VARCHAR(32),               
                nation_flag_url VARCHAR(255)                 
    )""")
    cur.execute("""CREATE TABLE player_positions(
                sofifa_id INTEGER,                
                year INTEGER,                     
                position_id INTEGER,              
                PRIMARY KEY (sofifa_id, year, position_id),
                FOREIGN KEY (sofifa_id)
                REFERENCES player(sofifa_id),  
                FOREIGN KEY (year)
                REFERENCES player_stats(year),
                FOREIGN KEY (position_id)
                REFERENCES positions(position_id)      
    )""")
    cur.execute("""CREATE TABLE positions(
        position_id INTEGER PRIMARY KEY,  
        name VARCHAR(32)                         
    )""")
    cur.execute("""CREATE TABLE traits(
        trait_id INTEGER PRIMARY KEY,  
        name VARCHAR(32)                         
    )""")
    cur.execute("""CREATE TABLE tags(
        tag_id INTEGER PRIMARY KEY,  
        name VARCHAR(32)                         
    )""")

    cur.execute("""CREATE TABLE player_traits(
                sofifa_id INTEGER,                
                year INTEGER,                     
                trait_id INTEGER,              
                PRIMARY KEY (sofifa_id, year, trait_id),
                FOREIGN KEY (sofifa_id)
                REFERENCES player(sofifa_id),  
                FOREIGN KEY (year)
                REFERENCES player_stats(year),
                FOREIGN KEY (trait_id)
                REFERENCES traits(trait_id)      
    )""")

    cur.execute("""CREATE TABLE player_tags(
                sofifa_id INTEGER,                
                year INTEGER,                     
                tag_id INTEGER,              
                PRIMARY KEY (sofifa_id, year, tag_id),
                FOREIGN KEY (sofifa_id)
                REFERENCES player(sofifa_id),  
                FOREIGN KEY (year)
                REFERENCES player_stats(year),
                FOREIGN KEY (tag_id)
                REFERENCES tags(tag_id)      
    )""")


    cur.execute("""CREATE TABLE clubs(
                club_team_id INTEGER,                                    
                club_name VARCHAR(255),   
                league_id INTEGER,      
                club_logo_url VARCHAR(255),  
                club_flag_url VARCHAR(255),      
                PRIMARY KEY (club_team_id), 
                FOREIGN KEY (league_id)
                REFERENCES leagues(league_id)      
    )""")

    cur.execute("""CREATE TABLE player_clubs(
                sofifa_id INTEGER,                
                year INTEGER,                     
                club_team_id INTEGER,  
                club_position INTEGER,
                club_jersey_number INTEGER,
                club_joined DATE,
                club_contract_valid_until DATE,
                club_loaned_from INTEGER,
                release_clause_eur REAL,
                PRIMARY KEY (sofifa_id, year, club_team_id),
                FOREIGN KEY (club_position)
                REFERENCES positions(position_id),  
                FOREIGN KEY (year)
                REFERENCES player_stats(year),
                FOREIGN KEY (club_team_id)
                REFERENCES club(club_team_id),
                FOREIGN KEY (club_loaned_from)
                REFERENCES club(club_loaned_from)       
    )""")

    cur.execute("""CREATE TABLE leagues(
                league_id INTEGER,                                  
                league_name VARCHAR(255),   
                league_level INTEGER,          
                PRIMARY KEY (league_id)  
    )""")

    cur.execute("""CREATE TABLE player_stats(
        sofifa_id INTEGER, 
        year INTEGER,       
        overall INTEGER,                      
        potential INTEGER,                    
        value_eur REAL,                       
        wage_eur REAL,                        
        age INTEGER,                          
        dob DATE,                             
        height_cm INTEGER,                    
        weight_kg INTEGER,                    
        club_name VARCHAR(5),                       
        preferred_foot VARCHAR(5),                  
        weak_foot INTEGER,                    
        skill_moves INTEGER,                  
        international_reputation INTEGER,     
        work_rate VARCHAR(16),                       
        body_type VARCHAR(16),                       
        real_face BOOLEAN,                    
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
        ls VARCHAR(5),                              
        st VARCHAR(5),                              
        rs VARCHAR(5),                              
        lw VARCHAR(5),                              
        lf VARCHAR(5),                              
        cf VARCHAR(5),                              
        rf VARCHAR(5),                              
        rw VARCHAR(5),                              
        lam VARCHAR(5),                             
        cam VARCHAR(5),                             
        ram VARCHAR(5),                             
        lm VARCHAR(5),                              
        lcm VARCHAR(5),                             
        cm VARCHAR(5),                              
        rcm VARCHAR(5),                             
        rm VARCHAR(5),                              
        lwb VARCHAR(5),                             
        ldm VARCHAR(5),                             
        cdm VARCHAR(5),                             
        rdm VARCHAR(5),                             
        rwb VARCHAR(5),                             
        lb VARCHAR(5),                              
        lcb VARCHAR(5),                             
        cb VARCHAR(5),                              
        rcb VARCHAR(5),                             
        rb VARCHAR(5),                              
        gk VARCHAR(5),                              
        player_face_url VARCHAR(255),
        PRIMARY KEY(sofifa_id,year)               
    )""")

