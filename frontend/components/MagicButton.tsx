import React from 'react'

const MagicButton = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses
}: {
  title: string
  icon: React.ReactNode
  position: string
  handleClick?: () => void
  otherClasses?: string
}) => {
  return (
    <button
      className="relative inline-flex h-12 w-full md:w-60 md:mt-10 overflow-hidden rounded-lg p-[1px] focus:outline-none"
      onClick={handleClick}
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />

      <span
        className={`relative inline-flex h-full w-full items-center justify-center rounded-lg
             bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2 overflow-hidden ${otherClasses} hover:bg-white hover:text-black transition-colors duration-500 ease-in-out`}
      >
        <span className="relative z-10 flex items-center gap-2">
          {position === 'left' && icon}
          {title}
          {position === 'right' && icon}
        </span>
      </span>
    </button>
  )
}

export default MagicButton
