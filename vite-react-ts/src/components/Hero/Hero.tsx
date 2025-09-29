interface HeroProps {
  rating: number // 0 to 5, supports decimals like 4.5
  heading: string
  desc: string
  btn1: {
    text: string
    link: string
  }
  btn2: {
    text: string
    link: string
  }
  image: string
}

function Hero({ rating, heading, desc, btn1, btn2, image }: HeroProps) {
  // Function to render stars
  const renderStars = () => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0

    // Full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <span key={i} className="text-yellow-primary">
          ★
        </span>
      )
    }

    // Half star
    if (hasHalfStar) {
      stars.push(
        <span key="half" className="relative inline-block text-gray-dark">
          ★
          <span className="absolute left-0 top-0 w-1/2 overflow-hidden text-yellow-primary">
            ★
          </span>
        </span>
      )
    }

    // Empty stars
    const emptyStars = 5 - Math.ceil(rating)
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <span key={`empty-${i}`} className="text-gray-dark">
          ★
        </span>
      )
    }

    return stars
  }

  // Truncate description if too long
  const truncateText = (text: string, maxLength: number = 150) => {
    if (text.length <= maxLength) return text
    return text.substring(0, maxLength).trim() + '...'
  }

  return (
    <section className="py-12">
      <div className="flex flex-col items-center justify-between rounded-2xl bg-green-header p-12 md:flex-row">
        {/* Left Content */}
        <div className="text-white md:w-1/2">
          {/* Rating */}
          <div className="mb-6 flex items-center space-x-2">
            <div className="flex">{renderStars()}</div>
            <span className="text-sm text-gray-light">Rated {rating}/5</span>
          </div>

          {/* Heading */}
          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">
            {heading}
          </h1>

          {/* Description */}
          <p className="mb-8 text-lg text-gray-light">{truncateText(desc)}</p>

          {/* CTA Buttons */}
          <div className="flex space-x-4">
            <a
              href={btn1.link}
              className="inline-block rounded-full bg-white px-6 py-3 text-green-header transition-colors hover:bg-gray-light"
            >
              {btn1.text}
            </a>
            <a
              href={btn2.link}
              className="inline-block rounded-full border-2 border-white bg-transparent px-6 py-3 text-white transition-colors hover:bg-white hover:text-green-header"
            >
              {btn2.text}
            </a>
          </div>
        </div>

        {/* Right Content - Image */}
        <div className="mt-8 flex justify-end md:mt-0 md:w-1/2">
          <img
            src={image}
            alt={heading}
            className="w-full max-w-md rounded-lg object-cover"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
