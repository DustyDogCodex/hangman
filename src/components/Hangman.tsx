function Hangman() {
    return (
        <div
            className="relative"
        >
            {/* small overhang where the body will hang */}
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