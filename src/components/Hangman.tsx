type Props = {
    numGuesses: number
}

function Hangman({ numGuesses }: Props) {
    //body parts 
    const head = (
        <div 
            key={1}
            className="w-12 h-12 rounded-full border-4 border-white absolute top-10 md:top-16 right-[-20px] md:right-[-14px]"
        />
    )

    const body = (
        <div 
            key={2}
            className="w-1 h-28 bg-white absolute top-[84px] md:top-28 right-0 md:right-2"
        />
    )

    const right_arm = (
        <div
            key={3} 
            className="w-1 h-16 bg-white absolute top-20 md:top-24 -right-6 md:-right-4 rotate-45"
        />
    )

    const left_arm = (
        <div 
            key={4}
            className="w-1 h-16 bg-white absolute top-20 md:top-24 right-6 md:right-8 -rotate-45"
        />
    )

    const right_leg = (
        <div 
            key={5}
            className="w-1 h-12 bg-white absolute top-[188px] md:top-52 -right-4 md:-right-2 rotate-[135deg]"
        />
    )

    const left_leg = (
        <div 
            key={6}
            className="w-1 h-12 bg-white absolute top-[188px] md:top-52 right-4 md:right-6 -rotate-[135deg]"
        />
    )

    //body parts array
    const bodyParts = [ head, body, right_arm, left_arm, right_leg, left_leg ]

    return (
        <div
            className="relative mt-10"
        >
            {/* body parts conditionally rendered based on user's progress */}
            {bodyParts.slice(0, numGuesses)}

            {/* gallows */}
            {/* small vertical line where the body will hang */}
            <div 
                className="h-10 md:h-16 w-2 md:w-5 bg-white absolute top-0 right-0"
            />

            {/* top overhang */}
            <div 
                className="h-2 md:h-5 w-40 md:w-72 bg-white ml-20 md:ml-36"
            />

            {/* main vertical stand */}
            <div
                className="h-72 md:h-96 w-2 md:w-5 bg-white ml-20 md:ml-36"
            />
            
            {/* bottom bar for drawing */}
            <div
                className="h-2 md:h-5 w-40 md:w-72 bg-white"
            />
        </div>
    )
}
export default Hangman