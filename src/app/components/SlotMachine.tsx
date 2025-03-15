"use client"
import {useState} from "react"

const symbols = ["🍒", "🔔", "🍋", "⭐", "💎", "7️⃣"];
const getRandomSymbol = () => symbols[Math.floor(Math.random() * symbols.length)];

export default function SlotMachine() {
    const [reels, setReels] = useState(["🍒", "🍒", "🍒"])
    const [spinning, setSpinning] = useState(false)

    function spinWheels() {
        if (spinning) {
            return
        }

        setSpinning(true)

        let intervalCount = 0;
        const spinInterval = setInterval(() => {
            setReels([getRandomSymbol(), getRandomSymbol(), getRandomSymbol()]);
            intervalCount++;
            if (intervalCount >= 20) {
                clearInterval(spinInterval);
                setSpinning(false)
            }
        }, 100)
    }

    return (
        <div className={"flex flex-col items-center justify-center gap-6 p-8"}>
            <div className={"text-5xl font-bold tracking-widest flex gap-6"}>
                {reels.map((symbol, index) => (
                    <span key={index} className={"animate-bounce duration-250"}>{symbol}</span>
                ))}
            </div>
            <button onClick={spinWheels} disabled={spinning} className={"text-lg px-6 py-4"}>
                {spinning ? "Spinning..." : "Let's go gambling!"}
            </button>
        </div>
    )
}