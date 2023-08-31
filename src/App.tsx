import { useCallback, useEffect, useState } from 'react'
import './App.css'
import words from './ListOfWords.js'
import Hangman from './components/Hangman.js'
import Word from './components/Word.js'
import Keyboard from './components/Keyboard.js'

function App() {
    //choosing a random word to be guessed
    const [ word, setWord ] = useState<string>(words[Math.floor(Math.random() * words.length)])

    //array for storing words that have already been used. This is to prevent duplicate words from being used in game.
    const [ usedLetters, setUsedLetters ] = useState<string[]>([])

    let wrongGuesses = usedLetters.filter(letter => !word.includes(letter))
    
    const addUsedLetter = useCallback((letter: string) => {
        //if user has selected this letter already, ignore keypress
        if (usedLetters.includes(letter)) return

        setUsedLetters(usedLetters => [ ...usedLetters, letter ])
    }, [ usedLetters ])

    //event listeners for key presses
    useEffect(() => {
        //handler function for key press
        const handleKeyPress = (ev: KeyboardEvent) => {
            const selectedKey = ev.key

            //ignoring all keys that are not a letter key
            if(!selectedKey.match(/^[a-z]$/)) return

            ev.preventDefault()
            addUsedLetter(selectedKey)
        }

        //add event listener for key press
        document.addEventListener("keypress", handleKeyPress)

        return () => { document.removeEventListener('keypress', handleKeyPress) }
    }, [])

    return (
        <div
            className='bg-slate-300 text-2xl flex flex-col items-center justify-center h-screen w-screen'
        >           
            <Hangman numGuesses={wrongGuesses.length} />   
            <Word word={word} usedLetters={usedLetters} />
            <Keyboard usedLetters={usedLetters} addUsedLetter={addUsedLetter} />
        </div>
    )
}

export default App
