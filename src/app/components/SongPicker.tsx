"use client";

import {useEffect} from "react";

const songs: Array<string> = ["megalovania", "rick", "skibidi toilet", "jojo part 5", "chinese rapping dog", "angry birds"]

export default function SongPicker({onPick}: {onPick: (song: string) => void}) {
    useEffect(() => {
        onPick(songs[0])
    })

    return (
        <div>
            <select className={"bg-woodsmokelight text-lilac text-xl rounded-lg justify-self-center p-3"} onChange={(value) => onPick(value.target.value)}>
                {songs.map((song: string) => (
                    <option key={song} className={"bg-woodsmokelight rounded-lg text-lg"} value={song}>{song}</option>
                ))}
            </select>
        </div>
    )
}