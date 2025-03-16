import Ping from "@/app/actions/test-action";

type PaymentModalProps = {
    selectedSong: string;
    time: Date;
}

export default function PaymentModal({onClose, data}: {onClose: () => void, data: PaymentModalProps}) {

    return (
    <form>
        <div className={"flex flex-col space-y-2"}>
            <div className={"flex flex-col"}>
                <label>Credit Card Number</label>
                <input type='number' className='border-1 border-neutral-300 rounded-sm'></input>
            </div>
            <div className={"flex flex-row justify-between"}>
                <div className={"flex flex-col"}>
                    <label>CVV/CVC</label>
                    <input type='number' className='flex-1 border-1 px-1 border-neutral-300 rounded-sm' max='999' min='111'></input>
                </div>

                <div className={"flex flex-col"}>
                    <label>Expiry (MM/YY)</label>
                    <input type='text' className='flex-1 border-1 px-1 border-neutral-300 rounded-sm'></input>
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
                <input type={"submit"} onClick={() => {Ping("skibity"); onClose();}} className={"p-3 bg-blue-600 text-white rounded-lg"} value='Process Payment'></input>
            </div>
        </div>
    </form>
    )
}
