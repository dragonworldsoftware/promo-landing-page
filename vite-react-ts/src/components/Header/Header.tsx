import { useState, useEffect } from 'react'
import ThemeToggle from '../ThemeToggle/ThemeToggle'

interface HeaderProps {
  logo: string
  brand: string
  nav: Array<{
    text: string
    link: string
    isActive?: boolean
  }>
  button: {
    text: string
    link: string
  }
}

function Header({ logo, brand, nav, button }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Add scroll listener for shadow effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent, link: string) => {
    e.preventDefault()
    console.log(`Navigate to ${link}`)
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <header
        className={`sticky top-0 z-40 border-b border-green-secondary/30 bg-green-header/90 backdrop-blur-sm transition-shadow duration-300 ${
          isScrolled ? 'shadow-2xl' : ''
        }`}
      >
        <div className="max-w-full px-4">
          <div className="flex h-16 items-center justify-between">
            {/* Logo and Company Name */}
            <div className="flex items-center space-x-3">
              <img
                src={logo}
                alt={`${brand} Logo`}
                className="size-10"
                onError={(e) => {
                  e.currentTarget.src = '/logo.png'
                }}
              />
              <span className="text-lg font-semibold text-white">{brand}</span>
            </div>

            {/* Desktop Navigation - Only shows at 1024px and up */}
            <nav className="hidden items-center space-x-8 lg:flex">
              {nav.map((item) => (
                <a
                  key={item.text}
                  href={item.link}
                  onClick={(e) => handleNavClick(e, item.link)}
                  className={`cursor-pointer transition-colors ${
                    item.isActive
                      ? 'border-b-2 border-yellow-primary pb-1 text-yellow-primary'
                      : 'text-white hover:text-yellow-primary'
                  }`}
                >
                  {item.text}
                </a>
              ))}
              <a
                href={button.link}
                onClick={(e) => handleNavClick(e, button.link)}
                className="flex items-center space-x-2 rounded-full border-2 border-white bg-transparent px-6 py-2 text-white transition-all duration-200 hover:border-yellow-primary hover:bg-yellow-primary hover:text-black"
              >
                <span>{button.text}</span>
                <svg
                  className="size-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
              <ThemeToggle />
            </nav>

            {/* Hamburger Menu Button - Shows below 1024px */}
            <div className="flex items-center space-x-4 lg:hidden">
              <ThemeToggle />
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="rounded-lg p-2 text-white transition-colors hover:bg-white/10"
                aria-label="Toggle menu"
              >
                <svg
                  className="size-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile/Tablet Menu Slide-out - FIXED SPACE HERE */}
      <div
        className={`fixed right-0 top-0 z-50 h-full w-64 bg-green-header shadow-xl transition-transform duration-300 ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{
          transform: isMobileMenuOpen ? 'translateX(0)' : 'translateX(100%)'
        }}
      >
        {/* Close button in slide-out menu */}
        <div className="flex justify-end p-4">
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="rounded-lg p-2 text-white transition-colors hover:bg-white/10"
            aria-label="Close menu"
          >
            <svg
              className="size-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <nav className="flex flex-col space-y-4 px-8">
          {nav.map((item) => {
            return (
              <a
                key={item.text}
                href={item.link}
                onClick={(e) => handleNavClick(e, item.link)}
                className={`py-2 text-lg transition-colors ${
                  item.isActive
                    ? 'border-l-4 border-yellow-primary pl-2 text-yellow-primary'
                    : 'text-white hover:text-yellow-primary'
                }`}
              >
                {item.text}
              </a>
            )
          })}
          <a
            href={button.link}
            onClick={(e) => handleNavClick(e, button.link)}
            className="mt-4 flex items-center justify-center space-x-2 rounded-full border-2 border-white bg-transparent px-6 py-2 text-white transition-all duration-200 hover:border-yellow-primary hover:bg-yellow-primary hover:text-black"
          >
            <span>{button.text}</span>
            <svg
              className="size-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </nav>
      </div>

      {/* Overlay - Only shows when menu is open */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  )
}

export default Header
