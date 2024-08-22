from columns import *
from positions import positions_dict
#from traits import traits_dict
#from leagues import leagues_dict
#from tags import tags_dict
#from clubs import clubs_dict
def create_player(col):
    obj = {}
    obj['sofifa_id'] = col[SOFIFA_ID] if col[SOFIFA_ID] != "" else None
    obj['player_url'] = col[PLAYER_URL]  if col[PLAYER_URL] != "" else None
    obj['short_name'] = col[SHORT_NAME]  if col[SHORT_NAME] != "" else None
    obj['long_name'] = col[LONG_NAME]  if col[LONG_NAME] != "" else None
    obj['nationality_id'] = col[NATIONALITY_ID] if col[NATIONALITY_ID] != "" else None

    return obj

def create_player_nation(col):
    obj = {}
    if not col[NATION_TEAM_ID]: return obj
    nation_team_id = int(col[NATION_TEAM_ID][:-2]) if col[NATION_TEAM_ID] != "" else None
    obj['sofifa_id'] = col[SOFIFA_ID] if col[SOFIFA_ID] != "" else None 
    obj['nation_team_id'] = nation_team_id
    obj['nation_position'] = col[NATION_POSITION] if col[NATION_POSITION] != "" else None
    obj['nation_jersey_number'] = col[NATION_JERSEY_NUMBER]  if col[NATION_JERSEY_NUMBER] != "" else None

    return obj 

def create_nation_team(col):
    obj = {}
    if not col[NATION_TEAM_ID]: return obj
    nation_team_id = int(col[NATION_TEAM_ID][:-2]) if col[NATION_TEAM_ID] != "" else None
    obj['nation_team_id'] = nation_team_id
    obj['nationality_id'] = col[NATIONALITY_ID] if col[NATIONALITY_ID] != "" else None
    obj['nation_logo_url'] = col[NATION_LOGO_URL]  if col[NATION_LOGO_URL] != "" else None

    return obj

def create_nation(col):
    obj = {}
    obj['nationality_id'] = col[NATIONALITY_ID] if col[NATIONALITY_ID] != "" else None
    obj['nationality_name'] = col[NATIONALITY_NAME] if col[NATIONALITY_NAME] != "" else None
    obj['nation_flag_url'] = col[NATION_FLAG_URL] if col[NATION_FLAG_URL] != "" else None

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
    obj['sofifa_id'] = col[SOFIFA_ID] if col[SOFIFA_ID] != "" else None
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
    obj['sofifa_id'] = col[SOFIFA_ID] if col[SOFIFA_ID] != "" else None
    obj['trait_id'] = trait_id

    return obj

def create_player_club(col,year):
    obj = {}
    if col[CLUB_TEAM_ID] == '': return obj
    obj['year'] = year
    obj['sofifa_id'] = col[SOFIFA_ID] if col[SOFIFA_ID] != "" else None
    obj['club_team_id'] = col[CLUB_TEAM_ID] if col[CLUB_TEAM_ID] != "" else None
    obj['club_position'] = col[CLUB_POSITION] if col[CLUB_POSITION] != "" else None
    obj['club_jersey_number'] = col[CLUB_JERSEY_NUMBER] if col[CLUB_JERSEY_NUMBER] != "" else None
    obj['club_joined'] = col[CLUB_JOINED]  if col[CLUB_JOINED] != "" else None
    obj['club_contract_valid_until'] = col[CLUB_CONTRACT_VALID_UNTIL] if col[CLUB_CONTRACT_VALID_UNTIL] != "" else None
    obj['release_clause_eur'] = col[RELEASE_CLAUSE_EUR] if col[RELEASE_CLAUSE_EUR] != "" else None
    obj['club_loaned_from'] = col[CLUB_LOANED_FROM] if col[CLUB_LOANED_FROM] != "" else None

    return obj

def create_club(col, league_id):
    obj = {}
    if col[LEAGUE_NAME] == '': return obj
    obj['club_team_id'] = col[CLUB_TEAM_ID][:-2] if col[CLUB_TEAM_ID] != "" else None
    obj['club_name'] = col[CLUB_NAME] if col[CLUB_NAME] != "" else None
    obj['league_id'] = league_id if league_id != "" else None
    obj['club_logo_url'] = col[CLUB_LOGO_URL] if col[CLUB_LOGO_URL] != "" else None
    obj['club_flag_url'] = col[CLUB_FLAG_URL] if col[CLUB_FLAG_URL] != "" else None
    obj['nationality_id'] = 1

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
    obj['sofifa_id'] = col[SOFIFA_ID] if col[SOFIFA_ID] != "" else None
    obj['tag_id'] = tag_id

    return obj

def create_player_stats(col,year):
    obj = {}
    obj['sofifa_id'] = col[SOFIFA_ID]  if col[SOFIFA_ID] != "" else None
    obj['year'] = year       
    obj['overall'] = col[OVERALL] if col[OVERALL] != "" else None
    obj['potential'] = col[POTENTIAL] if col[POTENTIAL] != "" else None
    obj['value_eur'] = col[VALUE_EUR] if col[VALUE_EUR] != "" else None
    obj['wage_eur'] = col[WAGE_EUR]   if col[WAGE_EUR] != "" else None
    obj['age'] = col[AGE]  if col[AGE] != "" else None
    obj['dob'] = col[DOB]if col[DOB] != "" else None
    obj['height_cm'] = col[HEIGHT_CM] if col[HEIGHT_CM] != "" else None
    obj['weight_kg'] = col[WEIGHT_KG] if col[WEIGHT_KG] != "" else None
    obj['club_name'] = col[CLUB_NAME]  if col[CLUB_NAME] != "" else None
    obj['preferred_foot'] = col[PREFERRED_FOOT] if col[PREFERRED_FOOT] != "" else None
    obj['weak_foot'] = col[WEAK_FOOT] if col[WEAK_FOOT] != "" else None
    obj['skill_moves'] = col[SKILL_MOVES] if col[SKILL_MOVES] != "" else None
    obj['international_reputation'] = col[INTERNATIONAL_REPUTATION]   if col[INTERNATIONAL_REPUTATION] != "" else None
    obj['work_rate'] = col[WORK_RATE]  if col[WORK_RATE] != "" else None
    obj['body_type'] = col[BODY_TYPE]  if col[BODY_TYPE] != "" else None
    obj['real_face'] = col[REAL_FACE] if col[REAL_FACE] != "" else None
    obj['pace'] = col[PACE] if col[PACE] != "" else None
    obj['shooting'] = col[SHOOTING]  if col[SHOOTING] != "" else None
    obj['passing'] = col[PASSING] if col[PASSING] != "" else None
    obj['dribbling'] = col[DRIBBLING] if col[DRIBBLING] != "" else None
    obj['defending'] = col[DEFENDING] if col[DEFENDING] != "" else None
    obj['physic'] = col[PHYSIC]  if col[PHYSIC] != "" else None
    obj['attacking_crossing'] = col[ATTACKING_CROSSING] if col[ATTACKING_CROSSING] != "" else None
    obj['attacking_finishing'] = col[ATTACKING_FINISHING] if col[ATTACKING_FINISHING] != "" else None
    obj['attacking_heading_accuracy'] = col[ATTACKING_HEADING_ACCURACY] if col[ATTACKING_HEADING_ACCURACY] != "" else None
    obj['attacking_short_passing'] = col[ATTACKING_SHORT_PASSING]    if col[ATTACKING_SHORT_PASSING] != "" else None
    obj['attacking_volleys'] = col[ATTACKING_VOLLEYS] if col[ATTACKING_VOLLEYS] != "" else None
    obj['skill_dribbling'] = col[SKILL_DRIBBLING]   if col[SKILL_DRIBBLING] != "" else None
    obj['skill_curve'] = col[SKILL_CURVE] if col[SKILL_CURVE] != "" else None
    obj['skill_fk_accuracy'] = col[SKILL_FK_ACCURACY] if col[SKILL_FK_ACCURACY] != "" else None
    obj['skill_long_passing'] = col[SKILL_LONG_PASSING] if col[SKILL_LONG_PASSING] != "" else None
    obj['skill_ball_control'] = col[SKILL_BALL_CONTROL] if col[SKILL_BALL_CONTROL] != "" else None
    obj['movement_acceleration'] = col[MOVEMENT_ACCELERATION] if col[MOVEMENT_ACCELERATION] != "" else None
    obj['movement_sprint_speed'] = col[MOVEMENT_SPRINT_SPEED] if col[MOVEMENT_SPRINT_SPEED] != "" else None
    obj['movement_agility'] = col[MOVEMENT_AGILITY]  if col[MOVEMENT_AGILITY] != "" else None
    obj['movement_reactions'] = col[MOVEMENT_REACTIONS] if col[MOVEMENT_REACTIONS] != "" else None
    obj['movement_balance'] = col[MOVEMENT_BALANCE]  if col[MOVEMENT_BALANCE] != "" else None
    obj['power_shot_power'] = col[POWER_SHOT_POWER]  if col[POWER_SHOT_POWER] != "" else None
    obj['power_jumping'] = col[POWER_JUMPING]     if col[POWER_JUMPING] != "" else None
    obj['power_stamina'] = col[POWER_STAMINA]     if col[POWER_STAMINA] != "" else None
    obj['power_strength'] = col[POWER_STRENGTH]    if col[POWER_STRENGTH] != "" else None
    obj['power_long_shots'] = col[POWER_LONG_SHOTS]  if col[POWER_LONG_SHOTS] != "" else None
    obj['mentality_aggression'] = col[MENTALITY_AGGRESSION]  if col[MENTALITY_AGGRESSION] != "" else None
    obj['mentality_interceptions'] = col[MENTALITY_INTERCEPTIONS]    if col[MENTALITY_INTERCEPTIONS] != "" else None
    obj['mentality_positioning'] = col[MENTALITY_POSITIONING] if col[MENTALITY_POSITIONING] != "" else None
    obj['mentality_vision'] = col[MENTALITY_VISION]  if col[MENTALITY_VISION] != "" else None
    obj['mentality_penalties'] = col[MENTALITY_PENALTIES]   if col[MENTALITY_PENALTIES] != "" else None
    obj['mentality_composure'] = col[MENTALITY_COMPOSURE]   if col[MENTALITY_COMPOSURE] != "" else None
    obj['defending_marking_awareness'] = col[DEFENDING_MARKING_AWARENESS]   if col[DEFENDING_MARKING_AWARENESS] != "" else None
    obj['defending_standing_tackle'] = col[DEFENDING_STANDING_TACKLE]  if col[DEFENDING_STANDING_TACKLE] != "" else None
    obj['defending_sliding_tackle'] = col[DEFENDING_SLIDING_TACKLE]   if col[DEFENDING_SLIDING_TACKLE] != "" else None
    obj['goalkeeping_diving'] = col[GOALKEEPING_DIVING] if col[GOALKEEPING_DIVING] != "" else None
    obj['goalkeeping_handling'] = col[GOALKEEPING_HANDLING]  if col[GOALKEEPING_HANDLING] != "" else None
    obj['goalkeeping_kicking'] = col[GOALKEEPING_KICKING]   if col[GOALKEEPING_KICKING] != "" else None
    obj['goalkeeping_positioning'] = col[GOALKEEPING_POSITIONING]    if col[GOALKEEPING_POSITIONING] != "" else None
    obj['goalkeeping_reflexes'] = col[GOALKEEPING_REFLEXES]  if col[GOALKEEPING_REFLEXES] != "" else None
    obj['goalkeeping_speed'] = col[GOALKEEPING_SPEED] if col[GOALKEEPING_SPEED] != "" else None
    obj['ls'] = col[LS] if col[LS] != "" else None
    obj['st'] = col[ST] if col[ST] != "" else None
    obj['rs'] = col[RS] if col[RS] != "" else None
    obj['lw'] = col[LW] if col[LW] != "" else None
    obj['lf'] = col[LF] if col[LF] != "" else None
    obj['cf'] = col[CF] if col[CF] != "" else None
    obj['rf'] = col[RF] if col[RF] != "" else None
    obj['rw'] = col[RW] if col[RW] != "" else None
    obj['lam'] = col[LAM] if col[LAM] != "" else None
    obj['cam'] = col[CAM] if col[CAM] != "" else None
    obj['ram'] = col[RAM] if col[RAM] != "" else None
    obj['lm'] = col[LM] if col[LM] != "" else None
    obj['lcm'] = col[LCM] if col[LCM] != "" else None
    obj['cm'] = col[CM] if col[CM] != "" else None
    obj['rcm'] = col[RCM] if col[RCM] != "" else None
    obj['rm'] = col[RM] if col[RM] != "" else None
    obj['lwb'] = col[LWB] if col[LWB] != "" else None
    obj['ldm'] = col[LDM] if col[LDM] != "" else None
    obj['cdm'] = col[CDM] if col[CDM] != "" else None
    obj['rdm'] = col[RDM] if col[RDM] != "" else None
    obj['rwb'] = col[RWB] if col[RWB] != "" else None
    obj['lb'] = col[LB] if col[LB] != "" else None
    obj['lcb'] = col[LCB] if col[LCB] != "" else None
    obj['cb'] = col[CB] if col[CB] != "" else None
    obj['rcb'] = col[RCB] if col[RCB] != "" else None
    obj['rb'] = col[RB] if col[RB] != "" else None
    obj['gk'] = col[GK] if col[GK] != "" else None
    obj['player_face_url'] = col[PLAYER_FACE_URL] if col[PLAYER_FACE_URL] != "" else None
    return obj

league_counter = 0
def create_league(col):
    global league_counter
    obj = {}
    obj['league_id'] = league_counter
    league_counter += 1
    obj['league_name'] = col[LEAGUE_NAME]     if col[LEAGUE_NAME] != "" else None
    obj['league_level'] = col[LEAGUE_LEVEL] if col[LEAGUE_LEVEL] != "" else None

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