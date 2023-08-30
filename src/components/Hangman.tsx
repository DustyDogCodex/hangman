export interface Props {
    numGuesses: number
}

function Hangman(props: Props) {
    //body parts 
    const head = (
        <div 
            className="w-12 h-12 rounded-full border-4 border-black absolute top-16 right-[-14px]"
        />
    )

    const body = (
        <div 
            className="w-1 h-28 bg-black absolute top-28 right-2"
        />
    )

    const right_arm = (
        <div 
            className="w-1 h-16 bg-black absolute top-24 -right-4 rotate-45"
        />
    )

    const left_arm = (
        <div 
            className="w-1 h-16 bg-black absolute top-24 right-8 -rotate-45"
        />
    )

    const right_leg = (
        <div 
            className="w-1 h-12 bg-black absolute top-52 -right-2 rotate-[135deg]"
        />
    )

    const left_leg = (
        <div 
            className="w-1 h-12 bg-black absolute top-52 right-6 -rotate-[135deg]"
        />
    )

    //body parts array
    const bodyParts = [ head, body, right_arm, left_arm, right_leg, left_leg ]

    return (
        <div
            className="relative"
        >
            {/* body parts conditionally rendered based on user's progress */}
            {bodyParts.slice(0, props.numGuesses)}

            {/* gallows */}
            {/* small vertical line where the body will hang */}
            <div 
                className="h-16 w-5 bg-black absolute top-0 right-0"
            />

            {/* top overhang */}
            <div 
                className="h-5 w-72 bg-black ml-36"
            />

            {/* main vertical stand */}
            <div
                className="h-96 w-5 bg-black ml-36"
            />
            
            {/* bottom bar for drawing */}
            <div
                className="h-5 w-72 bg-black"
            />
        </div>
    )
}
export default Hangman