interface SectionWrapperProps {
  children: React.ReactNode
  bgColorLight?: string
  bgColorDark?: string
  maxContentWidth?: string
}

function SectionWrapper({
  children,
  bgColorLight = 'bg-white',
  bgColorDark = 'dark:bg-black',
  maxContentWidth = '1024px'
}: SectionWrapperProps) {
  return (
    <section className={`${bgColorLight} ${bgColorDark} w-full`}>
      <div className="mx-auto px-4" style={{ maxWidth: maxContentWidth }}>
        {children}
      </div>
    </section>
  )
}

export default SectionWrapper
