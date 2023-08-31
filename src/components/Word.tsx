//props object
type Props = {
    word: string,
    usedLetters: string[],
    showWord: boolean
}

function Word({ word, usedLetters, showWord }: Props) {
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
                        className={`${ usedLetters?.includes(letter) || showWord ? 'visible' : 'invisible' } ${ !usedLetters?.includes(letter) && showWord ? 'text-red-600' : '' }`}
                    >
                        {letter.toUpperCase()}
                    </span>
                </div>
            )}
        </div>
    )
}
export default Word