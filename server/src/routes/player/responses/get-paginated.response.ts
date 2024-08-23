import { GetPlayerResponse } from './get-player.response'

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

  static fromArray(Player: any[], page: number = 1, totalItems): GetPaginatedResponse {
    const itemsPerPage = 100
    const startIndex = (page - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    const paginatedPlayers = Player.slice(startIndex, endIndex)
    const totalPages = Math.ceil(totalItems / itemsPerPage)
    const currentPage = page

    // old version data -> Player
    // now prisma does the pagination
    const data = paginatedPlayers.map((response) => new GetPlayerResponse(response))

    return new GetPaginatedResponse(totalItems, currentPage, totalPages, currentPage, Player)
  }
}
