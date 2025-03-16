"use server"
import {Pico, picoList} from "@/app/api/pico-database";

export async function FireAlarm() {
    let actionPicoList: Array<Pico> = []//picoList//[{ ip: '192.168.232.64', lastPing: new Date() } ]
    console.log("fire alarm wee woo")
    console.log(actionPicoList)
    actionPicoList = picoList
    console.log(actionPicoList)

    if (!actionPicoList) {
        return false
    }

    const picoIp = actionPicoList[Math.floor(Math.random() * picoList.length)]["ip"];

    const response = await fetch("http://" + picoIp + "/alarm/ring", {
        method: "GET",
        headers: {}
    }).then((response) => response.json())

    if (!response.ok) {
        actionPicoList.splice(actionPicoList.findIndex(pico => pico.ip === picoIp), 1);
        return false;
    } else {
        return true;
    }

}