type Props = {
    winMessage: boolean,
    newGame: () => void
}

/* simple popup that will show a game won message if winMessage is true or a game lost message if game was lost. newGame will reset the game with a new word  */
function WinLoseMessage({ winMessage, newGame }: Props ) {
    return (
        <div
            className="absolute z-20 w-screen h-screen flex items-start justify-center bg-black/20"
        >
            <div
                className="bg-blue-600 flex flex-col items-center justify-center p-3 rounded-2xl mt-40 md:mt-80"
            >
                <h1 
                    className={`${ winMessage ? 'text-amber-400' : 'text-orange-500'} text-3xl font-bold mb-5`}
                >
                    { winMessage ? 'Congrats you won! 😸' : 'Sorry you lost! 😿' }
                </h1>
            
                <button 
                    className='bg-green-400 text-white px-4 py-1 rounded-full mb-5'
                    onClick={newGame}
                >
                    { winMessage ? 'New Game' : 'Restart' }
                </button>
            </div>
        </div>
    )
}
export default WinLoseMessage