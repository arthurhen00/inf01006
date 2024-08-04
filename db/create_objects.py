from columns import *
from positions import positions_dict
from traits import traits_dict
from leagues import leagues_dict
from tags import tags_dict

def create_player(col):
    obj = {}
    obj['sofifa_id'] = col[SOFIFA_ID]
    obj['obj_url'] = col[PLAYER_URL]
    obj['short_name'] = col[SHORT_NAME]
    obj['long_name'] = col[LONG_NAME]

    return obj

def create_player_nation(col):
    obj = {}
    obj['sofifa_id'] = col[SOFIFA_ID]
    obj['nation_team_id'] = col[NATION_TEAM_ID]
    obj['nation_position'] = col[NATION_POSITION]
    obj['nation_jersey_number'] = col[NATION_JERSEY_NUMBER]

    return obj

def create_nation_team(col):
    obj = {}
    obj['nation_team_id'] = col[NATION_TEAM_ID]
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

def create_player_traits(col,year):
    objs = []
    positions = map(lambda x: x.strip(), col[PLAYER_TRAITS].split(','))
    for trait in positions:
        objs.append(create_player_trait(col,year,traits_dict[trait]))
    return objs

def create_player_trait(col,year,trait_id):
    obj = {}
    obj['year'] = year
    obj['sofifa_id'] = col[SOFIFA_ID]
    obj['trait_id'] = trait_id

    return obj

def create_player_club(col,year):
    obj = {}
    obj['year'] = year
    obj['sofifa_id'] = col[SOFIFA_ID]
    obj['club_team_id'] = col[CLUB_TEAM_ID]
    obj['club_position'] = col[CLUB_POSITION]
    obj['club_jersey_number'] = col[CLUB_JERSEY_NUMBER]
    obj['club_joined'] = col[CLUB_JOINED]
    obj['club_contract_valid_until'] = col[CLUB_CONTRACT_VALID_UNTIL]

    return obj

def create_club(col):
    obj = {}
    obj['club_team_id'] = col[CLUB_TEAM_ID]
    obj['nationality_id'] = col[NATIONALITY_ID]
    obj['club_name'] = col[CLUB_NAME]
    obj['league_id'] = leagues_dict[col[LEAGUE_NAME]]
    obj['club_logo_url'] = col[CLUB_LOGO_URL]

    return obj

def create_player_tag(col,year):
    obj = {}
    obj['year'] = year
    obj['sofifa_id'] = col[SOFIFA_ID]
    obj['tag_id'] = tags_dict

    return obj
