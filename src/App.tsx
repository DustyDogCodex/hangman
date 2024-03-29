import { useCallback, useEffect, useState } from 'react'
import './App.css'
import words from './ListOfWords.js'
import Hangman from './components/Hangman.js'
import Word from './components/Word.js'
import Keyboard from './components/Keyboard.js'
import Confetti from 'react-confetti'
import WinLoseMessage from './components/WinLoseMessage.js'

function App() {
    //randomly selecting a new word
    let newWord: string = words[Math.floor(Math.random() * words.length)]

    //choosing a random word to be guessed
    const [ word, setWord ] = useState<string>(newWord)

    //array for storing letters that have already been used
    const [ usedLetters, setUsedLetters ] = useState<string[]>([])

    let wrongGuesses = usedLetters.filter(letter => !word.includes(letter))

    //determine game win or lose state
    const loser = wrongGuesses.length >= 6 
    const winner = word.split('').every(letter => usedLetters.includes(letter))
    
    const addUsedLetter = useCallback((letter: string) => {
        //if user has selected this letter already, ignore keypress
        if (usedLetters.includes(letter) || loser || winner) return

        setUsedLetters(usedLetters => [ ...usedLetters, letter ])
    }, [ usedLetters ])

    //event listeners for key presses
    useEffect(() => {
        //handler function for key press
        const handleKeyPress = (ev: KeyboardEvent) => {
            const selectedKey = ev.key

            //ignoring all keys that are not a letter key
            if(!selectedKey.match(/^[a-z,A-Z]$/)) return

            ev.preventDefault()
            addUsedLetter(selectedKey.toLowerCase())
        }

        //add event listener for key press
        document.addEventListener("keypress", handleKeyPress)

        return () => { document.removeEventListener('keypress', handleKeyPress) }
    }, [])

    function newGame(){
        setWord(newWord)
        setUsedLetters([])
    }

    return (
        <div
            className='bg-black text-2xl flex flex-col items-center justify-center min-h-screen h-full w-screen'
        >         
            {/* win/lose message display */}
            {loser && (
                <WinLoseMessage winMessage={false} newGame={newGame} />
            )}
            {winner && (
                <WinLoseMessage winMessage={true} newGame={newGame} />
            )}
            {/* what is the point of winning if you don't have a little confetti to celebrate?? */}
            {winner && <Confetti />}

            {/* component with hangman drawing */}  
            <Hangman numGuesses={wrongGuesses.length} />

            {/* word to be guessed */}   
            <Word 
                word={word} 
                usedLetters={usedLetters} 
                showWord={loser}
            />
            
            {/* keyboard with keys that can be selected through clicking or pressing respective key on keyboard */}
            <Keyboard 
                usedLetters={usedLetters} 
                addUsedLetter={addUsedLetter} 
                disabled={winner || loser}
            />
        </div>
    )
}

export default App
