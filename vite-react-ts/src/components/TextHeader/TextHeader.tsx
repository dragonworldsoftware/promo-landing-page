interface TextHeaderProps {
  text: string
  align?: 'left' | 'center' | 'right' | 'full'
  colorLight?: string
  colorDark?: string
}

function TextHeader({
  text,
  align = 'left',
  colorLight = 'text-black',
  colorDark = 'dark:text-white'
}: TextHeaderProps) {
  const getAlignmentClass = (alignment: string) => {
    switch (alignment) {
      case 'center':
        return 'text-center'
      case 'right':
        return 'text-right'
      case 'full':
        return 'text-justify'
      default:
        return 'text-left'
    }
  }

  return (
    <h2
      className={`mb-6 text-3xl font-bold ${colorLight} ${colorDark} ${getAlignmentClass(
        align
      )}`}
    >
      {text}
    </h2>
  )
}

export default TextHeader
