"use client"
import SlotMachine from "@/app/components/SlotMachine";
import {PaymentModal, SuccessModal} from "@/app/components/paymentModal";
import {useEffect, useState} from "react";
import SongPicker from "@/app/components/SongPicker";
import Modal from "@/app/components/Modal";

export default function MainPage() {
    const [timeArray, setTimeArray] = useState<[number, number, number, "am" | "pm"]>([12, 0, 0, "am"]);
    const [actualTime, setActualTime] = useState<Date | undefined>(undefined);
    const [selectedSong, setSelectedSong] = useState<string>("");

    const [paymentModalOpen, setPaymentModalOpen] = useState(false);
    const [successModalOpen, setSuccessModalOpen] = useState(false);

    function getFutureDate([hour, minute1, minute2, ampm]: [number, number, number, "am" | "pm"]): Date {
        const now = new Date();
        let hours24 = hour % 24;
        if (ampm == "pm") hours24 += 12;
        const targetDate = new Date(
            now.getFullYear(),
            now.getMonth(),
            now.getDate(),
            hours24,
            (minute1 * 10) + minute2,
            0,
            0
        )
        if (targetDate <= now) {
            targetDate.setDate(targetDate.getDate() + 1);
        }
        return targetDate;
    }

    function completePayment() {
        setPaymentModalOpen(false);
        setSuccessModalOpen(true);

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ time: actualTime, song: selectedSong })
        };
        fetch('/api/', requestOptions)
        .then(response => response.json())
        //.then(data => this.setState({ postId: data.id }));
    }

    useEffect(() => {setActualTime(getFutureDate(timeArray))}, [timeArray]);

    return (
        <div>
            <div className={"m-6 p-3 bg-wisteria text-woodsmoke rounded-4xl"}>
                <h1 className={"text-5xl text-center"}>GlobalAlarm</h1>
                <div className={"flex flex-col justify-center"}>
                    <h2 className={"flex-auto text-2xl text-center"}>pay a small fee to annoy strangers in the middle of
                        the
                        night.</h2>
                    <h3 className={"flex-auto text-xl text-center"}>a project for scrapyard by gabriel, felix, and
                        sharon.</h3>
                </div>
            </div>
            <div className={"flex flex-col"}>
                <div id={"enter-stuff-idk"} className={"p-4 max-w-1/2 grid grid-cols-2"}>
                    <label className={"text-2xl text-center text-lilac rounded-xl mb-3"}>Wakeup
                            time:</label>
                    <label className={"text-2xl text-center text-lilac rounded-xl"}>Pick a
                            song!</label>
                    <div className='row-span-2'><SlotMachine onFinish={(result) => setTimeArray(result)} /></div>
                    <SongPicker onPick={(song) => setSelectedSong(song)}/>
                    <button onClick={() => setPaymentModalOpen(true)} className={"p-3 bg-lilac text-woodsmoke rounded-lg m-6"}>Set Alarm!</button>
                </div>
                <div className={"bg-camellia rounded-3xl p-4 w-1/2 flex flex-row mx-6"}>
                    <h3 className={"text-xl"}>What is this?</h3>
                    <p>
                        {actualTime?.toString()}
                        {selectedSong}
                    </p>
                </div>
            </div>
            <Modal isOpen={paymentModalOpen} onClose={() => setPaymentModalOpen(false)} title={"Payment Required to Proceed"}>
                <PaymentModal onClose={() => completePayment()} data={{selectedSong: selectedSong, time: actualTime as Date}}/>
            </Modal>

            <Modal isOpen={successModalOpen} onClose={() => setSuccessModalOpen(false)} title={"Payment Processed"}>
                <SuccessModal onClose={() => setSuccessModalOpen(false)} />
            </Modal>
        </div>
  )
}