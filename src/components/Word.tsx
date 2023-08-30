//props interface
export interface Props {
    word: string
}

function Word(props: Props) {
    return (
        <div
            className="mt-5 text-5xl flex items-center justify-center gap-2 font-bold underline"
        >
            {props.word.split('').map((letter: string, index: number) => <span key={index}>{letter.toUpperCase()}</span>)}
        </div>
    )
}
export default Word