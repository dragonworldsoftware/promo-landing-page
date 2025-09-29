import { useState } from 'react'

interface ToggleDropdownProps {
  question: {
    text: string
    colorLightHide?: string
    colorLightShow?: string
    colorDarkHide?: string
    colorDarkShow?: string
  }
  answer: {
    text: string
    colorLight?: string
    colorDark?: string
  }
  toggle?: {
    colorLightHide?: string
    colorLightShow?: string
    colorDarkHide?: string
    colorDarkShow?: string
  }
}

function ToggleDropdown({ question, answer, toggle }: ToggleDropdownProps) {
  const [isOpen, setIsOpen] = useState(false)

  // Default colors
  const questionColors = {
    lightHide: question.colorLightHide || 'text-black',
    lightShow: question.colorLightShow || 'text-green-primary',
    darkHide: question.colorDarkHide || 'dark:text-white',
    darkShow: question.colorDarkShow || 'dark:text-yellow-primary'
  }

  const answerColors = {
    light: answer.colorLight || 'text-gray-dark',
    dark: answer.colorDark || 'dark:text-gray-light'
  }

  const toggleColors = {
    lightHide: toggle?.colorLightHide || 'bg-green-primary',
    lightShow: toggle?.colorLightShow || 'bg-green-dark',
    darkHide: toggle?.colorDarkHide || 'dark:bg-green-primary',
    darkShow: toggle?.colorDarkShow || 'dark:bg-yellow-primary'
  }

  return (
    <div className="border-b border-green-header/50 py-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between text-left"
      >
        <h3
          className={`pr-4 text-lg font-semibold ${
            isOpen
              ? `${questionColors.lightShow} ${questionColors.darkShow}`
              : `${questionColors.lightHide} ${questionColors.darkHide}`
          }`}
        >
          {question.text}
        </h3>
        <div
          className={`flex size-8 shrink-0 items-center justify-center rounded-full transition-all duration-200 ${
            isOpen
              ? `${toggleColors.lightShow} ${toggleColors.darkShow}`
              : `${toggleColors.lightHide} ${toggleColors.darkHide}`
          }`}
        >
          <svg
            className={`size-4 text-white transition-transform duration-200 ${
              isOpen ? 'rotate-180' : ''
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </button>

      {isOpen && (
        <div className="mt-4 pl-4">
          <p
            className={`${answerColors.light} ${answerColors.dark} leading-relaxed`}
          >
            {answer.text}
          </p>
        </div>
      )}
    </div>
  )
}

export default ToggleDropdown
