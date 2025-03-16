"use server"; //this part marks it as server code btw!! very important

export default async function Ping(args: string) {
    console.log(args)

    return args.toUpperCase();
}