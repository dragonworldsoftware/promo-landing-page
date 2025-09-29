import { useState, useEffect, useRef } from 'react'

interface SupportedBrandsProps {
  text: string
  brands: Array<{
    image: string
    alt: string
  }>
}

function SupportedBrands({ text, brands }: SupportedBrandsProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  // Create infinite array by tripling the brands
  const infiniteBrands = [...brands, ...brands, ...brands]
  const containerRef = useRef<HTMLDivElement>(null)

  // Auto-scroll functionality
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      handleNext()
    }, 3000)

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [currentIndex])

  // Reset to middle when reaching edges for infinite loop
  useEffect(() => {
    if (currentIndex === 0) {
      setTimeout(() => {
        if (containerRef.current) {
          containerRef.current.style.transition = 'none'
          setCurrentIndex(brands.length)
          setTimeout(() => {
            if (containerRef.current) {
              containerRef.current.style.transition =
                'transform 700ms ease-in-out'
            }
          }, 50)
        }
      }, 700)
    } else if (currentIndex === brands.length * 2) {
      setTimeout(() => {
        if (containerRef.current) {
          containerRef.current.style.transition = 'none'
          setCurrentIndex(brands.length)
          setTimeout(() => {
            if (containerRef.current) {
              containerRef.current.style.transition =
                'transform 700ms ease-in-out'
            }
          }, 50)
        }
      }, 700)
    }
  }, [currentIndex, brands.length])

  const handlePrevious = () => {
    setCurrentIndex((prev) => prev - 1)
  }

  const handleNext = () => {
    setCurrentIndex((prev) => prev + 1)
  }

  // Pause auto-scroll on hover
  const handleMouseEnter = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }
  }

  const handleMouseLeave = () => {
    intervalRef.current = setInterval(() => {
      handleNext()
    }, 3000)
  }

  return (
    <div className="py-12">
      <h2 className="mb-8 text-center text-xl font-semibold text-black dark:text-white">
        {text}
      </h2>

      <div
        className="relative flex items-center justify-center"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Previous Button - Always light */}
        <button
          onClick={handlePrevious}
          className="absolute left-0 z-10 rounded-full bg-white p-2 shadow-lg transition-colors duration-300 hover:bg-gray-light"
          aria-label="Previous brands"
        >
          <svg
            className="size-6 text-gray-dark"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        {/* Brands Container - Shows only 3 items */}
        <div className="mx-16 w-full max-w-[456px] overflow-hidden">
          {' '}
          {/* 3 * 120px + 2 * 48px gaps */}
          <div
            ref={containerRef}
            className="flex gap-12 transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${
                currentIndex * 168
              }px)` /* 120px width + 48px gap */
            }}
          >
            {infiniteBrands.map((brand, index) => (
              <div key={`${brand.alt}-${index}`} className="shrink-0">
                <img
                  src={brand.image}
                  alt={brand.alt}
                  className="size-[120px] rounded-lg object-contain opacity-90 transition-all duration-300 hover:scale-105 hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Next Button - Always light */}
        <button
          onClick={handleNext}
          className="absolute right-0 z-10 rounded-full bg-white p-2 shadow-lg transition-colors duration-300 hover:bg-gray-light"
          aria-label="Next brands"
        >
          <svg
            className="size-6 text-gray-dark"
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
        </button>
      </div>
    </div>
  )
}

export default SupportedBrands
