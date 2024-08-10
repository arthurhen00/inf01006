import { GetNationResponse } from '@src/routes/nation/responses'
import { GetPlayerResponse } from './get-player.response'
import { GetPlayerStatsResponse } from './get-players-stats.response'

export class GetPaginatedResponse {
  items: number
  page: number
  pages: number
  current_page: number
  data: GetPlayerResponse[]

  constructor(items, page, pages, current_page, data) {
    this.items = items
    this.page = page
    this.pages = pages
    this.current_page = current_page
    this.data = data
  }

  static fromArray(Player: any[], page: number = 1): GetPaginatedResponse {
    const itemsPerPage = 100
    const startIndex = (page - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    const paginatedPlayers = Player.slice(startIndex, endIndex)
    const totalItems = Player.length
    const totalPages = Math.ceil(totalItems / itemsPerPage)
    const currentPage = page

    const data = paginatedPlayers.map((response) => new GetPlayerResponse(response))

    return new GetPaginatedResponse(totalItems, currentPage, totalPages, currentPage, data)
  }
}
