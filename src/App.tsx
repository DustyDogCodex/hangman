import { useState } from 'react'
import './App.css'
import words from './ListOfWords.js'
import Hangman from './components/Hangman.js'
import Word from './components/Word.js'
import Keyboard from './components/Keyboard.js'

function App() {
    //choosing a random word to be guessed
    const [ word, setWord ] = useState<string>(words[Math.floor(Math.random() * words.length)])

    //array for storing words that have already been used. This is to prevent duplicate words from being used in game.
    const [ guessedWords, setGuessedWords ] = useState<string[]>([])

    return (
        <div
            className='bg-slate-300 text-2xl flex flex-col items-center justify-center h-screen w-screen'
        >
            <div
                className='bg-white p-10 rounded-lg'
            >           
                <Hangman />
                <Word word={word} />
            </div>
            <Keyboard />
        </div>
    )
}

export default App
