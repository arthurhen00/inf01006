from columns import *
from positions import positions_dict
#from traits import traits_dict
#from leagues import leagues_dict
#from tags import tags_dict
#from clubs import clubs_dict
def create_player(col):
    obj = {}
    obj['sofifa_id'] = col[SOFIFA_ID]
    obj['player_url'] = col[PLAYER_URL]
    obj['short_name'] = col[SHORT_NAME]
    obj['long_name'] = col[LONG_NAME]
    obj['nationality_id'] = col[NATIONALITY_ID]

    return obj

def create_player_nation(col):
    obj = {}
    if not col[NATION_TEAM_ID]: return obj
    nation_team_id = int(col[NATION_TEAM_ID][:-2])
    obj['sofifa_id'] = col[SOFIFA_ID]
    obj['nation_team_id'] = nation_team_id
    obj['nation_position'] = col[NATION_POSITION]
    obj['nation_jersey_number'] = col[NATION_JERSEY_NUMBER]

    return obj

def create_nation_team(col):
    obj = {}
    if not col[NATION_TEAM_ID]: return obj
    nation_team_id = int(col[NATION_TEAM_ID][:-2])
    obj['nation_team_id'] = nation_team_id
    obj['nationality_id'] = col[NATIONALITY_ID]
    obj['nation_logo_url'] = col[NATION_LOGO_URL]

    return obj

def create_nation(col):
    obj = {}
    obj['nationality_id'] = col[NATIONALITY_ID]
    obj['nationality_name'] = col[NATIONALITY_NAME]
    obj['nation_flag_url'] = col[NATION_FLAG_URL]

    return obj

def create_player_positions(col,year):
    objs = []
    positions = map(lambda x: x.strip(), col[PLAYER_POSITIONS].split(','))
    for pos in positions:
        objs.append(create_player_position(col,year,positions_dict[pos]))
    return objs

def create_player_position(col,year,position_id):
    obj = {}
    obj['year'] = year
    obj['sofifa_id'] = col[SOFIFA_ID]
    obj['position_id'] = position_id

    return obj

def create_player_traits(col,year, traits):
    objs = []
    player_traits = map(lambda x: x.strip(), col[PLAYER_TRAITS].split(','))
    for trait in player_traits:
        if trait != '':
            trait_obj = traits[trait]
            objs.append(create_player_trait(col,year,trait_obj['trait_id']))
    return objs

def create_player_trait(col,year,trait_id):
    obj = {}
    obj['year'] = year
    obj['sofifa_id'] = col[SOFIFA_ID]
    obj['trait_id'] = trait_id

    return obj

def create_player_club(col,year):
    obj = {}
    if col[CLUB_TEAM_ID] == '': return obj
    obj['year'] = year
    obj['sofifa_id'] = col[SOFIFA_ID]
    obj['club_team_id'] = col[CLUB_TEAM_ID][-2]
    obj['club_position'] = col[CLUB_POSITION]
    obj['club_jersey_number'] = col[CLUB_JERSEY_NUMBER]
    obj['club_joined'] = col[CLUB_JOINED]
    obj['club_contract_valid_until'] = col[CLUB_CONTRACT_VALID_UNTIL]
    obj['release_clause_eur'] = col[RELEASE_CLAUSE_EUR]
    obj['club_loaned_from'] = col[CLUB_LOANED_FROM]

    return obj

def create_club(col, league_id):
    obj = {}
    if col[LEAGUE_NAME] == '': return obj
    obj['club_team_id'] = col[CLUB_TEAM_ID][:-2]
    obj['club_name'] = col[CLUB_NAME]
    obj['league_id'] = league_id
    obj['club_logo_url'] = col[CLUB_LOGO_URL]
    obj['club_flag_url'] = col[CLUB_FLAG_URL]

    return obj

def create_player_tags(col,year,tags):
    objs = []
    player_tags = map(lambda x: x.strip(), col[PLAYER_TAGS].split(','))
    for tag in player_tags:
        if tag != '':
            tag_obj = tags[tag]
            objs.append(create_player_tag(col,year,tag_obj['tag_id']))
    return objs

def create_player_tag(col,year, tag_id):
    obj = {}
    obj['year'] = year
    obj['sofifa_id'] = col[SOFIFA_ID]
    obj['tag_id'] = tag_id

    return obj

def create_player_stats(col,year):
    obj = {}
    obj['sofifa_id'] = col[SOFIFA_ID] 
    obj['year'] = year       
    obj['overall'] = col[OVERALL]                      
    obj['potential'] = col[POTENTIAL]                    
    obj['value_eur'] = col[VALUE_EUR]                       
    obj['wage_eur'] = col[WAGE_EUR]                        
    obj['age'] = col[AGE]                          
    obj['dob'] = col[DOB]                             
    obj['height_cm'] = col[HEIGHT_CM]                    
    obj['weight_kg'] = col[WEIGHT_KG]                    
    obj['club_name'] = col[CLUB_NAME]                       
    obj['preferred_foot'] = col[PREFERRED_FOOT]                  
    obj['weak_foot'] = col[WEAK_FOOT]                    
    obj['skill_moves'] = col[SKILL_MOVES]                  
    obj['international_reputation'] = col[INTERNATIONAL_REPUTATION]     
    obj['work_rate'] = col[WORK_RATE]                       
    obj['body_type'] = col[BODY_TYPE]                       
    obj['real_face'] = col[REAL_FACE]                    
    obj['pace'] = col[PACE]                         
    obj['shooting'] = col[SHOOTING]                     
    obj['passing'] = col[PASSING]                      
    obj['dribbling'] = col[DRIBBLING]                    
    obj['defending'] = col[DEFENDING]                    
    obj['physic'] = col[PHYSIC]                       
    obj['attacking_crossing'] = col[ATTACKING_CROSSING]           
    obj['attacking_finishing'] = col[ATTACKING_FINISHING]          
    obj['attacking_heading_accuracy'] = col[ATTACKING_HEADING_ACCURACY]   
    obj['attacking_short_passing'] = col[ATTACKING_SHORT_PASSING]      
    obj['attacking_volleys'] = col[ATTACKING_VOLLEYS]            
    obj['skill_dribbling'] = col[SKILL_DRIBBLING]              
    obj['skill_curve'] = col[SKILL_CURVE]                  
    obj['skill_fk_accuracy'] = col[SKILL_FK_ACCURACY]            
    obj['skill_long_passing'] = col[SKILL_LONG_PASSING]           
    obj['skill_ball_control'] = col[SKILL_BALL_CONTROL]           
    obj['movement_acceleration'] = col[MOVEMENT_ACCELERATION]        
    obj['movement_sprint_speed'] = col[MOVEMENT_SPRINT_SPEED]        
    obj['movement_agility'] = col[MOVEMENT_AGILITY]             
    obj['movement_reactions'] = col[MOVEMENT_REACTIONS]           
    obj['movement_balance'] = col[MOVEMENT_BALANCE]             
    obj['power_shot_power'] = col[POWER_SHOT_POWER]             
    obj['power_jumping'] = col[POWER_JUMPING]                
    obj['power_stamina'] = col[POWER_STAMINA]                
    obj['power_strength'] = col[POWER_STRENGTH]               
    obj['power_long_shots'] = col[POWER_LONG_SHOTS]             
    obj['mentality_aggression'] = col[MENTALITY_AGGRESSION]         
    obj['mentality_interceptions'] = col[MENTALITY_INTERCEPTIONS]      
    obj['mentality_positioning'] = col[MENTALITY_POSITIONING]        
    obj['mentality_vision'] = col[MENTALITY_VISION]             
    obj['mentality_penalties'] = col[MENTALITY_PENALTIES]          
    obj['mentality_composure'] = col[MENTALITY_COMPOSURE]          
    obj['defending_marking_awareness'] = col[DEFENDING_MARKING_AWARENESS]  
    obj['defending_standing_tackle'] = col[DEFENDING_STANDING_TACKLE]    
    obj['defending_sliding_tackle'] = col[DEFENDING_SLIDING_TACKLE]     
    obj['goalkeeping_diving'] = col[GOALKEEPING_DIVING]           
    obj['goalkeeping_handling'] = col[GOALKEEPING_HANDLING]         
    obj['goalkeeping_kicking'] = col[GOALKEEPING_KICKING]          
    obj['goalkeeping_positioning'] = col[GOALKEEPING_POSITIONING]      
    obj['goalkeeping_reflexes'] = col[GOALKEEPING_REFLEXES]         
    obj['goalkeeping_speed'] = col[GOALKEEPING_SPEED]            
    obj['ls'] = col[LS]                              
    obj['st'] = col[ST]                              
    obj['rs'] = col[RS]                              
    obj['lw'] = col[LW]                              
    obj['lf'] = col[LF]                              
    obj['cf'] = col[CF]                              
    obj['rf'] = col[RF]                              
    obj['rw'] = col[RW]                              
    obj['lam'] = col[LAM]
    obj['cam'] = col[CAM]
    obj['ram'] = col[RAM]
    obj['lm'] = col[LM]
    obj['lcm'] = col[LCM]
    obj['cm'] = col[CM]
    obj['rcm'] = col[RCM]
    obj['rm'] = col[RM]
    obj['lwb'] = col[LWB]
    obj['ldm'] = col[LDM]
    obj['cdm'] = col[CDM]
    obj['rdm'] = col[RDM]
    obj['rwb'] = col[RWB]
    obj['lb'] = col[LB]
    obj['lcb'] = col[LCB]
    obj['cb'] = col[CB]
    obj['rcb'] = col[RCB]
    obj['rb'] = col[RB]
    obj['gk'] = col[GK]
    obj['player_face_url'] = col[PLAYER_FACE_URL]
    return obj

league_counter = 0
def create_league(col):
    global league_counter
    obj = {}
    obj['league_id'] = league_counter
    league_counter += 1
    obj['league_name'] = col[LEAGUE_NAME]       
    obj['league_level'] = col[LEAGUE_LEVEL]   

    return obj


tag_counter = 0
def create_tags(col):
    global tag_counter
    objs = []
    tags = map(lambda x: x.strip(), col[PLAYER_TAGS].split(','))
    for tag in tags:
        if tag != '':
            objs.append({
                'tag_id' : tag_counter,
                'tag_name': tag
            })
            tag_counter += 1
    return objs

trait_counter = 0
def create_traits(col):
    global trait_counter
    objs = []
    traits = map(lambda x: x.strip(), col[PLAYER_TRAITS].split(','))
    for trait in traits:
        if trait != '':
            objs.append({
                'trait_id' : trait_counter,
                'trait_name': trait
            })
            
            trait_counter += 1
    return objs