import sqlite3
con = sqlite3.connect("db\\db.db")
cur = con.cursor()

def insert_players(players):
    if not players : return
    columns = ', '.join(players[0].keys())
    placeholders = ':'+', :'.join(players[0].keys())
    query = f'INSERT INTO Player ({columns}) VALUES ({placeholders});'
    con.executemany(query,players)
    con.commit()

def insert_player_nation(player_nations):
    if not player_nations : return
    columns = ', '.join(player_nations[0].keys())
    placeholders = ':'+', :'.join(player_nations[0].keys())
    query = f'INSERT INTO PlayerNation ({columns}) VALUES ({placeholders});'
    con.executemany(query,player_nations)
    con.commit()

def insert_nation_team(nation_teams):
    if not nation_teams : return
    columns = ', '.join(nation_teams[0].keys())
    placeholders = ':'+', :'.join(nation_teams[0].keys())
    query = f'INSERT INTO NationTeam ({columns}) VALUES ({placeholders});'
    con.executemany(query,nation_teams)
    con.commit()

def insert_nation(nations):
    if not nations : return
    columns = ', '.join(nations[0].keys())
    placeholders = ':'+', :'.join(nations[0].keys())
    query = f'INSERT INTO Nation ({columns}) VALUES ({placeholders});'
    con.executemany(query,nations)
    con.commit()

def insert_player_positions(player_positions):
    if not player_positions : return
    columns = ', '.join(player_positions[0].keys())
    placeholders = ':'+', :'.join(player_positions[0].keys())
    query = f'INSERT INTO PlayerPositions ({columns}) VALUES ({placeholders});'
    con.executemany(query,player_positions)
    con.commit()


def insert_player_traits(traits):
    if not traits : return
    columns = ', '.join(traits[0].keys())
    placeholders = ':'+', :'.join(traits[0].keys())
    query = f'INSERT INTO PlayerTraits ({columns}) VALUES ({placeholders});'
    con.executemany(query,traits)
    con.commit()

def insert_player_clubs(player_clubs):
    if not player_clubs : return
    columns = ', '.join(player_clubs[0].keys())
    placeholders = ':'+', :'.join(player_clubs[0].keys())
    query = f'INSERT INTO PlayerClub ({columns}) VALUES ({placeholders});'
    con.executemany(query,player_clubs)
    con.commit()

def insert_player_tags(player_tags):
    if not player_tags : return
    columns = ', '.join(player_tags[0].keys())
    placeholders = ':'+', :'.join(player_tags[0].keys())
    query = f'INSERT INTO PlayerTags ({columns}) VALUES ({placeholders});'
    con.executemany(query,player_tags)
    con.commit()

def insert_player_stats(player_stats):
    if not player_stats : return
    columns = ', '.join(player_stats[0].keys())
    placeholders = ':'+', :'.join(player_stats[0].keys())
    query = f'INSERT INTO PlayerStats ({columns}) VALUES ({placeholders});'
    con.executemany(query,player_stats)
    con.commit()

def insert_leagues(leagues):
    if not leagues : return
    columns = ', '.join(leagues[0].keys())
    placeholders = ':'+', :'.join(leagues[0].keys())
    query = f'INSERT INTO League ({columns}) VALUES ({placeholders});'
    con.executemany(query,leagues)
    con.commit()

def insert_positions(positions):
    if not positions : return
    columns = 'position_name, position_id'
    placeholders = ':position_name, :position_id'
    query = f'INSERT INTO Position ({columns}) VALUES ({placeholders});'
    con.executemany(query,positions)
    con.commit()

def insert_tags(tags):
    if not tags : return
    columns = ', '.join(tags[0].keys())
    placeholders = ':'+', :'.join(tags[0].keys())
    query = f'INSERT INTO Tag ({columns}) VALUES ({placeholders});'
    con.executemany(query,tags)
    con.commit()

def insert_traits(traits):
    if not traits : return
    columns = ', '.join(traits[0].keys())
    placeholders = ':'+', :'.join(traits[0].keys())
    query = f'INSERT INTO Trait ({columns}) VALUES ({placeholders});'
    con.executemany(query,traits)
    con.commit()

    
def insert_clubs(clubs):
    if not clubs : return
    columns = ', '.join(clubs[0].keys())
    placeholders = ':'+', :'.join(clubs[0].keys())
    query = f'INSERT INTO Club ({columns}) VALUES ({placeholders});'
    con.executemany(query, clubs)
    con.commit()
