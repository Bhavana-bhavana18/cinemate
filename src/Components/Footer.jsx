import { Link } from 'react-router-dom'
export const Footer = () => {
  return (
    <footer className="bg-neutral-primary-soft shadow-xs border border-default dark:bg-neutral-primary-dark dark:border-gray-700">
      <div className="w-full mx-auto max-w-7xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-body sm:text-center">© 2026 <Link href="https://flowbite.com/" className="hover:underline">Flowbite™</Link>. All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-body sm:mt-0">
          <li>
            <Link href="#" target='_blank' className="hover:underline me-4 md:me-6">Instagram</Link>
          </li>
          <li>
            <Link href="#" target='_blank' className="hover:underline me-4 md:me-6">LinkedIn</Link>
          </li>
          <li>
            <Link href="#" target='_blank' className="hover:underline me-4 md:me-6">Github</Link>
          </li>
          <li>
            <Link href="#" target='_blank' className="hover:underline">YouTub</Link>
          </li>
        </ul>
      </div>
    </footer>

  )
}
