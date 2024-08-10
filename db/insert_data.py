import sqlite3
con = sqlite3.connect("db\\db.db")
cur = con.cursor()

def insert_players(players):
    if not players : return
    columns = ', '.join(players[0].keys())
    placeholders = ':'+', :'.join(players[0].keys())
    query = f'INSERT INTO players ({columns}) VALUES ({placeholders});'
    con.executemany(query,players)

def insert_player_nation(player_nations):
    if not player_nations : return
    columns = ', '.join(player_nations[0].keys())
    placeholders = ':'+', :'.join(player_nations[0].keys())
    query = f'INSERT INTO player_nations ({columns}) VALUES ({placeholders});'
    con.executemany(query,player_nations)

def insert_nation_team(nation_teams):
    if not nation_teams : return
    columns = ', '.join(nation_teams[0].keys())
    placeholders = ':'+', :'.join(nation_teams[0].keys())
    query = f'INSERT INTO nation_teams ({columns}) VALUES ({placeholders});'
    con.executemany(query,nation_teams)

def insert_nation(nations):
    if not nations : return
    columns = ', '.join(nations[0].keys())
    placeholders = ':'+', :'.join(nations[0].keys())
    query = f'INSERT INTO nation ({columns}) VALUES ({placeholders});'
    con.executemany(query,nations)

def insert_player_positions(player_positions):
    if not player_positions : return
    columns = ', '.join(player_positions[0].keys())
    placeholders = ':'+', :'.join(player_positions[0].keys())
    query = f'INSERT INTO player_positions ({columns}) VALUES ({placeholders});'
    con.executemany(query,player_positions)


def insert_player_traits(traits):
    if not traits : return
    columns = ', '.join(traits[0].keys())
    placeholders = ':'+', :'.join(traits[0].keys())
    query = f'INSERT INTO player_traits ({columns}) VALUES ({placeholders});'
    con.executemany(query,traits)

def insert_player_clubs(player_clubs):
    if not player_clubs : return
    columns = ', '.join(player_clubs[0].keys())
    placeholders = ':'+', :'.join(player_clubs[0].keys())
    query = f'INSERT INTO player_clubs ({columns}) VALUES ({placeholders});'
    con.executemany(query,player_clubs)

def insert_player_tags(player_tags):
    if not player_tags : return
    columns = ', '.join(player_tags[0].keys())
    placeholders = ':'+', :'.join(player_tags[0].keys())
    query = f'INSERT INTO player_tags ({columns}) VALUES ({placeholders});'
    con.executemany(query,player_tags)

def insert_player_stats(player_stats):
    if not player_stats : return
    columns = ', '.join(player_stats[0].keys())
    placeholders = ':'+', :'.join(player_stats[0].keys())
    query = f'INSERT INTO player_stats ({columns}) VALUES ({placeholders});'
    con.executemany(query,player_stats)

def insert_leagues(leagues):
    if not leagues : return
    columns = ', '.join(leagues[0].keys())
    placeholders = ':'+', :'.join(leagues[0].keys())
    query = f'INSERT INTO leagues ({columns}) VALUES ({placeholders});'
    con.executemany(query,leagues)

def insert_positions(positions):
    if not positions : return
    columns = 'name, position_id'
    placeholders = ':name, :position_id'
    query = f'INSERT INTO positions ({columns}) VALUES ({placeholders});'
    con.executemany(query,positions)

def insert_tags(tags):
    if not tags : return
    columns = ', '.join(tags[0].keys())
    placeholders = ':'+', :'.join(tags[0].keys())
    query = f'INSERT INTO tags ({columns}) VALUES ({placeholders});'
    con.executemany(query,tags)

def insert_traits(traits):
    if not traits : return
    columns = ', '.join(traits[0].keys())
    placeholders = ':'+', :'.join(traits[0].keys())
    query = f'INSERT INTO traits ({columns}) VALUES ({placeholders});'
    con.executemany(query,traits)

    
def insert_clubs(clubs):
    if not clubs : return
    columns = ', '.join(clubs[0].keys())
    placeholders = ':'+', :'.join(clubs[0].keys())
    query = f'INSERT INTO clubs ({columns}) VALUES ({placeholders});'
    con.executemany(query, clubs)
