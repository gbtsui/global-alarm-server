import {picoList, Pico} from "@/app/api/pico-database";
import {NextResponse} from "next/server";

/*
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    console.log("request recieved")
    if (req.method === "POST") {
        const {ip} = req.body
        const existing = picoList.find(pico => pico.ip === ip)

        if (!existing) {
            const newPico: Pico = {ip:ip, lastPing: new Date()}
            picoList.push(newPico);
        } else {
            existing.lastPing = new Date()
        }
        console.log(picoList)
        res.status(200)
    } else {
        res.status(401)
    }
}
 */

export async function POST(req: Request) {
    const data = await req.json()
    const existing = picoList.find(pico => pico.ip === data["ip"])

    if (!existing) {
        const newPico: Pico = {ip:data["ip"], lastPing: new Date()}
        picoList.push(newPico);
    } else {
        existing.lastPing = new Date()
    }
    console.log(picoList)
    return NextResponse.json({message: "sigma sigma boy sigma boy sigma boy"})
}
