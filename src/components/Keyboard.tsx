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
            className="mt-5 flex flex-wrap items-center justify-center gap-2"
        >
            {KEYS.map((letter, index) => 
                <button 
                    key={index} 
                    onClick={() => addUsedLetter(letter)}
                    disabled={disabled}
                    className={`m-2 ${usedLetters?.includes(letter) || disabled ? 'bg-gray-600 text-black/60' : 'bg-violet-800 text-orange-500 hover:scale-125 transition duration-300' } text-4xl h-16 w-16 rounded-lg`}
                >
                    {letter.toUpperCase()}
                </button>
            )}
        </div>
    )
}

export default Keyboard