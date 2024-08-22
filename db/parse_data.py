import csv
import re

from create_objects import *
from positions import positions_array

from insert_data import *
from create_tables import create_db
data_folder = 'db\\data'
filenames = ['players_15.csv','players_16.csv','players_17.csv','players_18.csv']

players = []
player_nations = []
nations = []
player_positions = []
player_traits = []
player_clubs = []
player_tags = []
player_stats = []

nation_teams= {}
clubs = {}
nations = {}
leagues = {}
tags = {}
traits = {}
players ={}
i = 0
player_nations = {}

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
            nation = create_nation(col)
            if nation['nationality_id'] not in nations:
                nations[nation['nationality_id']] = nation

            league = create_league(col)
            if league['league_id'] not in leagues:
                leagues[league['league_id']] = league

            club = create_club(col, league['league_id'])
            if club != {} and club['club_name'] not in clubs:
                clubs[club['club_name']] = club

            nation_team = create_nation_team(col)
            if nation_team != {} and nation_team['nation_team_id'] not in nation_teams:
                nation_teams[nation_team['nation_team_id']] = nation_team
            
            tag_array = create_tags(col)
            for tag in tag_array:
                if tag['tag_name'] not in tags:
                    tags[tag['tag_name']] = tag
 
            trait_array = create_traits(col)
            for trait in trait_array:
                if trait['trait_name'] not in traits:
                    traits[trait['trait_name']] = trait

            player = create_player(col)
            if player != {} and player['sofifa_id'] not in players:
                players[player['sofifa_id']] = player

            player_nation = create_player_nation(col)
            if player_nation != {} and player_nation['sofifa_id'] not in player_nations:
                player_nations[player_nation['sofifa_id']] = player_nation
                    
import sys

# Ensure the default encoding for stdout is set to UTF-8
sys.stdout.reconfigure(encoding='utf-8')



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
 
            player_position = create_player_positions(col,year)
            if player_position != {}:
                player_positions.extend(player_position)

            player_trait = create_player_traits(col,year, traits)
            if player_trait != {}:
                player_traits.extend(player_trait)

            player_club = create_player_club(col,year)
            if player_club != {}:
                player_clubs.append(player_club)
     
            player_tag =create_player_tags(col,year,tags)
            if player_tag != {}:
                player_tags.extend(player_tag)

            player_stat =create_player_stats(col,year)
            if player_stat != {}:
                player_stats.append(player_stat)
            #if i > 5: break
            i+=1

clubs = [value for _ , value in clubs.items()]                
nation_teams = [value for _ , value in nation_teams.items()]
nations = [value for _ , value in nations.items()]
leagues = [value for _ , value in leagues.items()]
tags = [value for _ , value in tags.items()]
traits = [value for _ , value in traits.items()]
players = [value for _ , value in players.items()]
player_nations = [value for _ , value in player_nations.items()]

create_db()

insert_players(players)
insert_tags(tags) 
insert_traits(traits) 
insert_nation_team(nation_teams) 
insert_positions(positions_array) 
insert_player_nation(player_nations) 
insert_nation(nations) 
insert_leagues(leagues) 
insert_clubs(clubs) 

insert_player_positions(player_positions) 
insert_player_stats(player_stats) 
insert_player_tags(player_tags) 
insert_player_clubs(player_clubs) 
insert_player_traits(player_traits) 
