import csv
import re

from create_objects import *
from positions import positions_array
from nation_teams import nation_teams_array
from leagues import leagues_array
from nations import nations_array
from tags import tags_array
from traits import traits_array
from clubs import clubs_array
from insert_data import *
from create_tables import create_db
data_folder = 'db\\data'
filenames = ['players_15.csv','players_16.csv',]#'players_17.csv','players_18.csv']

players = []
player_nations = []
nation_teams= []
nations = []
player_positions = []
player_traits = []
player_clubs = []
clubs = []
player_tags = []
player_stats = []
i = 0
for filename in filenames:
    match = re.search(r'\d+', filename)

    if match:
        number = int(match.group())
    else:
        continue
    year = 2000 + number
    with open(f'{data_folder}\{filename}', newline='', encoding='utf-8') as csvfile:
        rows = csv.reader(csvfile, delimiter=',')
        header = next(rows)
        for col in rows:
            player = create_player(col)
            if player != {}:
                players.append(player)
            player_nation = create_player_nation(col)
            if player_nation != {}:
                player_nations.append(player_nation)
            nation = create_nation(col)
            if nation != {}:
                nations.append(nation)
            player_position = create_player_positions(col,year)
            if player_position != {}:
                player_positions.extend(player_position)
            player_trait = create_player_traits(col,year)
            if player_trait != {}:
                player_traits.extend(player_trait)
            player_club = create_player_club(col,year)
            if player_club != {}:
                player_clubs.append(player_club)
            club = create_club(col)
            if club != {}:
                clubs.append(club)
            player_tag =create_player_tags(col,year)
            if player_tag != {}:
                player_tags.extend(player_tag)
            player_stat =create_player_stats(col,year)
            if player_stat != {}:
                player_stats.append(player_stat)
            #if i > 5: break
            i+=1



create_db()
insert_players(players)
insert_tags(tags_array) 
insert_traits(traits_array) 
insert_nation_team(nation_teams_array) 
insert_positions(positions_array) 
insert_player_nation(player_nations) 
insert_nation(nations_array) 
insert_leagues(leagues_array) 
insert_clubs(clubs_array) 
insert_player_positions(player_positions) 
insert_player_stats(player_stats) 
insert_player_tags(player_tags) 
insert_player_clubs(player_clubs) 
insert_player_traits(player_traits) 