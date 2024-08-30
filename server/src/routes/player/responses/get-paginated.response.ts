import { GetPlayerResponse } from './get-player.response'

export class GetPaginatedResponse {
  items: number
  page: number
  pages: number
  data: GetPlayerResponse[]

  constructor(items, page, pages, data) {
    this.items = items
    this.page = page
    this.pages = pages
    this.data = data
  }

  static fromArray(Player: any[], page: number = 1, totalItems): GetPaginatedResponse {
    const itemsPerPage = 100
    const totalPages = Math.ceil(totalItems / itemsPerPage)
    const currentPage = page

    return new GetPaginatedResponse(totalItems, currentPage, totalPages, Player)
  }
}
