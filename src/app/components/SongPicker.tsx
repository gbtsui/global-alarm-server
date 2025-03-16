"use client";

const songs: Array<string> = ["megalovania", "rick", "skibidi toilet", "jojo part 5", "chinese rapping dog", "angry birds"]

export default function SongPicker({onPick}: {onPick: (song: string) => void}) {
    return (
        <div>
            <select className={"bg-camellia text-xl rounded-lg justify-self-center p-3"} onChange={(value) => onPick(value.target.value)}>
                {songs.map((song: string) => (
                    <option key={song} className={"bg-camellia rounded-lg text-lg"} value={song}>{song}</option>
                ))}
            </select>
        </div>
    )
}