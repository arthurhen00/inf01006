/**
 * This component receives a player object,
 * but he may have played for several years,
 * and for several clubs, so 1 player can have N cards,
 * N cards per year in different clubs
 */
import { Player } from '@/data'
import { Separator } from './ui'

export function Card(player: Player) {
  return (
    <>
      {player.PlayerStats.map((yearData, index) =>
        yearData.PlayerClub.length > 0 ? (
          yearData.PlayerClub.map((clubData, clubIndex) => (
            <div className="flex h-56 w-44 items-center justify-center bg-yellow-600" key={`${index}-${clubIndex}`}>
              <div className="flex h-52 w-40 flex-col rounded-3xl bg-zinc-700">
                <div className="flex pl-2 pt-2">
                  <div className="flex flex-col items-center font-bold text-white">
                    <div>{yearData.overall ?? 0}</div>
                    <div className="mb-1">{clubData.club_position ?? 'N/A'}</div>
                    <img
                      src={clubData.Club?.Nation?.nation_flag_url ?? 'default_flag_url.png'}
                      className="mb-1 h-5 w-7"
                    />
                    <img src={clubData.Club?.club_logo_url ?? 'default_club_logo_url.png'} className="h-9 w-10" />
                  </div>
                  <div className="flex items-end">
                    <p className="absolute ml-16">{yearData.year}</p>
                    <img src="https://cdn.sofifa.net/players/158/023/22_120.png"></img>
                  </div>
                </div>

                <div className="flex h-full flex-col items-center rounded-b-3xl bg-slate-600 text-white">
                  <div className="font-bold">{player.short_name}</div>
                  <Separator className="bg-zinc-400" />
                  <div className="flex text-sm">
                    <div className="flex flex-col">
                      <span>{yearData.pace ?? 0} PAC</span>
                      <span>{yearData.shooting ?? 0} SHO</span>
                      <span>{yearData.passing ?? 0} PAS</span>
                    </div>
                    <Separator orientation="vertical" className="ml-2 mr-2 bg-zinc-400" />
                    <div className="flex flex-col">
                      <span>{yearData.dribbling ?? 0} DRI</span>
                      <span>{yearData.defending ?? 0} DEF</span>
                      <span>{yearData.physic ?? 0} PHY</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="flex h-56 w-44 items-center justify-center bg-yellow-600" key={index}>
            <div className="flex h-52 w-40 flex-col rounded-3xl bg-zinc-700">
              <div className="flex pl-2 pt-2">
                <div className="flex flex-col items-center font-bold text-white">
                  <div>{yearData.overall ?? '--'}</div>
                  <div className="mb-1">N/A</div>
                  <img src="https://placehold.co/32/EEE/31343C" className="mb-1 h-5 w-7" />
                  <img src="https://placehold.co/48/EEE/31343C" className="h-9 w-10" />
                </div>
                <div className="flex items-end">
                  <p className="absolute ml-16">{yearData.year}</p>
                  <img src="https://placehold.co/100/EEE/31343C"></img>
                </div>
              </div>

              <div className="flex h-full flex-col items-center rounded-b-3xl bg-slate-600 text-white">
                <div className="font-bold">{player.short_name}</div>
                <Separator className="bg-zinc-400" />
                <div className="flex text-sm">
                  <div className="flex flex-col">
                    <span>{yearData.pace ?? 0} PAC</span>
                    <span>{yearData.shooting ?? 0} SHO</span>
                    <span>{yearData.passing ?? 0} PAS</span>
                  </div>
                  <Separator orientation="vertical" className="ml-2 mr-2 bg-zinc-400" />
                  <div className="flex flex-col">
                    <span>{yearData.dribbling ?? 0} DRI</span>
                    <span>{yearData.defending ?? 0} DEF</span>
                    <span>{yearData.physic ?? 0} PHY</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ),
      )}
    </>
  )
}
