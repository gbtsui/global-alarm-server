"use client"

import {ReactNode} from "react";

export default function Modal(
        {
            isOpen,
            onClose,
            title,
            children,
            buttons
        }
        :
        {
            isOpen: boolean,
        onClose: () => void,
        title: string,
        children: ReactNode,
        buttons?: ReactNode,
        }
    ) {

    if (!isOpen) return null

    return (
        <div className={"fixed inset-0 bg-black bg-opacity-30 overflow-hidden h-screen w-full flex items-center justify-center z-50"}>
            <div className={"p-6 bg-background rounded-3xl shadow-lg w-1/2 overflow-auto"}>
                <div className={"flex justify-between items-center mb-4"}>
                    <h3 className={"text-xl font-bold"}>{title}</h3>
                    <button onClick={onClose} className={"bg-wisteria text-woodsmoke p-4 rounded-xl"}>
                        x
                    </button>
                </div>
                <div className={"space-y-4"}>
                    {children}
                </div>
                <div className={"flex justify-between items-center mb-4"}>
                    {buttons}
                </div>
            </div>
        </div>
    )
}