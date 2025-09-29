interface TextParagraphProps {
  text: string
  align?: 'left' | 'center' | 'right' | 'full'
  colorLight?: string
  colorDark?: string
}

function TextParagraph({
  text,
  align = 'left',
  colorLight = 'text-gray-dark',
  colorDark = 'dark:text-gray-light'
}: TextParagraphProps) {
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
    <p
      className={`text-lg leading-relaxed ${colorLight} ${colorDark} ${getAlignmentClass(
        align
      )}`}
    >
      {text}
    </p>
  )
}

export default TextParagraph
