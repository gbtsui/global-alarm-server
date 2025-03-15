"use client"
import SlotMachine from "@/app/components/SlotMachine";
import {useEffect, useState} from "react";
import SongPicker from "@/app/components/SongPicker";

export default function MainPage() {
    const [timeArray, setTimeArray] = useState<[number, number, number, "am" | "pm"]>([12, 0, 0, "am"]);
    const [actualTime, setActualTime] = useState<Date>();
    const [selectedSong, setSelectedSong] = useState<string>("");

    function getFutureDate([hour, minute1, minute2, ampm]: [number, number, number, "am" | "pm"]): Date {
        const now = new Date();
        let hours24 = hour % 24;
        if (ampm == "pm") hours24 += 12;
        const targetDate = new Date(
            now.getFullYear(),
            now.getMonth(),
            now.getDate(),
            hours24,
            (minute1 * 10) + minute2,
            0,
            0
        )
        if (targetDate <= now) {
            targetDate.setDate(targetDate.getDate() + 1);
        }
        return targetDate;
    }

    useEffect(() => {setActualTime(getFutureDate(timeArray))}, [timeArray]);

    return (
        <div>
            <div className={"m-6 p-3 bg-wisteria text-woodsmoke rounded-4xl"}>
                <h1 className={"text-5xl text-center"}>GlobalAlarm</h1>
                <div className={"flex flex-col justify-center"}>
                    <h2 className={"flex-auto text-2xl text-center"}>pay a small fee to annoy strangers in the middle of
                        the
                        night.</h2>
                    <h3 className={"flex-auto text-xl text-center"}>a project for scrapyard by gabriel, felix, and
                        sharon.</h3>
                </div>
            </div>
            <div id={"enter-stuff-idk"} className={"bg-woodsmoke rounded-3xl p-4 w-1/2 flex flex-row mx-6"}>
                <div id={"wakeup-time"} className={"p-3 justify-items-center flex flex-col w-1/3"}>
                    <label className={"text-2xl text-center p-3 bg-lilac text-camellia rounded-xl mb-7"}>Wakeup
                        time:</label>
                    <SlotMachine onFinish={(result) => setTimeArray(result)}/>
                </div>
                <div id={"song-picker"} className={"p-3 justify-items-center flex flex-col w-1/3"}>
                    <label className={"text-2xl text-center p-3 bg-lilac text-camellia rounded-xl mb-7"}>Pick a song!</label>
                    <SongPicker onPick={(song) => setSelectedSong(song)}/>
                </div>
            </div>

        </div>
    )
}