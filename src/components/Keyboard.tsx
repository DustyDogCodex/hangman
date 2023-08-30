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

function Keyboard() {
    return (
        <div
            className="mt-5 flex flex-wrap items-center justify-center gap-2 bg-white"
        >
            {KEYS.map((letter, index) => 
                <button 
                    key={index} 
                    className="m-2 bg-sky-400 text-amber-400 text-4xl h-16 w-16 rounded-lg hover:scale-125 transition duration-300"
                >
                    {letter.toUpperCase()}
                </button>
            )}
        </div>
    )
}

export default Keyboard