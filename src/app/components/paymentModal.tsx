export default function PaymentModal() {
    return (
    <div>
        <h3 className={"text-2xl"}>Payment Required to Proceed</h3>
        <div className={"flex flex-col space-y-2"}>
            <div className={"flex flex-col"}>
                <label>Credit Card Number</label>
                <input type='number' className='border-1 border-neutral-300 rounded-sm'></input>
            </div>
            <div className={"flex flex-row space-x-2 mb-5"}>
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
         </div>
    </div>
    )
}
