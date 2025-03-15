export default function PaymentModal() {
    return (<>
    <div id="payment-modal" className={"hidden fixed inset-0 z-10 overflow-auto bg-black bg-opacity-40"}>
    <div className={"bg-white my-16 mx-auto p-5 border border-gray-400 w-4/5 text-black font-mono"}>
        <h3 className={"text-2xl"}>Payment Required to Proceed</h3>
        <span className={"text-gray-400 float-right text-2xl font-bold hover:text-black hover:no-underline cursor-pointer"}>&times;</span>
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
    </div>
    </>)
}
