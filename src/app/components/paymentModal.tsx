import {FireAlarm} from "@/app/actions/test-action";
import CreateAlarm from "@/app/actions/create-alarm";
import {Alarm} from "@/app/api/pico-database";

type PaymentModalProps = {
    selectedSong: number;
    time: Date;
}

export function PaymentModal({onClose, data}: {onClose: () => void, data: PaymentModalProps}) {
    return (<div className={"flex"}>
    <form>
        <div className={"flex flex-col space-y-2"}>
            <div className={"flex flex-col"}>
                <label>Credit Card Number</label>
                <input type='number' className='border-1 border-neutral-300 rounded-sm'></input>
            </div>
            <div className={"flex flex-row space-x-2"}>
                <div className={"flex flex-col"}>
                <label>CVV/CVC</label>
                <input type='number' className='border-1 border-neutral-300 rounded-sm'></input>
            </div>

                <div className={"flex flex-1 lex-col"}>
                    <label>Expiry (MM/YY)</label>
                    <input type='text' className='border-1 px-1 border-neutral-300 rounded-sm'></input>
                </div>
            </div>
            <div className={"flex flex-col mt-5"}>
                <label>Address Line 1</label>
                <input type='text' className='border-1 px-1 border-neutral-300 rounded-sm'></input>
            </div>
            <div className={"flex flex-col"}>
                <label>Address Line 2</label>
                <input type='text' className='border-1 px-1 border-neutral-300 rounded-sm'></input>
            </div>
            <div className={"flex flex-row justify-between"}>
                <div className={"flex flex-col"}>
                    <label>Country</label>
                    <input type='text' className='flex-1 border-1 px-1 border-neutral-300 rounded-sm'></input>
                </div>

                <div className={"flex flex-col"}>
                    <label>State</label>
                    <input type='text' className='flex-1 border-1 px-1 border-neutral-300 rounded-sm'></input>
                </div>
            </div>
            <div className={"flex flex-row justify-between"}>
                <div className={"flex flex-col"}>
                    <label>City</label>
                    <input type='text' className='flex-1 border-1 px-1 border-neutral-300 rounded-sm'></input>
                </div>

                <div className={"flex flex-col"}>
                    <label>Postal Code</label>
                    <input type='text' className='flex-1 border-1 px-1 border-neutral-300 rounded-sm'></input>
                </div>
            </div>
            <div>
                <input type={"submit"} onClick={() => {CreateAlarm(data.time, "aaaa"); onClose();}} className={"p-3 bg-wisteria text-woodsmoke rounded-lg"}></input>
            </div>
        </div>
    </form>
    <div className={"ml-4"}>
        <h3 className={"text-2xl"}>We Accept:</h3>
        <ul className={"list-disc list-inside"}>
            <li>Kidney</li>
            <li>Bitcoin</li>
            <li>Visa</li>
            <li>Monero</li>
            <li>Hack Club B**k</li>
            <li>Walgreens Gift Card</li>
            <li>Jeff Bezos</li>
            <li>Cybertruck</li>
            <li>[redacted]</li>
        </ul>
    </div>
    </div>)
}

export function SuccessModal({onClose}: {onClose: () => void}) {
    return (
        <div className='align-middle'>
            <img className={'max-w-[50%]'} src='https://hc-cdn.hel1.your-objectstorage.com/s/v3/d10f3beb7f8466e048b640fc2f6149da3a5f0647_image.png' alt=''></img>
            <p className='text-xl'>Your Payment (${Math.round(Math.random()*100000)/100}) has been Completed</p>
            <p>Stored via Unencrypted Receipt Printer in the founders home :D</p>
            <p>A request has been forceably shoved somewhere, hope you ruined someones day :(</p>

            <div>
                <button onClick={() => onClose()} className={"p-3 bg-green-600 text-white rounded-lg"} value='Exit'>Thanks :D</button>
            </div>
        </div>
    )
}