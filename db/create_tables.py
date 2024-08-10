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
                sofifa_id INTEGER PRIMARY KEY ,    
                player_url VARCHAR(255) ,                  
                short_name VARCHAR(32) ,                  
                long_name VARCHAR(255) ,
                nationality_id INTEGER NOT NULL ,
                FOREIGN KEY (nationality_id)
                REFERENCES nation(nationality_id)                       
    )""")
    cur.execute("""CREATE TABLE player_nations(
                sofifa_id INTEGER NOT NULL ,                
                nation_team_id INTEGER NOT NULL ,           
                nation_position VARCHAR(3) ,             
                nation_jersey_number INTEGER NOT NULL ,     
                PRIMARY KEY (sofifa_id) , 
                FOREIGN KEY (sofifa_id)
                REFERENCES player(sofifa_id) ,
                FOREIGN KEY (nation_team_id)
                REFERENCES nation_team(nation_team_id)
    )""")
    cur.execute("""CREATE TABLE nation_teams(
                nation_team_id INTEGER PRIMARY KEY ,  
                nationality_id INTEGER NOT NULL ,              
                nation_logo_url VARCHAR(255) ,    
                FOREIGN KEY (nationality_id)
                REFERENCES nation(nationality_id)             
    )""")
    cur.execute("""CREATE TABLE nation(
                nationality_id INTEGER PRIMARY KEY ,  
                nationality_name VARCHAR(32) ,               
                nation_flag_url VARCHAR(255)                 
    )""")
    cur.execute("""CREATE TABLE player_positions(
                sofifa_id INTEGER NOT NULL ,                
                year INTEGER NOT NULL ,                     
                position_id INTEGER NOT NULL ,              
                PRIMARY KEY (sofifa_id , year, position_id) ,
                FOREIGN KEY (sofifa_id)
                REFERENCES player(sofifa_id) ,  
                FOREIGN KEY (year)
                REFERENCES player_stats(year) ,
                FOREIGN KEY (position_id)
                REFERENCES positions(position_id)      
    )""")
    cur.execute("""CREATE TABLE positions(
        position_id INTEGER PRIMARY KEY ,  
        name VARCHAR(32)                         
    )""")
    cur.execute("""CREATE TABLE traits(
        trait_id INTEGER PRIMARY KEY ,  
        name VARCHAR(32)                         
    )""")
    cur.execute("""CREATE TABLE tags(
        tag_id INTEGER PRIMARY KEY ,  
        name VARCHAR(32)                         
    )""")

    cur.execute("""CREATE TABLE player_traits(
                sofifa_id INTEGER NOT NULL ,                
                year INTEGER NOT NULL ,                     
                trait_id INTEGER NOT NULL ,              
                PRIMARY KEY (sofifa_id , year , trait_id) ,
                FOREIGN KEY (sofifa_id)
                REFERENCES player(sofifa_id) ,  
                FOREIGN KEY (year)
                REFERENCES player_stats(year) ,
                FOREIGN KEY (trait_id)
                REFERENCES traits(trait_id)      
    )""")

    cur.execute("""CREATE TABLE player_tags(
                sofifa_id INTEGER NOT NULL ,                
                year INTEGER NOT NULL ,                     
                tag_id INTEGER NOT NULL ,              
                PRIMARY KEY (sofifa_id , year , tag_id) ,
                FOREIGN KEY (sofifa_id)
                REFERENCES player(sofifa_id) ,  
                FOREIGN KEY (year)
                REFERENCES player_stats(year) ,
                FOREIGN KEY (tag_id)
                REFERENCES tags(tag_id)      
    )""")


    cur.execute("""CREATE TABLE clubs(
                club_team_id INTEGER NOT NULL ,                                    
                club_name VARCHAR(255) ,   
                league_id INTEGER NOT NULL ,      
                club_logo_url VARCHAR(255) ,  
                club_flag_url VARCHAR(255) ,      
                PRIMARY KEY (club_team_id) , 
                FOREIGN KEY (league_id)
                REFERENCES leagues(league_id)      
    )""")

    cur.execute("""CREATE TABLE player_clubs(
                sofifa_id INTEGER NOT NULL ,                
                year INTEGER NOT NULL ,                     
                club_team_id INTEGER NOT NULL ,  
                club_position INTEGER NOT NULL ,
                club_jersey_number INTEGER NOT NULL ,
                club_joined DATE NOT NULL ,
                club_contract_valid_until DATE NOT NULL ,
                club_loaned_from INTEGER NOT NULL ,
                release_clause_eur REAL NOT NULL ,
                PRIMARY KEY (sofifa_id, year, club_team_id) ,
                FOREIGN KEY (club_position)
                REFERENCES positions(position_id) ,  
                FOREIGN KEY (year)
                REFERENCES player_stats(year) ,
                FOREIGN KEY (club_team_id)
                REFERENCES club(club_team_id) ,
                FOREIGN KEY (club_loaned_from)
                REFERENCES club(club_loaned_from)       
    )""")

    cur.execute("""CREATE TABLE leagues(
                league_id INTEGER NOT NULL ,                                  
                league_name VARCHAR(255) ,   
                league_level INTEGER NOT NULL ,          
                PRIMARY KEY (league_id)  
    )""")

    cur.execute("""CREATE TABLE player_stats(
        sofifa_id INTEGER NOT NULL , 
        year INTEGER NOT NULL ,       
        overall INTEGER NOT NULL ,                      
        potential INTEGER NOT NULL ,                    
        value_eur REAL NOT NULL ,                       
        wage_eur REAL NOT NULL ,                        
        age INTEGER NOT NULL ,                          
        dob DATE NOT NULL ,                             
        height_cm INTEGER NOT NULL ,                    
        weight_kg INTEGER NOT NULL ,                    
        club_name VARCHAR(5) ,                       
        preferred_foot VARCHAR(5) ,                  
        weak_foot INTEGER NOT NULL ,                    
        skill_moves INTEGER NOT NULL ,                  
        international_reputation INTEGER NOT NULL ,     
        work_rate VARCHAR(16) ,                       
        body_type VARCHAR(16) ,                       
        real_face BOOLEAN NOT NULL ,                    
        pace INTEGER NOT NULL ,                         
        shooting INTEGER NOT NULL ,                     
        passing INTEGER NOT NULL ,                      
        dribbling INTEGER NOT NULL ,                    
        defending INTEGER NOT NULL ,                    
        physic INTEGER NOT NULL ,                       
        attacking_crossing INTEGER NOT NULL ,           
        attacking_finishing INTEGER NOT NULL ,          
        attacking_heading_accuracy INTEGER NOT NULL ,   
        attacking_short_passing INTEGER NOT NULL ,      
        attacking_volleys INTEGER NOT NULL ,            
        skill_dribbling INTEGER NOT NULL ,              
        skill_curve INTEGER NOT NULL ,                  
        skill_fk_accuracy INTEGER NOT NULL ,            
        skill_long_passing INTEGER NOT NULL ,           
        skill_ball_control INTEGER NOT NULL ,           
        movement_acceleration INTEGER NOT NULL ,        
        movement_sprint_speed INTEGER NOT NULL ,        
        movement_agility INTEGER NOT NULL ,             
        movement_reactions INTEGER NOT NULL ,           
        movement_balance INTEGER NOT NULL ,             
        power_shot_power INTEGER NOT NULL ,             
        power_jumping INTEGER NOT NULL ,                
        power_stamina INTEGER NOT NULL ,                
        power_strength INTEGER NOT NULL ,               
        power_long_shots INTEGER NOT NULL ,             
        mentality_aggression INTEGER NOT NULL ,         
        mentality_interceptions INTEGER NOT NULL ,      
        mentality_positioning INTEGER NOT NULL ,        
        mentality_vision INTEGER NOT NULL ,             
        mentality_penalties INTEGER NOT NULL ,          
        mentality_composure INTEGER NOT NULL ,          
        defending_marking_awareness INTEGER NOT NULL ,  
        defending_standing_tackle INTEGER NOT NULL ,    
        defending_sliding_tackle INTEGER NOT NULL ,     
        goalkeeping_diving INTEGER NOT NULL ,           
        goalkeeping_handling INTEGER NOT NULL ,         
        goalkeeping_kicking INTEGER NOT NULL ,          
        goalkeeping_positioning INTEGER NOT NULL ,      
        goalkeeping_reflexes INTEGER NOT NULL ,         
        goalkeeping_speed INTEGER NOT NULL ,            
        ls VARCHAR(5) ,                              
        st VARCHAR(5) ,                              
        rs VARCHAR(5) ,                              
        lw VARCHAR(5) ,                              
        lf VARCHAR(5) ,                              
        cf VARCHAR(5) ,                              
        rf VARCHAR(5) ,                              
        rw VARCHAR(5) ,                              
        lam VARCHAR(5) ,                             
        cam VARCHAR(5) ,                             
        ram VARCHAR(5) ,                             
        lm VARCHAR(5) ,                              
        lcm VARCHAR(5) ,                             
        cm VARCHAR(5) ,                              
        rcm VARCHAR(5) ,                             
        rm VARCHAR(5) ,                              
        lwb VARCHAR(5) ,                             
        ldm VARCHAR(5) ,                             
        cdm VARCHAR(5) ,                             
        rdm VARCHAR(5) ,                             
        rwb VARCHAR(5) ,                             
        lb VARCHAR(5) ,                              
        lcb VARCHAR(5) ,                             
        cb VARCHAR(5) ,                              
        rcb VARCHAR(5) ,                             
        rb VARCHAR(5) ,                              
        gk VARCHAR(5) ,                              
        player_face_url VARCHAR(255) ,
        PRIMARY KEY(sofifa_id ,year)               
    )""")

