import { useState } from "react"

export default function Batsman() {

    const [runs, setRuns] = useState(0);

    const [sixes, setSixes] = useState(0);

    const handleSingle = () => {
        const updatedRuns = runs + 1;
        setRuns(updatedRuns)
    }

    const handleFour = () => {
        const updatedRuns = runs + 4;
        setRuns(updatedRuns)
    }

    const handleSix = () => {
        const updatedRuns = runs + 6;

        const updateSixes = sixes + 1;
        setSixes(updateSixes)
        setRuns(updatedRuns)
    }

    return (
        <div>
            <h3>Player: Bangladeshi Batsman</h3>
            <h1>Score: {runs}</h1>
            <h3>Sixes: {sixes}</h3>
            <button onClick={handleSingle}>Single</button>
            <button onClick={handleFour}>Four</button>
            <button onClick={handleSix}>Six</button>

            {
                runs > 50 && <p>Your score: 50 up</p>
            }
        </div>
    )

}