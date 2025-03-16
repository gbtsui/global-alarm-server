"use client"
import {useEffect, useState} from "react"

const timeType = ["am", "pm"]
const hours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
const minutes1 = [0, 1, 2, 3, 4, 5]
const minutes2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

const getRandomTimeInteger = (type: Array<number | string>) => type[Math.floor(Math.random() * type.length)]

export default function SlotMachine({onFinish}: {onFinish: (result: [number, number, number, "am"|"pm"]) => void}) {
    const [reels, setReels] = useState<[number, number, number, "am"|"pm"]>([12, 0, 0, "am"])
    const [spinning, setSpinning] = useState(false)

    function spinWheels() {
        if (spinning) {
            return
        }
        setSpinning(true);

        let intervalCount = 0;
        const spinInterval = setInterval(() => {
            setReels([getRandomTimeInteger(hours) as number, getRandomTimeInteger(minutes1) as number, getRandomTimeInteger(minutes2) as number, getRandomTimeInteger(timeType) as "am"|"pm"]);
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
        <div className={"flex flex-col items-center justify-center gap-6 mt-2"}>
            <div className={"text-3xl font-bold tracking-widest flex gap-2"}>
                {/*reels.map((symbol, index) => (
                    <span key={index} className={"animate-bounce duration-250"}>{symbol}</span>
                ))*/}
                <span key={0} className={"animate-bounce duration-450"}>{reels[0]}</span>
                <span key={"divider"} className={"animate-bounce duration-460"}>:</span>
                <span key={1} className={"animate-bounce duration-470"}>{reels[1]}</span>
                <span key={2} className={"animate-bounce duration-480"}>{reels[2]}</span>
                <span key={3} className={"animate-bounce duration-490"}>{reels[3]}</span>

            </div>
            <button onClick={spinWheels} disabled={spinning} className={"rounded-xl transition-all hover:px-7 hover:py-5 text-lg px-6 py-4 bg-lilac text-woodsmoke disabled:bg-wisteria"}>
                {spinning ? "gambling..." : "randomize!"}
            </button>
            
        </div>
    )
}