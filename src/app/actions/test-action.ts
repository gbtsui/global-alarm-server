"use server"; //this part marks it as server code btw!! very important

import {picoList} from "@/app/api/pico-database";

//const picoIp: string = "192.168.232.64"

export default async function Ping(args: string) {
    console.log(args)
    const picoIp = picoList[Math.round(Math.random() * picoList.length)].ip;

    fetch("http://" + picoIp + "/led/on", {
        method: "GET"
    })
        .then((response) => console.log(response))//.json)
    return args.toUpperCase();
}

export async function FireAlarm() {
    const picoIp = picoList[Math.round(Math.random() * picoList.length)].ip;

    const response = await fetch("http://" + picoIp + "/alarm/ring", {
        method: "GET",
        headers: {}
    }).then((response) => response.json())

    if (!response.ok) {
        picoList.splice(picoList.findIndex(pico => pico.ip === picoIp), 1);
        return false;
    } else {
        return true;
    }
}