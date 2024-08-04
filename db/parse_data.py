import csv
from create_objects import *
from positions import positions_array

data_folder = 'db\\data'
files = ['players_15.csv']#,'players_16.csv','players_17.csv','players_18.csv']

players = []
player_nations = []
nation_teams= []
nations = []
player_positions = []
player_traits = []
player_clubs = []
clubs = []
player_tags = []
i = 0
for file in files:
    
    year = 2015
    with open(f'{data_folder}\{file}', newline='', encoding='utf-8') as csvfile:
        rows = csv.reader(csvfile, delimiter=',')
        header = next(rows)
        for col in rows:
            players.append(create_player(col))
            player_nations.append(create_player_nation(col))
            nation_teams.append(create_nation_team(col))
            nations.append(create_nation(col))
            player_positions.extend(create_player_positions(col,year))
            player_traits.extend(create_player_traits(col,year))
            player_clubs.append(create_player_club(col,year))
            clubs.append(create_club(col))
            player_tags.append(create_player_tag(col,year))
            if i > 5: break
            i+=1

           
            