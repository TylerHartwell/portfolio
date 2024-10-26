import { FaChevronLeft, FaChevronRight } from "react-icons/fa"

interface PaginationControlsProps {
  currentPage: number
  totalPages: number
  handlePrevPage: () => void
  handleNextPage: () => void
}

export default function PaginationControls({ currentPage, totalPages, handlePrevPage, handleNextPage }: PaginationControlsProps) {
  return (
    <div className="flex justify-between items-center mt-auto bg-slate-200 border-slate-300 border-2">
      <button onClick={handlePrevPage} disabled={currentPage === 1} className="flex-1">
        <FaChevronLeft className={`h-10 w-10 ${currentPage === 1 && "text-gray-400"}`} />
      </button>
      <span className="p-2 text-sm text-nowrap">{`Page ${currentPage} of ${totalPages}`}</span>
      <button onClick={handleNextPage} disabled={currentPage === totalPages} className="flex-1 flex justify-end">
        <FaChevronRight className={`h-10 w-10 ${currentPage === totalPages && "text-gray-400"}`} />
      </button>
    </div>
  )
}
