import sqlite3
con = sqlite3.connect("db\\db.db")
cur = con.cursor()

def insert_players(players):
    columns = ', '.join(players[0].keys())
    placeholders = ':'+', :'.join(players[0].keys())
    query = f'INSERT INTO players ({columns}) VALUES ({placeholders});'
    con.executemany(query,players)

def insert_player_nation(player_nations):
    columns = ', '.join(player_nations[0].keys())
    placeholders = ':'+', :'.join(player_nations[0].keys())
    query = f'INSERT INTO player_nations ({columns}) VALUES ({placeholders});'
    con.executemany(query,player_nations)

def insert_nation_team(nation_teams):
    columns = ', '.join(nation_teams[0].keys())
    placeholders = ':'+', :'.join(nation_teams[0].keys())
    query = f'INSERT INTO nation_teams ({columns}) VALUES ({placeholders});'
    con.executemany(query,nation_teams)

def insert_nation(nation):
    columns = ', '.join(nation[0].keys())
    placeholders = ':'+', :'.join(nation[0].keys())
    query = f'INSERT INTO nation ({columns}) VALUES ({placeholders});'
    con.executemany(query,nation)

def insert_player_positions(player_positions):
    columns = ', '.join(player_positions[0].keys())
    placeholders = ':'+', :'.join(player_positions[0].keys())
    query = f'INSERT INTO player_positions ({columns}) VALUES ({placeholders});'
    con.executemany(query,player_positions)


def insert_player_traits(traits):
    columns = ', '.join(traits[0].keys())
    placeholders = ':'+', :'.join(traits[0].keys())
    query = f'INSERT INTO player_traits ({columns}) VALUES ({placeholders});'
    con.executemany(query,traits)



def insert_player_clubs(player_clubs):
    columns = ', '.join(player_clubs[0].keys())
    placeholders = ':'+', :'.join(player_clubs[0].keys())
    query = f'INSERT INTO player_clubs ({columns}) VALUES ({placeholders});'
    con.executemany(query,player_clubs)

def insert_player_tags(player_tags):
    columns = ', '.join(player_tags[0].keys())
    placeholders = ':'+', :'.join(player_tags[0].keys())
    query = f'INSERT INTO player_tags ({columns}) VALUES ({placeholders});'
    con.executemany(query,player_tags)

def insert_player_stats(player_stats):
    
    columns = ', '.join(player_stats[0].keys())
    placeholders = ':'+', :'.join(player_stats[0].keys())
    query = f'INSERT INTO player_stats ({columns}) VALUES ({placeholders});'
    con.executemany(query,player_stats)

def insert_leagues(leagues):
    columns = 'league_name, league_level, league_id'
    placeholders = '?, ?, ?'
    query = f'INSERT INTO leagues ({columns}) VALUES ({placeholders});'
    con.executemany(query,leagues)

def insert_positions(positions):
    columns = 'name, position_id'
    placeholders = '?, ?'
    query = f'INSERT INTO positions ({columns}) VALUES ({placeholders});'
    con.executemany(query,positions)

def insert_tags(tags):
    columns = 'name, tag_id'
    placeholders = '?, ?'
    query = f'INSERT INTO tags ({columns}) VALUES ({placeholders});'
    con.executemany(query,tags)

def insert_traits(tags):
    columns = 'name, trait_id'
    placeholders = '?, ?'
    query = f'INSERT INTO traits ({columns}) VALUES ({placeholders});'
    con.executemany(query,tags)

    
def insert_clubs(clubs):
    columns = 'club_name, club_team_id, league_id, club_logo_url, club_flag_url'
    placeholders = '?, ?, ?, ?, ?'
    query = f'INSERT INTO clubs ({columns}) VALUES ({placeholders});'
    con.executemany(query, clubs)
