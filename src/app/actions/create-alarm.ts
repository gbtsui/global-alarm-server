"use server"

import {Alarm, alarmList, picoList} from "@/app/api/pico-database";

export default async function CreateAlarm(time: Date, song: string) {
    const songId = 0

    const pico = picoList[0]
    const alarm: Alarm = {time: time, song: songId, pico: pico}

    //alarmList.push(alarm)
    //necessary??? idk atp we have 30 minutes left
    console.log(alarm)
    await fetch("http://global-alarm.gbtsui.dev/alarm/ring", {
        method: "POST",
        body: JSON.stringify({time: alarm.time.getTime(), song: songId})
    })
}