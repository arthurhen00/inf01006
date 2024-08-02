import csv
from columns import *

data_folder = 'data'
files = ['players_15.csv']#,'players_16.csv','players_17.csv','players_18.csv']

players = []

for file in files:
    player = {}
    with open(f'{data_folder}\{file}', newline='') as csvfile:
        rows = csv.reader(csvfile, delimiter=',')
        header = next(rows)
        for col in rows:
            player['sofifa_id'] = SOFIFA_ID
            player['player_url'] = PLAYER_URL
            player['short_name'] = SHORT_NAME
            player['long_name'] = LONG_NAME
            
