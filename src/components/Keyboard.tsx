const KEYS: string[] = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
]

//props object with types
type Props = {
    usedLetters: string[],
    addUsedLetter: (letter: string) => void,
    disabled?: boolean
}

function Keyboard({ usedLetters, addUsedLetter, disabled = false }: Props) {
    return (
        <div
            className="mt-5 flex flex-wrap items-center justify-center gap-4 lg:w-2/5"
        >
            {/* styling for buttons is conditional on whether the letter is in usedLetters array and if keyboard is disabled */}
            {KEYS.map((letter, index) => 
                <button 
                    key={index} 
                    onClick={() => addUsedLetter(letter)}
                    disabled={disabled}
                    className={`${usedLetters?.includes(letter) || disabled ? 'bg-gray-600 text-black/60' : 'bg-sky-400 text-amber-400 hover:scale-125 transition duration-300' } text-2xl md:text-4xl h-12 md:h-16 w-12 md:w-16 rounded-lg`}
                >
                    {letter.toUpperCase()}
                </button>
            )}
        </div>
    )
}

export default Keyboard