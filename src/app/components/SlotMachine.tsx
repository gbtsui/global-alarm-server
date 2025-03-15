"use client"
import {useEffect, useState} from "react"

const timeType = ["am", "pm"]
const hours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
const minutes1 = [0, 1, 2, 3, 4, 5]
const minutes2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

const getRandomTimeInteger = (type: Array<number | string>) => type[Math.floor(Math.random() * type.length)]

export default function SlotMachine({onFinish}: {onFinish: (result: Array<number | string>) => void}) {
    const [reels, setReels] = useState([12, 0, 0, "am"])
    const [spinning, setSpinning] = useState(false)

    function spinWheels() {
        if (spinning) {
            return
        }
        setSpinning(true);

        let intervalCount = 0;
        const spinInterval = setInterval(() => {
            setReels([getRandomTimeInteger(hours), getRandomTimeInteger(minutes1), getRandomTimeInteger(minutes2), getRandomTimeInteger(timeType)]);
            intervalCount++;
            //console.log(reels)
            if (intervalCount >= 20) {
                clearInterval(spinInterval);
                setSpinning(false);
                return reels
            }
        }, 100)
    }
    useEffect(() => {if (!spinning) onFinish(reels)}, [spinning]);

    return (
        <div className={"flex flex-col items-center justify-center gap-6 p-8"}>
            <div className={"text-5xl font-bold tracking-widest flex gap-6"}>
                {/*reels.map((symbol, index) => (
                    <span key={index} className={"animate-bounce duration-250"}>{symbol}</span>
                ))*/}
                <span key={0} className={"animate-bounce duration-450"}>{reels[0]}</span>
                <span key={"divider"} className={"animate-bounce duration-460"}>:</span>
                <span key={1} className={"animate-bounce duration-470"}>{reels[1]}</span>
                <span key={2} className={"animate-bounce duration-480"}>{reels[2]}</span>
                <span key={3} className={"animate-bounce duration-490"}>{reels[3]}</span>

            </div>
            <button onClick={spinWheels} disabled={spinning} className={"text-lg px-6 py-4 bg-foreground text-background"}>
                {spinning ? "Spinning..." : "Let's go gambling!"}
            </button>
        </div>
    )
}