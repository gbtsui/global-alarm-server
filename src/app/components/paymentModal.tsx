import {FireAlarm} from "@/app/actions/test-action";
import CreateAlarm from "@/app/actions/create-alarm";
import {Alarm} from "@/app/api/pico-database";

type PaymentModalProps = {
    selectedSong: number;
    time: Date;
}

export default function PaymentModal({onClose, data}: {onClose: () => void, data: PaymentModalProps}) {

    return (<>
    <h3 className={"text-2xl"}>Payment Required to Proceed</h3>
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

            <div className={"flex flex-col"}>
                <label>Expiry (MM/YY)</label>
                <input type='text' className='border-1 border-neutral-300 rounded-sm'></input>
            </div>
            </div>
            <div className={"flex flex-col mt-5"}>
                <label>Address Line 1</label>
                <input type='number' className='border-1 border-neutral-300 rounded-sm'></input>
            </div>
            <div className={"flex flex-col"}>
                <label>Address Line 2</label>
                <input type='number' className='border-1 border-neutral-300 rounded-sm'></input>
            </div>
            <div>
                <input type={"submit"} onClick={() => {CreateAlarm(data.time, "aaaa"); onClose();}} className={"p-3 bg-wisteria text-woodsmoke rounded-lg"}></input>
            </div>
        </div>
    </form>
    </>)
}
