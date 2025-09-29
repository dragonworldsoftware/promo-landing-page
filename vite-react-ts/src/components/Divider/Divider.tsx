interface DividerProps {
  colorLight?: string
  colorDark?: string
}

function Divider({
  colorLight = 'bg-gray-dark/20',
  colorDark = 'dark:bg-gray-light/20'
}: DividerProps) {
  return (
    <div className="px-4 py-8">
      <div
        className={`mx-auto h-px w-full max-w-[600px] ${colorLight} ${colorDark}`}
      ></div>
    </div>
  )
}

export default Divider
