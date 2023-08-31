//props object
type Props = {
    word: string,
    usedLetters: string[]
}

function Word({ word, usedLetters }: Props) {
    return (
        <div
            className="mt-5 text-5xl flex items-center justify-center gap-2 font-bold"
        >
            {word.split('').map((letter: string, index: number) => 
                <div
                    className="w-12 border-b-4 border-black flex items-center justify-center"
                >
                    <span 
                        key={index} 
                        className={`${ usedLetters?.includes(letter) ? 'visible' : 'invisible' } `}
                    >
                        {letter.toUpperCase()}
                    </span>
                </div>
            )}
        </div>
    )
}
export default Word