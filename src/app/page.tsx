"use client"
import SlotMachine from "@/app/components/SlotMachine";

export default function MainPage() {
  return (
      <div>
        <div className={"m-6 p-3 bg-wisteria rounded-4xl"}>
          <h1 className={"text-5xl text-center"}>GlobalAlarm</h1>
            <div className={"flex flex-col justify-center"}>
                <h2 className={"flex-auto text-2xl text-center"}>pay a small fee to annoy strangers in the middle of the
                    night.</h2>
                <h3 className={"flex-auto text-xl text-center"}>a project for scrapyard by gabriel, felix, and sharon.</h3>
            </div>
        </div>
          <div className={"items-center"}>
            <h3>slot machine!!!</h3>
              <SlotMachine onFinish={(result) => console.log(result)} />
          </div>
      </div>
  )
}