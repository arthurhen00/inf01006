import { useSearchParams } from 'react-router-dom'
import { Button } from './ui'
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react'

interface PaginationProps {
  items: number
  page: number
  pages: number
  listed: number
}

export function PaginationDemo({ items, page, pages, listed }: PaginationProps) {
  const [, setSearchParams] = useSearchParams()

  function firstPage() {
    setSearchParams((params) => {
      params.set('page', '1')

      return params
    })
  }

  function previousPage() {
    if (page - 1 <= 0) {
      return
    }

    setSearchParams((params) => {
      params.set('page', String(page - 1))

      return params
    })
  }

  function nextPage() {
    if (page + 1 > pages) {
      return
    }

    setSearchParams((params) => {
      params.set('page', String(page + 1))

      return params
    })
  }

  function lastPage() {
    setSearchParams((params) => {
      params.set('page', String(pages))

      return params
    })
  }

  return (
    <div className="flex items-center justify-between text-sm text-snd-200">
      <span>
        {listed} of {items} players
      </span>
      <div className="flex items-center gap-x-8">
        <span>
          Page {page} of {pages}
        </span>

        <div className="space-x-1.5">
          <Button
            className="border-[1px] border-snd-300 bg-fst-800 text-snd-100"
            onClick={firstPage}
            size="icon"
            disabled={page - 1 <= 0}
          >
            <ChevronsLeft className="size-4" />
            <span className="sr-only">First page</span>
          </Button>
          <Button
            className="border-[1px] border-snd-300 bg-fst-800 text-snd-100"
            onClick={previousPage}
            size="icon"
            disabled={page - 1 <= 0}
          >
            <ChevronLeft className="size-4" />
            <span className="sr-only">Previous page</span>
          </Button>
          <Button
            className="border-[1px] border-snd-300 bg-fst-800 text-snd-100"
            onClick={nextPage}
            size="icon"
            disabled={page + 1 > pages}
          >
            <ChevronRight className="size-4" />
            <span className="sr-only">Next page</span>
          </Button>
          <Button
            className="border-[1px] border-snd-300 bg-fst-800 text-snd-100"
            onClick={lastPage}
            size="icon"
            disabled={page == pages}
          >
            <ChevronsRight className="size-4" />
            <span className="sr-only">Last page</span>
          </Button>
        </div>
      </div>
    </div>
  )
}
