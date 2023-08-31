//props interface
export interface Props {
    word: string,
    usedLetters: string[]
}

function Word(props: Props) {
    return (
        <div
            className="mt-5 text-5xl flex items-center justify-center gap-2 font-bold"
        >
            {props.word.split('').map((letter: string, index: number) => 
                <div
                    className="w-12 border-b-4 border-black"
                >
                    <span 
                        key={index} 
                        className={`${ props.usedLetters?.includes(letter) ? 'visible' : 'invisible' } `}
                    >
                        {letter.toUpperCase()}
                    </span>
                </div>
            )}
        </div>
    )
}
export default Word