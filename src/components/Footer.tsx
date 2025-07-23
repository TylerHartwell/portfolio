export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="flex justify-center p-4 bg-slate-200 z-10">
      <div className="text-xs">Copyright © {currentYear} Tyler Hartwell</div>
    </footer>
  )
}
